import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Inicio", href: "#home" },
    { name: "Nosotros", href: "#about" },
    { name: "Servicios", href: "#services" },
    { name: "Novedades", href: "#news" },
    { name: "Herramientas AI", href: "#ai-tools" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="text-2xl font-bold text-white tracking-tight">
              TRANSLUCOM
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-slate-300 hover:text-teal-400 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#quote"
                className="bg-teal-500 hover:bg-teal-600 text-slate-900 px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-lg shadow-teal-500/20 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Cotizar Ahora
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-teal-400 block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#quote"
                onClick={() => setIsOpen(false)}
                className="bg-teal-500 text-slate-900 block px-3 py-2 rounded-md text-base font-bold mt-4 text-center"
              >
                Cotizar Ahora
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
