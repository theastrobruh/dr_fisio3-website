import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  Activity, 
  ChevronRight, 
  ShieldCheck, 
  Info,
  Sparkles,
  Zap,
  Target
} from 'lucide-react';

export const BODY_CONDITIONS = [
  {
    id: 'cervical',
    name: 'Cuello & Cervicales',
    subtitle: 'Neck Pain & Headaches',
    hotspots: [
      { x: 50, y: 15, label: 'Cervical C1-C7' }
    ],
    symptoms: 'Rigidez matutina, dolor que irradia a hombros, cefaleas tensionales por mala postura o estrés.',
    approach: 'Descompresión manual cervical, movilización articular suave y reeducación postural profunda.',
    protocol: 'Protocolo Descompresión Cervical (45 min)',
    badge: 'Frecuente en oficina'
  },
  {
    id: 'hombro',
    name: 'Hombro & Manguito Rotador',
    subtitle: 'Shoulder Pain & Impingement',
    hotspots: [
      { x: 37, y: 24, label: 'Hombro Izquierdo' },
      { x: 63, y: 24, label: 'Hombro Derecho' }
    ],
    symptoms: 'Dolor al levantar el brazo sobre la cabeza, pinzamiento subacromial o molestia nocturna al dormir de lado.',
    approach: 'Terapia miofascial de trapecio y manguito, artrocinemática glenohumeral y fortalecimiento excéntrico.',
    protocol: 'Reset Escapulohumeral Funcional',
    badge: 'Deportistas y Gimnasio'
  },
  {
    id: 'lumbar',
    name: 'Espalda Baja & Ciática',
    subtitle: 'Back Pain & Sciatica (Especialidad)',
    hotspots: [
      { x: 50, y: 46, label: 'Región Lumbar L4-S1', highlight: true }
    ],
    symptoms: 'Dolor punzante al agacharse, sensación de descarga eléctrica que baja por el glúteo o pierna, bloqueo al estar sentado.',
    approach: 'Protocolo Estrella "Reset Lumbar": Tracción selectiva, liberación del psoas/piramidal y reactivación del core profundo.',
    protocol: 'Protocolo Reset Lumbar® (Firma Dr. Fisio)',
    badge: '98% Alivio Sesión #1',
    isPrimary: true
  },
  {
    id: 'cadera',
    name: 'Cadera & Pelvis',
    subtitle: 'Hip & Pelvic Alignment',
    hotspots: [
      { x: 44, y: 53, label: 'Articulación Coxofemoral Izq' },
      { x: 56, y: 53, label: 'Articulación Coxofemoral Der' }
    ],
    symptoms: 'Chasquidos, limitación en sentadilla profunda, dolor en la ingle o asimetría al caminar.',
    approach: 'Movilizaciones pasivas grado III-IV, liberación de flexores de cadera y alineación pélvica dinámica.',
    protocol: 'Rebalance Pélvico y Movilidad 360°',
    badge: 'Movilidad articular'
  },
  {
    id: 'rodilla',
    name: 'Rodilla & Tendón Rotuliano',
    subtitle: 'Knee Pain & Ligament Care',
    hotspots: [
      { x: 42, y: 73, label: 'Rodilla Izquierda' },
      { x: 58, y: 73, label: 'Rodilla Derecha' }
    ],
    symptoms: 'Molestia al bajar escaleras, sobrecarga de corredores ("Runner Knee"), meniscopatías o post-quirúrgico.',
    approach: 'Descarga de cuádriceps/isquios, reprogramación propioceptiva y fortalecimiento cinético cerrado.',
    protocol: 'Readaptación de Rodilla Funcional',
    badge: 'Atletas y Corredores'
  },
  {
    id: 'tobillo',
    name: 'Tobillo, Talón & Pie',
    subtitle: 'Ankle Stability & Plantar Fascia',
    hotspots: [
      { x: 43, y: 92, label: 'Tobillo Izquierdo' },
      { x: 57, y: 92, label: 'Tobillo Derecho' }
    ],
    symptoms: 'Fascitis plantar al apoyar por la mañana, inestabilidad tras esguinces o sobrecarga en tendón de Aquiles.',
    approach: 'Terapia miofascial plantar, manipulación de astrágalo y fortalecimiento intrínseco del pie.',
    protocol: 'Reactivación de Apoyo y Arco Plantar',
    badge: 'Pisada y Apoyo'
  }
];

