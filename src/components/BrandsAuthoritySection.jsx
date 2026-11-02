import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  Flame, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

export default function BrandsAuthoritySection() {
  return (
    <section id="ozonofit" className="py-16 md:py-20 bg-[#F2ECE1] border-b border-[#E7E2D6] relative overflow-hidden">
      
      {/* Background soft glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-[#0F4C3A]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-3 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0F4C3A]/10 text-[#0F4C3A] text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-[#0F4C3A]" />
            <span>Trayectoria Empresarial & Red Clínica</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#15241E]">
            Respaldo y Liderazgo: <br className="hidden sm:inline" />
            <span className="font-serif-italic font-normal text-[#0F4C3A]">CEO en Ozonofit Internacional</span>
          </h2>

          <p className="text-xs sm:text-sm text-[#4E5C55] max-w-2xl mx-auto leading-relaxed">
            Más que un fisioterapeuta individual: Dr. Fisio dirige centros especializados en Ozonoterapia Médica (O³), Fisioterapia Invasiva y Readaptación Deportiva de Élite con sedes activas en dos países.
          </p>
        </motion.div>

        {/* The 2 Enterprise Centers Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card 1: Ozonofit Perú */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E7E2D6] shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F4C3A]/10 text-[#0F4C3A] text-xs font-extrabold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Lima, Perú (Surco)</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#FF9F1C] bg-[#FF9F1C]/10 px-2.5 py-1 rounded-md">
                  Sede Clínica
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F4C3A] to-[#15241E] text-white flex items-center justify-center font-black text-lg shadow-md group-hover:scale-105 transition-transform">
                  O³
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#15241E]">Ozonofit Perú</h3>
                  <a 
                    href="https://www.instagram.com/ozonofit.pe/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-[#0F4C3A] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>@ozonofit.pe</span>
                    <InstagramIcon className="w-3 h-3 text-[#D93D64]" />
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#4E5C55] leading-relaxed mb-5">
                Centro de referencia en Lima para atletas de alto rendimiento, rehabilitación de baloncesto (*Basketball Rehab Specialist*) y protocolos de Ozonoterapia y Fisioterapia Invasiva para acelerar la regeneración de tejidos.
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#2A3832] py-3 border-y border-[#F2ECE1]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C3A]"></span>
                  <span>Ozonoterapia Médica (O³)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C3A]"></span>
                  <span>Basketball Rehab</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C3A]"></span>
                  <span>Fisioterapia Invasiva</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C3A]"></span>
                  <span>Readaptación Deportiva</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <a 
                href="https://www.instagram.com/ozonofit.pe/" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#F5F2EB] hover:bg-[#0F4C3A] hover:text-white text-[#15241E] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Conocer @ozonofit.pe en Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Ozonofit Venezuela */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-7 sm:p-8 border border-[#E7E2D6] shadow-md hover:shadow-xl transition-all duration-300 relative group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0F4C3A]/10 text-[#0F4C3A] text-xs font-extrabold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Caracas, Venezuela</span>
                </span>
                <span className="text-[10px] font-black uppercase tracking-wider text-[#0F4C3A] bg-[#0F4C3A]/10 px-2.5 py-1 rounded-md">
                  Sede Matriz
                </span>
              </div>

              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#15241E] to-[#254D43] text-white flex items-center justify-center font-black text-lg shadow-md group-hover:scale-105 transition-transform">
                  VE
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#15241E]">Ozonofit Venezuela</h3>
                  <a 
                    href="https://www.instagram.com/ozonofit.ve/" 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs text-[#0F4C3A] font-bold hover:underline inline-flex items-center gap-1"
                  >
                    <span>@ozonofit.ve</span>
                    <InstagramIcon className="w-3 h-3 text-[#D93D64]" />
                  </a>
                </div>
              </div>

              <p className="text-xs text-[#4E5C55] leading-relaxed mb-5">
                Pioneros en la integración de fisioterapia regenerativa en Caracas. Programas dedicados al tratamiento de columna, articulaciones y protocolo de dolor crónico para deportistas y pacientes ejecutivos.
              </p>

              <div className="grid grid-cols-2 gap-2 text-[11px] text-[#2A3832] py-3 border-y border-[#F2ECE1]">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C3A]"></span>
                  <span>Clínica Especializada Caracas</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C3A]"></span>
                  <span>Servicio Domiciliario VIP</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C3A]"></span>
                  <span>Protocolo Reset Columna</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C3A]"></span>
                  <span>Alter Ego: @noexcuses_ig</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-2">
              <a 
                href="https://www.instagram.com/ozonofit.ve/" 
                target="_blank" 
                rel="noreferrer"
                className="w-full py-3 px-4 rounded-xl bg-[#F5F2EB] hover:bg-[#0F4C3A] hover:text-white text-[#15241E] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Conocer @ozonofit.ve en Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* Global Authority Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-white/80 border border-[#E7E2D6] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-5xl mx-auto text-xs text-[#4E5C55]">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-9 h-9 rounded-xl bg-[#0F4C3A] text-white flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#FF9F1C]" />
            </div>
            <div>
              <span className="font-bold text-[#15241E] block">Seguridad clínica y método comprobado a nivel binacional</span>
              <span>Todos los protocolos aplicados por Dr. Fisio cuentan con el aval metodológico de la red Ozonofit.</span>
            </div>
          </div>

          <a 
            href="#reservar"
            className="whitespace-nowrap px-4 py-2.5 rounded-xl bg-[#0F4C3A] hover:bg-[#14624B] text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5"
          >
            <span>Agendar con el CEO</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF9F1C]" />
          </a>
        </div>

      </div>
    </section>
  );
}
