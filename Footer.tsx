import { motion } from "motion/react";

export default function About() {
  const bases = [
    { name: "Frías", province: "Santiago del Estero", top: "28%", left: "45%", desc: "Conexión NOA y Centro" },
    { name: "Córdoba", province: "Córdoba", top: "38%", left: "42%", desc: "Hub central de distribución" },
    { name: "Villa Mercedes", province: "San Luis", top: "42%", left: "38%", desc: "Corredor Bioceánico" },
    { name: "San Lorenzo", province: "Santa Fe", top: "39%", left: "55%", desc: "Puerto y zona agroexportadora" },
    { name: "Tucumán", province: "Tucumán", top: "22%", left: "43%", desc: "Acceso estratégico al Norte" }
  ];

  return (
    <section id="about" className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-teal-600 font-semibold tracking-wide uppercase text-sm mb-3">
            Sobre Nosotros
          </h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
            Compromiso con la <br />
            <span className="text-teal-600">Calidad y Puntualidad</span>
          </h3>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            En Translucom, entendemos que cada carga es una promesa. Nuestro equipo de profesionales altamente capacitados y nuestra flota de última generación garantizan que su mercancía llegue a tiempo y en perfectas condiciones.
          </p>
          <p className="text-lg text-slate-600 mb-12 leading-relaxed">
            Nos especializamos en soluciones logísticas a medida, adaptándonos a las necesidades específicas de cada cliente, desde cargas generales hasta transportes especializados y peligrosos.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center text-teal-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Seguridad Total</h4>
                <p className="text-slate-500 mt-1">Monitoreo 24/7 de todas las unidades para garantizar la integridad de su carga.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 shrink-0">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">Puntualidad</h4>
                <p className="text-slate-500 mt-1">Entregas justo a tiempo, optimizando sus procesos logísticos y comerciales.</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-12 border-t border-slate-200">
            {/* Strategic Locations Grid */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
              <div className="text-center mb-10">
                <h4 className="text-2xl font-bold text-slate-900 mb-3 flex items-center justify-center gap-2">
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                  Ubicaciones Estratégicas
                  <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
                </h4>
                <p className="text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Nuestras bases están estratégicamente distribuidas para garantizar una cobertura eficiente en los principales corredores logísticos del país.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {bases.map((item, idx) => (
                  <div 
                    key={idx} 
                    className="flex gap-4 items-start p-4 rounded-xl border bg-slate-50 border-slate-100 hover:border-teal-200 hover:shadow-md hover:-translate-y-1 transition-all"
                  >
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border shrink-0 transition-colors bg-white text-slate-400 border-slate-200">
                      {idx + 1}
                    </div>
                    <div className="text-left">
                      <h5 className="font-bold text-base text-slate-900">{item.name}</h5>
                      <p className="text-xs text-teal-600 font-medium mb-1 uppercase tracking-wide">{item.province}</p>
                      <p className="text-sm text-slate-500 leading-snug">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