export default function InteractiveBodyMap({ onSelectCondition }) {
  const [selectedId, setSelectedId] = useState('lumbar');
  const activeCondition = BODY_CONDITIONS.find(c => c.id === selectedId) || BODY_CONDITIONS[2];

  return (
    <section id="mapa-dolor" className="py-24 md:py-32 bg-[#F5F2EB] border-y border-[#E7E2D6] relative overflow-hidden">
      
      {/* Background ambient decorative loop */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#0F4C3A]/5 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#FF9F1C]/8 rounded-full blur-3xl pointer-events-none animate-ambient-glow" style={{ animationDelay: '3s' }} />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header with entrance motion */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0F4C3A]/10 border border-[#0F4C3A]/20 text-[#0F4C3A] text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
              <Activity className="w-3.5 h-3.5 text-[#0F4C3A]" />
              <span>Mapa Biomecánico Interactivo</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#15241E] leading-[1.12]">
              Localiza tu foco de dolor. <br />
              <span className="font-serif-italic font-normal text-[#0F4C3A]">Identificamos la raíz, no solo el síntoma.</span>
            </h2>
          </div>
          <p className="text-sm md:text-base text-[#4E5C55] max-w-md font-normal leading-relaxed">
            Inspirado en la evaluación diagnóstica de clínicas deportivas de alto rendimiento. Haz clic sobre cada zona o condición para explorar nuestro abordaje clínico.
          </p>
        </motion.div>

        {/* Main Interactive Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid lg:grid-cols-12 gap-8 items-center bg-white/90 backdrop-blur-sm rounded-3xl p-6 sm:p-10 shadow-xl border border-[#E7E2D6] relative"
        >
          
          {/* Left Column: List of Condition Selectors */}
          <div className="lg:col-span-4 space-y-2.5">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-[#7E8C85] uppercase tracking-wider flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-[#0F4C3A]" />
                Selecciona una zona:
              </span>
              <span className="text-[10px] text-[#0F4C3A] font-bold bg-[#E8EFEA] px-2 py-0.5 rounded-full">
                6 Puntos Clínicos
              </span>
            </div>

            {BODY_CONDITIONS.map((cond) => {
              const isSelected = cond.id === selectedId;
              return (
                <button
                  key={cond.id}
                  onClick={() => setSelectedId(cond.id)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer relative overflow-hidden group ${
                    isSelected 
                      ? 'bg-[#0F4C3A] text-white border-[#0F4C3A] shadow-lg shadow-[#0F4C3A]/25 translate-x-1.5' 
                      : 'bg-[#FBF9F5] text-[#19221E] border-[#EAE6DC] hover:border-[#0F4C3A]/40 hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`w-2.5 h-2.5 rounded-full transition-transform duration-300 ${
                      isSelected ? 'bg-[#FF9F1C] scale-125' : 'bg-[#C5BEAF] group-hover:bg-[#0F4C3A]'
                    }`} />
                    <div>
                      <div className="text-sm font-bold leading-tight flex items-center gap-1.5">
                        <span>{cond.name}</span>
                        {cond.isPrimary && (
                          <span className={`text-[9px] px-1.5 py-0.2 rounded font-black tracking-wide ${
                            isSelected ? 'bg-[#FF9F1C] text-[#15241E]' : 'bg-[#0F4C3A]/10 text-[#0F4C3A]'
                          }`}>
                            RESET
                          </span>
                        )}
                      </div>
                      <div className={`text-[11px] ${isSelected ? 'text-white/80' : 'text-[#67776F]'}`}>
                        {cond.subtitle}
                      </div>
                    </div>
                  </div>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'text-[#FF9F1C] translate-x-1' : 'text-[#8E9B94] group-hover:translate-x-0.5'}`} />
                </button>
              );
            })}
          </div>

          {/* Center Column: Silhouette Body Map with Hotspots & Scan FX */}
          <div className="lg:col-span-4 flex justify-center items-center py-6 relative">
            <div className="relative w-64 h-[440px] flex items-center justify-center">
              
              {/* Silhouette SVG Anatomical Vector */}
              <svg 
                viewBox="0 0 200 400" 
                className="w-full h-full drop-shadow-md select-none"
                style={{ filter: 'drop-shadow(0px 12px 20px rgba(15, 76, 58, 0.12))' }}
              >
                {/* Clean medical human silhouette */}
                <g fill="#16302B" opacity="0.94">
                  {/* Head & Neck */}
                  <ellipse cx="100" cy="30" rx="19" ry="24" />
                  <path d="M92 53 H108 L114 65 H86 Z" />
                  
                  {/* Shoulders & Torso */}
                  <path d="M86 65 Q100 68 114 65 L138 76 Q146 80 144 92 L132 170 Q124 175 116 175 L84 175 Q76 175 68 170 L56 92 Q54 80 62 76 Z" />
                  
                  {/* Left Arm */}
                  <path d="M58 84 L40 140 Q36 155 35 180 L28 220 Q26 230 33 234 Q40 234 42 224 L48 184 L57 146 Z" />
                  {/* Right Arm */}
                  <path d="M142 84 L160 140 Q164 155 165 180 L172 220 Q174 230 167 234 Q160 234 158 224 L152 184 L143 146 Z" />
                  
                  {/* Pelvis */}
                  <path d="M78 174 H122 L128 208 Q100 216 72 208 Z" />
                  
                  {/* Left Leg */}
                  <path d="M74 208 L68 280 Q66 295 67 315 L66 370 Q64 380 72 384 Q80 384 81 372 L83 315 Q86 295 89 280 L96 210 Z" />
                  {/* Right Leg */}
                  <path d="M126 208 L132 280 Q134 295 133 315 L134 370 Q136 380 128 384 Q120 384 119 372 L117 315 Q114 295 111 280 L104 210 Z" />
                </g>

                {/* Spine alignment laser scanner effect */}
                <ellipse cx="100" cy="180" rx="14" ry="24" fill="none" stroke="#254D43" strokeWidth="2" strokeDasharray="3 3" opacity="0.6" />
                <line x1="84" y1="125" x2="116" y2="125" stroke="#254D43" strokeWidth="1.5" opacity="0.4" />
              </svg>

              {/* Vertical subtle scan line animation loop */}
              <div className="absolute left-1/2 -translate-x-1/2 w-48 h-1 bg-gradient-to-r from-transparent via-[#FF9F1C]/40 to-transparent animate-spine-scan pointer-events-none" />

              {/* Interactive Target Hotspots mapped to body */}
              {BODY_CONDITIONS.map((cond) => {
                const isSelected = cond.id === selectedId;
                return cond.hotspots.map((spot, idx) => (
                  <button
                    key={`${cond.id}-${idx}`}
                    onClick={() => setSelectedId(cond.id)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-20 group/point focus:outline-none cursor-pointer"
                    aria-label={spot.label}
                  >
                    <div className="relative flex items-center justify-center">
                      {/* Pulse beacon loop */}
                      <span className={`absolute rounded-full transition-all duration-300 ${
                        isSelected 
                          ? 'w-9 h-9 bg-[#FF9F1C]/40 animate-ping' 
                          : 'w-6 h-6 bg-white/40 group-hover/point:scale-125'
                      }`} />

                      {/* Radiating concentric ring */}
                      {isSelected && (
                        <span className="absolute w-12 h-12 rounded-full border border-[#FF9F1C]/60 animate-spin" style={{ animationDuration: '6s' }} />
                      )}
                      
                      {/* Inner circle button */}
                      <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shadow-lg transition-transform duration-200 ${
                        isSelected
                          ? 'bg-[#FF9F1C] border-white scale-125'
                          : 'bg-white border-[#15241E] group-hover/point:scale-115'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? 'bg-[#15241E]' : 'bg-[#15241E]'}`} />
                      </span>
                    </div>

                    {/* Tooltip on hover */}
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 pointer-events-none opacity-0 group-hover/point:opacity-100 transition-opacity bg-[#15241E] text-white text-[10px] font-bold py-1 px-2 rounded-md whitespace-nowrap shadow-xl z-30">
                      {spot.label}
                    </div>
                  </button>
                ));
              })}
            </div>
          </div>

          {/* Right Column: Diagnostic & Clinical Protocol Card */}
          <div className="lg:col-span-4 bg-[#FBF9F5] border border-[#E7E2D6] rounded-2xl p-6 sm:p-7 relative shadow-inner">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCondition.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0F4C3A]/10 text-[#0F4C3A] flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3 text-[#FF9F1C]" />
                    {activeCondition.badge}
                  </span>
                  <span className="text-xs text-[#73837B] font-medium flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" /> Fisioterapia de precisión
                  </span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#15241E] tracking-tight">{activeCondition.name}</h3>
                  <p className="text-xs text-[#0F4C3A] font-bold mt-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F4C3A]"></span>
                    {activeCondition.protocol}
                  </p>
                </div>

                <div className="space-y-3.5 pt-2 border-t border-[#EAE6DC]">
                  <div className="bg-white/80 p-3 rounded-xl border border-[#EAE6DC]">
                    <h4 className="text-[11px] font-bold uppercase text-[#73837B] tracking-wider mb-1 flex items-center gap-1">
                      <span>Manifestaciones habituales:</span>
                    </h4>
                    <p className="text-xs text-[#2A3832] leading-relaxed">
                      {activeCondition.symptoms}
                    </p>
                  </div>

                  <div className="bg-white/80 p-3 rounded-xl border border-[#EAE6DC]">
                    <h4 className="text-[11px] font-bold uppercase text-[#0F4C3A] tracking-wider mb-1 flex items-center gap-1">
                      <span>Abordaje Biomecánico @dr_fisio3:</span>
                    </h4>
                    <p className="text-xs text-[#2A3832] leading-relaxed">
                      {activeCondition.approach}
                    </p>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={() => {
                      if (onSelectCondition) onSelectCondition(activeCondition.name);
                      const el = document.getElementById('reservar');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full py-3.5 px-4 rounded-xl bg-[#0F4C3A] hover:bg-[#14624B] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-[#0F4C3A]/20 transition-all cursor-pointer transform hover:-translate-y-0.5"
                  >
                    <span>Tratar esta molestia con Dr. Fisio</span>
                    <ArrowRight className="w-4 h-4 text-[#FF9F1C]" />
                  </button>
                  <p className="text-[10px] text-center text-[#73837B] mt-2 font-medium">
                    En consultorio clínico o directamente en tu domicilio.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </motion.div>

        {/* Bottom micro-bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-sm border border-[#E7E2D6] text-xs text-[#4E5C55]"
        >
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#0F4C3A]" />
            <span><strong>Sin diagnósticos genéricos:</strong> Cada cuerpo tiene una compensación muscular única.</span>
          </div>
          <div className="font-semibold text-[#0F4C3A]">
            ¿Tienes estudios previos (resonancia, rayos X)? Los analizamos en tu consulta.
          </div>
        </motion.div>

      </div>
    </section>
  );
}
