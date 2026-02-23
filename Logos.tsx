import { motion } from "motion/react";
import { Truck, Package, ShieldAlert, Wrench } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Cargas Peligrosas",
      description: "Transporte especializado de materiales peligrosos con certificación y cumplimiento total de normativas vigentes.",
      icon: <ShieldAlert className="w-8 h-8 text-teal-500" />,
      color: "bg-teal-50",
    },
    {
      title: "Cargas Generales",
      description: "Soluciones de transporte para todo tipo de mercancías, garantizando la integridad y seguridad de su carga.",
      icon: <Package className="w-8 h-8 text-blue-500" />,
      color: "bg-blue-50",
    },
    {
      title: "Alquiler de Maquinaria",
      description: "Flota moderna de palas cargadoras, topadoras y retroexcavadoras para sus proyectos de construcción.",
      icon: <Wrench className="w-8 h-8 text-orange-500" />,
      color: "bg-orange-50",
    },
    {
      title: "Logística Integral",
      description: "Gestión completa de su cadena de suministro, desde el almacenamiento hasta la distribución final.",
      icon: <Truck className="w-8 h-8 text-indigo-500" />,
      color: "bg-indigo-50",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold text-slate-900 leading-tight"
          >
            Soluciones Logísticas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">
              Adaptadas a su Negocio
            </span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 bg-white rounded-2xl border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 rounded-xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                {service.title}
              </h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <div className="mt-6">
                <a href="#quote" className="text-teal-600 font-medium text-sm hover:text-teal-700 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Saber más <span className="text-lg">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Clients Section */}
        <div className="mt-24 pt-16 border-t border-slate-100">
          <div className="text-center mb-12">
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl font-bold text-slate-900 mb-4"
            >
              Clientes que confían en nosotros
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 max-w-2xl mx-auto"
            >
              Desde hace muchos años, mantenemos relaciones sólidas con empresas líderes del mercado, 
              brindando soluciones logísticas de excelencia a compañías como Coca Cola, YPF, Holcim y Loma Negra.
            </motion.p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" 
              alt="Coca Cola" 
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://logos-world.net/wp-content/uploads/2023/05/YPF-Logo.png" 
              alt="YPF" 
              className="h-10 md:h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/Holcim_logo.svg" 
              alt="Holcim" 
              className="h-8 md:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://mercado.com.ar/wp-content/webp-express/webp-images/uploads/2025/03/Loma-Negra.jpg.webp" 
              alt="Loma Negra" 
              className="h-10 md:h-14 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
