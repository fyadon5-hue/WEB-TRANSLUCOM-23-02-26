import { useState, useRef, ChangeEvent } from "react";
import { motion } from "motion/react";
import { Upload, Image as ImageIcon, Video, Loader2, Wand2, Play } from "lucide-react";
import { editImage, generateVideo } from "../services/ai";

export default function AiTools() {
  const [activeTab, setActiveTab] = useState<"image" | "video">("image");

  return (
    <section id="ai-tools" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-screen filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block py-1 px-3 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-400 text-sm font-semibold tracking-wider mb-4"
          >
            INNOVACIÓN TECNOLÓGICA
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Herramientas de <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">IA para Logística</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg"
          >
            Experimente el futuro del transporte con nuestras herramientas de inteligencia artificial. Edite imágenes de carga o genere simulaciones de video.
          </motion.p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-800/50 p-1 rounded-xl inline-flex backdrop-blur-sm border border-slate-700">
            <button
              onClick={() => setActiveTab("image")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "image"
                  ? "bg-teal-500 text-slate-900 shadow-lg shadow-teal-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              Editor de Imágenes (Gemini)
            </button>
            <button
              onClick={() => setActiveTab("video")}
              className={`px-6 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-2 ${
                activeTab === "video"
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/20"
                  : "text-slate-400 hover:text-white hover:bg-slate-700/50"
              }`}
            >
              <Video className="w-4 h-4" />
              Generador de Video (Veo)
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-4xl mx-auto bg-slate-800/30 border border-slate-700 rounded-3xl p-8 backdrop-blur-md shadow-2xl">
          {activeTab === "image" ? <ImageEditor /> : <VideoGenerator />}
        </div>
      </div>
    </section>
  );
}

function ImageEditor() {
  const [image, setImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    if (!image || !prompt) return;
    setLoading(true);
    try {
      // Extract base64 data
      const base64Data = image.split(",")[1];
      const mimeType = image.split(";")[0].split(":")[1];
      
      const editedImage = await editImage(base64Data, prompt, mimeType);
      setResult(editedImage);
    } catch (error) {
      console.error(error);
      alert("Error al editar la imagen. Por favor intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-4">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-600 rounded-2xl h-64 flex flex-col items-center justify-center cursor-pointer hover:border-teal-500 hover:bg-slate-700/30 transition-all group relative overflow-hidden"
          >
            {image ? (
              <img src={image} alt="Original" className="w-full h-full object-contain p-2" />
            ) : (
              <>
                <Upload className="w-10 h-10 text-slate-500 group-hover:text-teal-500 mb-3 transition-colors" />
                <p className="text-slate-400 text-sm font-medium group-hover:text-teal-400">Click para subir imagen</p>
              </>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*"
            />
          </div>
          
          <div className="relative">
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Ej: Agregar un filtro retro, eliminar fondo..."
              className="w-full bg-slate-900/50 border border-slate-600 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
            />
            <button
              onClick={handleEdit}
              disabled={!image || !prompt || loading}
              className="absolute right-2 top-2 bg-teal-500 hover:bg-teal-400 disabled:bg-slate-700 disabled:cursor-not-allowed text-slate-900 p-1.5 rounded-lg transition-colors"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Wand2 className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="border-2 border-slate-700 rounded-2xl h-64 md:h-auto flex items-center justify-center bg-slate-900/30 relative overflow-hidden">
          {loading ? (
            <div className="text-center">
              <Loader2 className="w-10 h-10 text-teal-500 animate-spin mx-auto mb-3" />
              <p className="text-teal-400 text-sm animate-pulse">Procesando con Gemini...</p>
            </div>
          ) : result ? (
            <img src={result} alt="Edited" className="w-full h-full object-contain p-2" />
          ) : (
            <p className="text-slate-500 text-sm">El resultado aparecerá aquí</p>
          )}
        </div>
      </div>
    </div>
  );
}

function VideoGenerator() {
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
        setResult(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!image) return;
    setLoading(true);
    try {
      // Extract base64 data
      const base64Data = image.split(",")[1];
      const mimeType = image.split(";")[0].split(":")[1];
      
      const videoUrl = await generateVideo(base64Data, mimeType);
      setResult(videoUrl);
    } catch (error) {
      console.error(error);
      alert("Error al generar el video. Por favor intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Section */}
        <div className="space-y-4">
          <div 
            onClick={() => fileInputRef.current?.click()}
            className="border-2 border-dashed border-slate-600 rounded-2xl h-64 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-slate-700/30 transition-all group relative overflow-hidden"
          >
            {image ? (
              <img src={image} alt="Original" className="w-full h-full object-contain p-2" />
            ) : (
              <>
                <Upload className="w-10 h-10 text-slate-500 group-hover:text-blue-500 mb-3 transition-colors" />
                <p className="text-slate-400 text-sm font-medium group-hover:text-blue-400">Subir imagen para animar</p>
              </>
            )}
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleFileChange} 
              className="hidden" 
              accept="image/*"
            />
          </div>
          
          <button
            onClick={handleGenerate}
            disabled={!image || loading}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:bg-slate-700 disabled:cursor-not-allowed text-white py-3 rounded-xl font-medium transition-all shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Generando Video...
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Generar Animación con Veo
              </>
            )}
          </button>
        </div>

        {/* Output Section */}
        <div className="border-2 border-slate-700 rounded-2xl h-64 md:h-auto flex items-center justify-center bg-slate-900/30 relative overflow-hidden">
          {loading ? (
            <div className="text-center">
              <Loader2 className="w-10 h-10 text-blue-500 animate-spin mx-auto mb-3" />
              <p className="text-blue-400 text-sm animate-pulse">Creando magia con Veo...</p>
              <p className="text-slate-500 text-xs mt-2">Esto puede tomar unos momentos</p>
            </div>
          ) : result ? (
            <video 
              src={result} 
              controls 
              autoPlay 
              loop 
              className="w-full h-full object-contain rounded-xl"
            />
          ) : (
            <p className="text-slate-500 text-sm">El video aparecerá aquí</p>
          )}
        </div>
      </div>
    </div>
  );
}
