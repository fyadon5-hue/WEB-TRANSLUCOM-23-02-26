import { GoogleGenerativeAI as GoogleGenAI } from "@google/generative-ai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export async function editImage(
  imageData: string,
  prompt: string,
  mimeType: string
): Promise<string> {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-image",
      contents: {
        parts: [
          {
            inlineData: {
              data: imageData,
              mimeType: mimeType,
            },
          },
          {
            text: prompt,
          },
        ],
      },
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("No image generated");
  } catch (error) {
    console.error("Error editing image:", error);
    throw error;
  }
}

export async function generateVideo(
  imageData: string,
  mimeType: string,
  aspectRatio: "16:9" | "9:16" = "16:9"
): Promise<string> {
  try {
    let operation = await ai.models.generateVideos({
      model: "veo-3.1-fast-generate-preview",
      image: {
        imageBytes: imageData,
        mimeType: mimeType,
      },
      config: {
        numberOfVideos: 1,
        resolution: "720p",
        aspectRatio: aspectRatio,
      },
    });

    while (!operation.done) {
      await new Promise((resolve) => setTimeout(resolve, 5000));
      operation = await ai.operations.getVideosOperation({
        operation: operation,
      });
    }

    const videoUri = operation.response?.generatedVideos?.[0]?.video?.uri;
    if (!videoUri) {
      throw new Error("No video generated");
    }

    // Fetch the video content using the API key
    const videoResponse = await fetch(videoUri, {
      headers: {
        "x-goog-api-key": process.env.GEMINI_API_KEY!,
      },
    });

    if (!videoResponse.ok) {
      throw new Error(`Failed to fetch video: ${videoResponse.statusText}`);
    }

    const videoBlob = await videoResponse.blob();
    return URL.createObjectURL(videoBlob);
  } catch (error) {
    console.error("Error generating video:", error);
    throw error;
  }
}
