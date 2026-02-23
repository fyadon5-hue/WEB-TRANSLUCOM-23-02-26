import { motion } from "framer-motion";
import { Calendar, User } from "lucide-react";

export default function News() {
  const news = [
    {
      title: "Expansión de Flota 2026",
      date: "20 Feb 2026",
      author: "Admin",
      image: "https://www.shacman.com.ar/assets/images/products/carousel/002.jpg",
      excerpt: "Incorporamos 14 unidades Scania y Shacman para mejorar nuestra capacidad de carga y eficiencia en rutas.",
    },
    {
      title: "Certificación ISO 9001",
      date: "20 Sep 2025",
      author: "Calidad",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
      excerpt: "Renovamos nuestra certificación de calidad, reafirmando nuestro compromiso con la excelencia en cada proceso logístico.",
    },
    {
      title: "Nuevas rutas en el Sur Argentino",
      date: "05 Ene 2026",
      author: "Logística",
      image: "https://www.planetacamion.com.ar/wp-content/uploads/2022/07/PC-Scania-410-GNC-Hermann-088.jpg",
      excerpt: "Ampliamos nuestra cobertura nacional, con nuevas rutas por la Patagonia Argentina, llegando a los puntos más australes del país.",
    },
  ];

  return (
    <section id="news" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Novedades
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 leading-tight"
          >
            Últimas Noticias <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              del Sector Logístico
            </span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {item.author}
                  </span>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">
                  {item.title}
                </h4>
                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-4">
                  {item.excerpt}
                </p>
                <a href="#" className="text-teal-600 font-medium text-sm hover:text-teal-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Leer más <span className="text-lg">→</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
