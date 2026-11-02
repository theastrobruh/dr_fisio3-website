import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Activity, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Sparkles, 
  Star, 
  Zap, 
  Home, 
  MessageCircle, 
  Award,
  ChevronDown,
  Heart, 
  TrendingUp, 
  Compass, 
  Layers, 
  ChevronRight,
  Flame,
  Check
} from 'lucide-react';
import confetti from 'canvas-confetti';
import InteractiveBodyMap from './components/InteractiveBodyMap';
import InstagramHeroReel from './components/InstagramHeroReel';
import BrandsAuthoritySection from './components/BrandsAuthoritySection';

// Custom clean Instagram SVG Icon
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

// Fade in upwards animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

export default function App() {
  // Booking Form State
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    motivo: 'Reset Lumbar (Dolor de espalda & Ciática)',
    modalidad: 'Clínica / Consultorio',
    fecha: '',
    horario: 'Mañana (09:00 - 13:00)',
    notas: ''
  });

  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Pain Quiz state
  const [quizScore, setQuizScore] = useState(null);
  const [quizAnswers, setQuizAnswers] = useState({
    tiempo: 'pocos_dias',
    intensidad: 6,
    tipo: 'Punzante / Lumbar'
  });

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 120,
      spread: 85,
      origin: { y: 0.6 }
    });
    setBookingConfirmed(true);

    const msg = `👋 *¡Hola Dr. Fisio! Quiero agendar una cita prioritaria:*%0A%0A` +
      `👤 *Nombre:* ${formData.nombre}%0A` +
      `📱 *Teléfono:* ${formData.telefono}%0A` +
      `🎯 *Enfoque/Dolencia:* ${formData.motivo}%0A` +
      `📍 *Modalidad:* ${formData.modalidad}%0A` +
      `📅 *Preferencia Fecha:* ${formData.fecha || 'Lo antes posible'} (${formData.horario})%0A` +
      `📝 *Notas del caso:* ${formData.notas || 'Sin notas adicionales'}`;
    
    setTimeout(() => {
      window.open(`https://wa.me/message/LIYNUNMCSJTQJ1?text=${msg}`, '_blank');
    }, 1200);
  };

  const calculateAssessment = () => {
    let result = {
      title: "Protocolo de Intervención Recomendado",
      desc: "Presentas sobrecarga biomecánica subaguda. Un ajuste articular y liberación selectiva evitará que se vuelva crónico.",
      tag: "Tratamiento 2-3 Sesiones"
    };

    if (quizAnswers.intensidad >= 7) {
      result = {
        title: "Intervención de Alivio y Descompresión Prioritaria",
        desc: "Fase aguda inflamatoria detectada. Priorizamos tracción, descompresión neurodinámica y analgesia mecánica para calmar el dolor en 24-48h.",
        tag: "Prioridad Urgente"
      };
    } else if (quizAnswers.tiempo === 'mas_6_meses') {
      result = {
        title: "Protocolo Integral 'Reset Lumbar®' & Readaptación",
        desc: "Patrón compensatorio crónico. El cuerpo ha aprendido a moverse con dolor. Requiere reeducación miofascial y fortalecimiento estabilizador.",
        tag: "Rehabilitación de Fondo"
      };
    }
    setQuizScore(result);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-[#19221E] selection:bg-[#0F4C3A] selection:text-[#FBF9F5] overflow-x-hidden bg-grid-pattern">
      
      {/* Top Notice Bar */}
      <div className="bg-[#15241E] text-[#E5ECE8] text-xs py-2.5 px-4 text-center flex items-center justify-center gap-3 relative z-50">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF9F1C] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF9F1C]"></span>
        </span>
        <span className="font-medium tracking-wide">
          Atención en Consultorio & Servicio a Domicilio con equipamiento completo.
        </span>
        <a href="#reservar" className="text-[#FF9F1C] font-bold hover:underline hidden sm:inline">
          Consultar agenda abierta &rarr;
        </a>
      </div>

      {/* Somana-Style Minimalist Floating Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#FBF9F5]/90 border-b border-[#E7E2D6] px-4 sm:px-8 py-4 transition-all">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Brand Identity */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0F4C3A] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform relative overflow-hidden">
              <Activity className="w-5 h-5 text-[#FF9F1C] stroke-[2.5]" />
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div>
              <div className="font-heading font-extrabold text-lg text-[#15241E] tracking-tight flex items-center gap-2">
                <span>Dr. Fisio</span>
                <span className="text-[10px] font-semibold bg-[#E7EFEA] text-[#0F4C3A] px-2 py-0.5 rounded-full border border-[#0F4C3A]/20">
                  @dr_fisio3
                </span>
              </div>
              <p className="text-[11px] text-[#67776F] font-medium tracking-wide">Fisioterapia Biomecánica & Rendimiento</p>
            </div>
          </a>

          {/* Clean Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-xs font-bold text-[#4E5C55] uppercase tracking-wider">
            <a href="#mapa-dolor" className="hover:text-[#0F4C3A] transition-colors relative py-1 group">
              <span>Mapa de Dolor</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9F1C] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#ozonofit" className="hover:text-[#0F4C3A] transition-colors relative py-1 group">
              <span>Ozonofit (CEO)</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9F1C] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#metodo" className="hover:text-[#0F4C3A] transition-colors relative py-1 group">
              <span>Método Clínico</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9F1C] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#servicios" className="hover:text-[#0F4C3A] transition-colors relative py-1 group">
              <span>Servicios</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9F1C] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#filosofia" className="hover:text-[#0F4C3A] transition-colors relative py-1 group">
              <span>Sobre Dr. Fisio</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF9F1C] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Primary CTA */}
          <div className="flex items-center gap-3">
            <a 
              href="https://www.instagram.com/dr_fisio3/" 
              target="_blank" 
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-[#4E5C55] hover:text-[#0F4C3A] px-3 py-2 rounded-xl transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-[#D93D64]" />
              <span>Instagram</span>
            </a>

            <a 
              href="#reservar"
              className="px-5 py-2.5 rounded-xl bg-[#0F4C3A] hover:bg-[#14624B] text-white font-bold text-xs uppercase tracking-wider shadow-md shadow-[#0F4C3A]/20 transition-all transform hover:-translate-y-0.5 cursor-pointer relative overflow-hidden group"
            >
              <span className="relative z-10">Agendar Sesión</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section: Editorial & Warm Scandinavian Aesthetic */}
      <section className="relative pt-12 pb-20 md:py-24 px-4 sm:px-8 max-w-7xl mx-auto overflow-hidden">
        
        {/* Ambient background glow loops */}
        <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#0F4C3A]/6 rounded-full blur-3xl pointer-events-none animate-ambient-glow" />
        <div className="absolute top-40 right-10 w-80 h-80 bg-[#FF9F1C]/10 rounded-full blur-3xl pointer-events-none animate-ambient-glow" style={{ animationDelay: '4s' }} />

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
          
          {/* Left Column: Editorial Headline & Copy */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="lg:col-span-7 space-y-6"
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E8EFEA] border border-[#CCDCD2] text-[#0F4C3A] text-xs font-bold tracking-wider shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#0F4C3A] animate-pulse"></span>
              <span>Rehabilitación Avanzada & Prevención Clínica</span>
            </motion.div>

            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-black text-[#15241E] leading-[1.08] tracking-tight">
              Recupera el movimiento <br className="hidden sm:block" />
              <span className="font-serif-italic font-normal text-[#0F4C3A]">sin dolor ni parches temporales.</span>
            </motion.h1>

            <motion.p variants={fadeInUp} className="text-base sm:text-lg text-[#4E5C55] font-normal leading-relaxed max-w-xl">
              Dejamos atrás los reposos pasivos y las recetas genéricas. Aplicamos ciencia del movimiento, biomecánica articular y terapia manual de precisión para tratar la causa raíz de tu dolor.
            </motion.p>

            {/* Quick Metrics Bar */}
            <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 pt-4 pb-2 border-y border-[#E7E2D6] max-w-lg">
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#0F4C3A]">98%</div>
                <div className="text-xs text-[#67776F] font-medium">Alivio en sesión #1</div>
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#15241E]">+500</div>
                <div className="text-xs text-[#67776F] font-medium">Pacientes rehabilitados</div>
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#FF9F1C]">1 a 1</div>
                <div className="text-xs text-[#67776F] font-medium">Atención exclusiva</div>
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#reservar" 
                className="inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#0F4C3A] hover:bg-[#155A46] text-white font-bold text-sm shadow-xl shadow-[#0F4C3A]/20 transition-all transform hover:-translate-y-0.5 group"
              >
                <span>Reservar Evaluación Clínica</span>
                <ArrowRight className="w-4 h-4 text-[#FF9F1C] group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#mapa-dolor" 
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-[#F2ECE1] border border-[#D5CEBF] text-[#15241E] font-bold text-sm transition-all shadow-xs"
              >
                <Activity className="w-4 h-4 text-[#0F4C3A]" />
                <span>Explorar Mapa de Dolores</span>
              </a>
            </motion.div>

            {/* Trust badge */}
            <motion.div variants={fadeInUp} className="flex items-center gap-3 text-xs text-[#67776F] pt-2">
              <ShieldCheck className="w-4 h-4 text-[#0F4C3A] flex-shrink-0" />
              <span>Especialista avalado en Fisioterapia Deportiva y Readaptación Músculo-Esquelética.</span>
            </motion.div>
          </motion.div>

          {/* Right Column: Somana-Style Editorial Composition with Subtle Float FX */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Interactive Reel Component */}
            <InstagramHeroReel />
          </motion.div>

        </div>
      </section>

      {/* FEATURE INTERACTIVA: MAPA DE DOLOR (Inspirado en Back In The Game Physical Therapy) */}
      <InteractiveBodyMap onSelectCondition={(conditionName) => {
        setFormData(prev => ({ ...prev, motivo: `${conditionName} (Desde Mapa Corporal)` }));
      }} />

      {/* SECCIÓN DE AUTORIDAD EMPRESARIAL: CEO OZONOFIT (Perú & Venezuela) */}
      <BrandsAuthoritySection />

      {/* Somana-Inspired Philosophy: The 3 Pillars with Scroll Stagger */}
      <section id="metodo" className="py-24 md:py-32 px-4 sm:px-8 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8EFEA] text-[#0F4C3A] text-xs font-bold uppercase tracking-wider">
            <span>Metodología de Autor</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#15241E]">
            Un enfoque biomecánico, <br />
            <span className="font-serif-italic font-normal text-[#0F4C3A]">sin diagnósticos apresurados.</span>
          </h2>
          <p className="text-[#67776F] text-base leading-relaxed">
            La mayoría de clínicas tradicionales conectan electrodos y te dejan 20 minutos solo en una camilla. En <strong>Dr. Fisio</strong> el tiempo es 100% asistido, manual y activo.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-3xl p-8 border border-[#E7E2D6] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative flex flex-col justify-between group"
          >
            <div>
              <span className="font-heading text-4xl font-extrabold text-[#D5CEBF] block mb-4 group-hover:text-[#0F4C3A] transition-colors">01</span>
              <h3 className="text-xl font-bold text-[#15241E] mb-2">Evaluación Articular & Cadenas</h3>
              <p className="text-xs sm:text-sm text-[#4E5C55] leading-relaxed">
                El dolor casi nunca se origina donde duele. Si te duele la espalda baja, analizamos tus tobillos, la movilidad de cadera y la estabilidad torácica.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F2ECE1] text-xs font-bold text-[#0F4C3A] flex items-center gap-1">
              <span>Diagnóstico de causa raíz</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#15241E] text-white rounded-3xl p-8 border border-[#15241E] shadow-xl transition-all hover:-translate-y-1 relative flex flex-col justify-between group"
          >
            <div>
              <span className="font-heading text-4xl font-extrabold text-[#0F4C3A] block mb-4 group-hover:text-[#FF9F1C] transition-colors">02</span>
              <h3 className="text-xl font-bold text-white mb-2">Terapia Manual & Descompresión</h3>
              <p className="text-xs sm:text-sm text-[#CCDCD2] leading-relaxed">
                Técnicas miofasciales de punto gatillo, tracciones lumbares y neurodinamia para aliviar la presión de los discos y nervios de forma inmediata.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#254D43] text-xs font-bold text-[#FF9F1C] flex items-center gap-1">
              <span>Alivio mecánico tangible</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-3xl p-8 border border-[#E7E2D6] shadow-sm hover:shadow-md transition-all hover:-translate-y-1 relative flex flex-col justify-between group"
          >
            <div>
              <span className="font-heading text-4xl font-extrabold text-[#D5CEBF] block mb-4 group-hover:text-[#0F4C3A] transition-colors">03</span>
              <h3 className="text-xl font-bold text-[#15241E] mb-2">Carga Progresiva & Sin Recaídas</h3>
              <p className="text-xs sm:text-sm text-[#4E5C55] leading-relaxed">
                Te blindamos con ejercicios específicos de fuerza y control motor para que puedas volver a entrenar, correr o trabajar sin miedo a volverte a trabar.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-[#F2ECE1] text-xs font-bold text-[#0F4C3A] flex items-center gap-1">
              <span>Autonomía a largo plazo</span>
              <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.div>

        </div>
      </section>

      {/* Services Grid (Inspirado en 101 Physio) */}
      <section id="servicios" className="py-24 md:py-32 bg-[#F5F2EB] border-t border-[#E7E2D6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
          >
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F4C3A]/10 text-[#0F4C3A] text-xs font-bold uppercase tracking-wider mb-2">
                <span>Modalidades de Atención</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#15241E]">
                Tratamientos Diseñados <br />
                <span className="font-serif-italic font-normal text-[#0F4C3A]">a tu medida y estilo de vida.</span>
              </h2>
            </div>
            <p className="text-sm text-[#4E5C55] max-w-md">
              Tanto si requieres atención clínica intensiva como si no puedes desplazarte por dolor, adaptamos la experiencia para ti.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: Reset Lumbar */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-3xl p-8 border border-[#E7E2D6] flex flex-col justify-between hover:border-[#0F4C3A] transition-all hover:-translate-y-1 shadow-sm group"
            >
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0F4C3A]/10 text-[#0F4C3A]">
                  Tratamiento Insignia
                </span>
                <h3 className="text-2xl font-bold text-[#15241E] mt-4 mb-2">Protocolo Reset Lumbar®</h3>
                <p className="text-xs text-[#67776F] mb-6">
                  Especialmente indicado para hernias discales, ciática, lumbalgia mecánica y rigidez después de largas jornadas de trabajo.
                </p>

                <ul className="space-y-3 text-xs text-[#2A3832]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] flex-shrink-0" />
                    <span>Descompresión de columna lumbar</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] flex-shrink-0" />
                    <span>Liberación del nervio ciático y piramidal</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] flex-shrink-0" />
                    <span>Prescripción de movilidad personalizada</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F2ECE1]">
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, motivo: 'Protocolo Reset Lumbar' }));
                    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#F5F2EB] hover:bg-[#0F4C3A] hover:text-white text-[#15241E] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Agendar Reset Lumbar
                </button>
              </div>
            </motion.div>

            {/* Card 2: A Domicilio */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-gradient-to-b from-[#15241E] to-[#0A1713] text-white rounded-3xl p-8 border border-[#15241E] shadow-2xl flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all"
            >
              <div className="absolute top-4 right-4 bg-[#FF9F1C] text-[#15241E] text-[10px] font-black uppercase px-2.5 py-0.5 rounded-full shadow-md">
                Servicio Premium
              </div>

              <div>
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/10 text-[#A2B1A8]">
                  En tu Casa u Oficina
                </span>
                <h3 className="text-2xl font-bold text-white mt-4 mb-2">Fisioterapia a Domicilio</h3>
                <p className="text-xs text-[#CCDCD2] mb-6">
                  Nos desplazamos con camilla hidráulica, electroterapia y todo el equipo necesario para que no sufras con el tráfico ni el dolor.
                </p>

                <ul className="space-y-3 text-xs text-[#E5ECE8]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF9F1C] flex-shrink-0" />
                    <span>Ahorro total de traslados</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF9F1C] flex-shrink-0" />
                    <span>Atención 1 a 1 de 60 minutos sin prisas</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FF9F1C] flex-shrink-0" />
                    <span>Evaluación del entorno ergonómico de tu hogar</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#254D43]">
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, modalidad: 'Atención a Domicilio', motivo: 'Sesión a Domicilio' }));
                    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#FF9F1C] hover:bg-[#FFAE3D] text-[#15241E] font-black text-xs uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-[#FF9F1C]/25"
                >
                  Solicitar Fisio a Domicilio
                </button>
              </div>
            </motion.div>

            {/* Card 3: Deportiva */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-[#E7E2D6] flex flex-col justify-between hover:border-[#0F4C3A] transition-all hover:-translate-y-1 shadow-sm group"
            >
              <div>
                <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0F4C3A]/10 text-[#0F4C3A]">
                  Rendimiento & Fitness
                </span>
                <h3 className="text-2xl font-bold text-[#15241E] mt-4 mb-2">Fisio Deportiva & Descarga</h3>
                <p className="text-xs text-[#67776F] mb-6">
                  Para practicantes de crossfit, corredores, deportistas de combate o gym que necesitan descargar y volver a su 100%.
                </p>

                <ul className="space-y-3 text-xs text-[#2A3832]">
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] flex-shrink-0" />
                    <span>Descarga miofascial profunda con ventosas y percusión</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] flex-shrink-0" />
                    <span>Optimización del ROM articular (rango de movimiento)</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#0F4C3A] flex-shrink-0" />
                    <span>Retorno seguro a levantamientos pesados</span>
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-[#F2ECE1]">
                <button 
                  onClick={() => {
                    setFormData(prev => ({ ...prev, motivo: 'Fisioterapia Deportiva & Descarga' }));
                    document.getElementById('reservar')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#F5F2EB] hover:bg-[#0F4C3A] hover:text-white text-[#15241E] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
                >
                  Agendar Descarga Deportiva
                </button>
              </div>
            </motion.div>

          </div>

        </div>
      </section>

      {/* Somana "About the Founder" / Credibility Section */}
      <section id="filosofia" className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8 }}
          className="bg-[#15241E] rounded-3xl overflow-hidden text-white border border-[#254D43] shadow-2xl relative"
        >
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5 relative h-full min-h-[360px] lg:min-h-[500px]">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" 
                alt="Fisioterapeuta profesional examinando paciente" 
                className="absolute inset-0 w-full h-full object-cover object-top opacity-85 hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#15241E] via-transparent to-transparent lg:hidden"></div>
            </div>

            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F4C3A] text-[#E5ECE8] text-xs font-bold uppercase tracking-wider">
                <span>Detrás de @dr_fisio3</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
                "El cuerpo humano está diseñado para moverse, no para vivir medicado."
              </h2>

              <p className="text-sm sm:text-base text-[#CCDCD2] leading-relaxed">
                A través de mi contenido en Instagram, miles de personas han comprendido que el dolor de espalda no es una condena. Mi propósito con este espacio clínico es brindarte la atención personalizada, honesta y biomecánica que mereces.
              </p>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-[#0A1713] border border-[#254D43]">
                  <div className="text-lg font-bold text-[#FF9F1C]">Enfoque Activo</div>
                  <p className="text-xs text-[#A2B1A8] mt-1">Tratamos los tejidos con las manos, pero los blindamos con el movimiento.</p>
                </div>
                <div className="p-4 rounded-2xl bg-[#0A1713] border border-[#254D43]">
                  <div className="text-lg font-bold text-[#FF9F1C]">Transparencia Total</div>
                  <p className="text-xs text-[#A2B1A8] mt-1">Te explicamos exactamente qué músculo o articulación está bloqueado.</p>
                </div>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <a 
                  href="https://www.instagram.com/dr_fisio3/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-[#0F4C3A] hover:bg-[#155A46] px-5 py-3 rounded-xl transition-colors cursor-pointer"
                >
                  <InstagramIcon className="w-4 h-4 text-[#FF9F1C]" />
                  <span>Conectar en Instagram @dr_fisio3</span>
                </a>
              </div>
            </div>

          </div>
        </motion.div>
      </section>

      {/* Pain Quiz / Lead Pre-qualification */}
      <section className="py-20 md:py-24 bg-[#F5F2EB] border-y border-[#E7E2D6]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-[#E7E2D6] shadow-lg"
          >
            
            <div className="text-center space-y-2 mb-8">
              <span className="text-xs font-black uppercase tracking-wider text-[#0F4C3A]">
                Triaje Pre-Consulta
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#15241E]">
                ¿Quieres saber qué protocolo se adapta a tu caso?
              </h2>
              <p className="text-xs sm:text-sm text-[#67776F]">
                Indica tus síntomas para un estimado previo antes de pasar a consulta.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-[#15241E] uppercase tracking-wider mb-2">
                  1. ¿Cuánto tiempo llevas sufriendo la molestia?
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: 'pocos_dias', label: 'Menos de 2 semanas' },
                    { id: 'semanas', label: '1 a 3 meses' },
                    { id: 'mas_6_meses', label: 'Más de 6 meses' }
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setQuizAnswers({ ...quizAnswers, tiempo: item.id })}
                      className={`p-3 text-xs rounded-xl border text-center transition-all cursor-pointer ${
                        quizAnswers.tiempo === item.id 
                          ? 'bg-[#0F4C3A] text-white border-[#0F4C3A] font-bold shadow-md' 
                          : 'bg-[#FBF9F5] text-[#19221E] border-[#E7E2D6] hover:border-[#0F4C3A]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-[#15241E] uppercase tracking-wider">
                    2. Nivel de dolor que experimentas (1 al 10):
                  </label>
                  <span className="text-base font-extrabold text-[#0F4C3A]">{quizAnswers.intensidad} / 10</span>
                </div>
                <input 
                  type="range" 
                  min="1" 
                  max="10" 
                  value={quizAnswers.intensidad}
                  onChange={(e) => setQuizAnswers({ ...quizAnswers, intensidad: parseInt(e.target.value) })}
                  className="w-full h-2 bg-[#E7E2D6] rounded-lg appearance-none cursor-pointer accent-[#0F4C3A]"
                />
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={calculateAssessment}
                  className="px-6 py-3.5 rounded-xl bg-[#0F4C3A] hover:bg-[#14624B] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-md"
                >
                  Evaluar mi caso ahora
                </button>
              </div>

              {quizScore && (
                <div className="p-5 rounded-2xl bg-[#E8EFEA] border border-[#CCDCD2] space-y-2 mt-4 animate-fadeIn">
                  <div className="flex items-center gap-2 text-[#0F4C3A] font-extrabold text-sm">
                    <Sparkles className="w-4 h-4 text-[#FF9F1C]" />
                    <span>{quizScore.title}</span>
                  </div>
                  <p className="text-xs text-[#2A3832] leading-relaxed">
                    {quizScore.desc}
                  </p>
                  <div className="pt-2">
                    <a 
                      href="#reservar" 
                      className="text-xs font-bold text-[#0F4C3A] hover:underline flex items-center gap-1"
                    >
                      <span>Aplicar este diagnóstico en mi cita</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              )}
            </div>

          </motion.div>
        </div>
      </section>

      {/* Social Proof (Pacientes Reales) */}
      <section id="testimonios" className="py-24 md:py-32 max-w-7xl mx-auto px-4 sm:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#0F4C3A]">Testimonios & Casos Clínicos</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#15241E] mt-1">Lo que opinan nuestros pacientes</h2>
          </div>
          <div className="flex items-center gap-1 text-sm font-bold text-[#15241E]">
            <span className="text-[#FF9F1C]">★ ★ ★ ★ ★</span>
            <span className="ml-2 text-xs text-[#67776F]">4.9 de 5 en Google e Instagram</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white p-6 rounded-2xl border border-[#E7E2D6] space-y-4 hover:-translate-y-1 transition-transform shadow-xs"
          >
            <div className="text-amber-500 text-xs">★★★★★</div>
            <p className="text-xs text-[#4E5C55] leading-relaxed italic">
              "Llegué sin poder enderezarme por una lumbalgia aguda. El protocolo Reset Lumbar me quitó el 80% del dolor en la primera sesión y los ejercicios para casa evitaron que volviera."
            </p>
            <div className="pt-2 border-t border-[#F2ECE1] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0F4C3A]/10 text-[#0F4C3A] font-bold text-xs flex items-center justify-center">
                AM
              </div>
              <div>
                <div className="text-xs font-bold text-[#15241E]">Alejandro Morales</div>
                <div className="text-[10px] text-[#67776F]">Atención en Clínica</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-6 rounded-2xl border border-[#E7E2D6] space-y-4 hover:-translate-y-1 transition-transform shadow-xs"
          >
            <div className="text-amber-500 text-xs">★★★★★</div>
            <p className="text-xs text-[#4E5C55] leading-relaxed italic">
              "La comodidad de que venga a mi casa con toda la camilla y equipos fue increíble. Me ahorré tener que manejar con un dolor cervical que no me dejaba girar el cuello."
            </p>
            <div className="pt-2 border-t border-[#F2ECE1] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FF9F1C]/20 text-[#B87000] font-bold text-xs flex items-center justify-center">
                CP
              </div>
              <div>
                <div className="text-xs font-bold text-[#15241E]">Camila Paredes</div>
                <div className="text-[10px] text-[#67776F]">Sesión a Domicilio</div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white p-6 rounded-2xl border border-[#E7E2D6] space-y-4 hover:-translate-y-1 transition-transform shadow-xs"
          >
            <div className="text-amber-500 text-xs">★★★★★</div>
            <p className="text-xs text-[#4E5C55] leading-relaxed italic">
              "Entreno levantamiento olímpico y me ayudó con una molestia en el tendón rotuliano que me frenaba desde hacía 2 meses. Explicación 100% científica y resultados rápidos."
            </p>
            <div className="pt-2 border-t border-[#F2ECE1] flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#0F4C3A]/10 text-[#0F4C3A] font-bold text-xs flex items-center justify-center">
                GS
              </div>
              <div>
                <div className="text-xs font-bold text-[#15241E]">Gabriel Salcedo</div>
                <div className="text-[10px] text-[#67776F]">Crossfit & Fisioterapia Deportiva</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Booking Form (WhatsApp Integration) */}
      <section id="reservar" className="py-24 md:py-32 bg-[#15241E] text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 relative z-10">
          
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center space-y-3 mb-12"
          >
            <span className="text-xs font-black uppercase text-[#FF9F1C] tracking-wider">
              Agenda Prioritaria
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white">
              Reserva tu cita con Dr. Fisio
            </h2>
            <p className="text-xs sm:text-sm text-[#A2B1A8] max-w-lg mx-auto">
              Completa los datos de tu consulta y te transferiremos a WhatsApp con tu ficha pre-armada para coordinar inmediatamente.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0A1713] border border-[#254D43] p-6 sm:p-10 rounded-3xl shadow-2xl relative"
          >
            {bookingConfirmed ? (
              <div className="text-center py-10 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#0F4C3A] text-[#FF9F1C] flex items-center justify-center mx-auto mb-2">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="text-2xl font-bold text-white">¡Ficha de Cita Generada!</h3>
                <p className="text-xs sm:text-sm text-[#CCDCD2] max-w-md mx-auto">
                  Si tu navegador no abrió WhatsApp automáticamente, haz clic en el botón de abajo para enviar los detalles directamente:
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      const msg = `👋 *¡Hola Dr. Fisio! Quiero agendar una cita:*%0A%0A` +
                        `👤 *Nombre:* ${formData.nombre}%0A` +
                        `📱 *Teléfono:* ${formData.telefono}%0A` +
                        `🎯 *Servicio:* ${formData.motivo}%0A` +
                        `📍 *Modalidad:* ${formData.modalidad}%0A` +
                        `📅 *Preferencia:* ${formData.fecha || 'Pronto'} (${formData.horario})%0A` +
                        `📝 *Notas:* ${formData.notas || 'Sin notas'}`;
                      window.open(`https://wa.me/message/LIYNUNMCSJTQJ1?text=${msg}`, '_blank');
                    }}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-[#0F4C3A] hover:bg-[#155A46] text-white font-bold text-xs uppercase tracking-wider shadow-lg cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-[#FF9F1C]" />
                    <span>Abrir Chat con Dr. Fisio</span>
                  </button>
                </div>
                <button
                  onClick={() => setBookingConfirmed(false)}
                  className="block mx-auto text-xs text-[#73837B] hover:text-white pt-3 cursor-pointer"
                >
                  ← Modificar datos
                </button>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#CCDCD2] uppercase tracking-wider mb-2">
                      Nombre Completo *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Ej. Rodrigo Silva"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15241E] border border-[#254D43] focus:border-[#FF9F1C] focus:outline-none text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#CCDCD2] uppercase tracking-wider mb-2">
                      WhatsApp / Teléfono *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="Ej. +34 600 000 000"
                      value={formData.telefono}
                      onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15241E] border border-[#254D43] focus:border-[#FF9F1C] focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#CCDCD2] uppercase tracking-wider mb-2">
                      Modalidad
                    </label>
                    <select 
                      value={formData.modalidad}
                      onChange={(e) => setFormData({ ...formData, modalidad: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15241E] border border-[#254D43] focus:border-[#FF9F1C] focus:outline-none text-white text-sm cursor-pointer"
                    >
                      <option value="Clínica / Consultorio">🏥 En Clínica / Consultorio</option>
                      <option value="Atención a Domicilio">🚗 A Domicilio (En tu hogar u oficina)</option>
                      <option value="Videoconsulta Biomecánica">💻 Videoconsulta / Asesoría Online</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#CCDCD2] uppercase tracking-wider mb-2">
                      Motivo / Zona de Molestia
                    </label>
                    <input 
                      type="text"
                      value={formData.motivo}
                      onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15241E] border border-[#254D43] focus:border-[#FF9F1C] focus:outline-none text-white text-sm"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#CCDCD2] uppercase tracking-wider mb-2">
                      Fecha sugerida
                    </label>
                    <input 
                      type="date" 
                      value={formData.fecha}
                      onChange={(e) => setFormData({ ...formData, fecha: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15241E] border border-[#254D43] focus:border-[#FF9F1C] focus:outline-none text-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#CCDCD2] uppercase tracking-wider mb-2">
                      Franja horaria preferida
                    </label>
                    <select 
                      value={formData.horario}
                      onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#15241E] border border-[#254D43] focus:border-[#FF9F1C] focus:outline-none text-white text-sm cursor-pointer"
                    >
                      <option value="Mañana (09:00 - 13:00)">🌅 Mañana (09:00 - 13:00)</option>
                      <option value="Tarde (14:00 - 18:00)">☀️ Tarde (14:00 - 18:00)</option>
                      <option value="Final de tarde (18:00 - 20:30)">🌙 Final de tarde (18:00 - 20:30)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#CCDCD2] uppercase tracking-wider mb-2">
                    Detalles adicionales del dolor o diagnósticos previos (Opcional)
                  </label>
                  <textarea 
                    rows="3"
                    placeholder="Ej. Siento pinzamiento al inclinarme hacia adelante..."
                    value={formData.notas}
                    onChange={(e) => setFormData({ ...formData, notas: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#15241E] border border-[#254D43] focus:border-[#FF9F1C] focus:outline-none text-white text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-[#0F4C3A] hover:bg-[#155A46] text-white font-bold text-sm uppercase tracking-wider shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 text-[#FF9F1C]" />
                  <span>Enviar y Confirmar Turno por WhatsApp</span>
                </button>

                <p className="text-center text-[11px] text-[#73837B] flex items-center justify-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F4C3A]" />
                  <span>Respuesta rápida garantizada. Sin listas de espera eternas.</span>
                </p>

              </form>
            )}
          </motion.div>

        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#0A1713] text-[#73837B] text-xs border-t border-[#15241E] px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0F4C3A] flex items-center justify-center text-white">
              <Activity className="w-4 h-4 text-[#FF9F1C]" />
            </div>
            <div>
              <span className="font-heading font-bold text-white text-sm block">Dr. Fisio</span>
              <span>Fisioterapia y Rehabilitación Biomecánica · @dr_fisio3</span>
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px]">
            <a href="https://www.instagram.com/dr_fisio3/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Instagram @dr_fisio3
            </a>
            <a href="#mapa-dolor" className="hover:text-white transition-colors">Mapa Corporal</a>
            <a href="#reservar" className="hover:text-white transition-colors">Reservas WhatsApp</a>
          </div>

          <p className="text-[11px] text-[#55635C]">
            © {new Date().getFullYear()} Dr. Fisio. Todos los derechos reservados.
          </p>
        </div>
      </footer>

    </div>
  );
}
