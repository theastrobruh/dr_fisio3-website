import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Heart, 
  MessageCircle, 
  Share2, 
  ExternalLink,
  Sparkles,
  CheckCircle2,
  Bookmark,
  Layers
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

// Reel scenes that transition smoothly like a reel carousel/story
const REEL_SLIDES = [
  {
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1080&q=80",
    caption: "Reset Lumbar: ¿Por qué guardar reposo en cama empeora tu dolor de espalda? ⚡",
    desc: "Explicación biomecánica de la descompresión activa y por qué el movimiento guiado es la clave real.",
    tag: "Protocolo Reset Lumbar",
    duration: 5000
  },
  {
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?auto=format&fit=crop&w=1080&q=80",
    caption: "Terapia Manual & Descompresión Miofascial en vivo 🤲",
    desc: "Liberación de puntos gatillo lumbares y test de movilidad articular asistida.",
    tag: "Terapia Manual Clínica",
    duration: 5000
  },
  {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1080&q=80",
    caption: "Basketball Rehab: Readaptación de tobillo y rodilla en cancha 🏀",
    desc: "Prevención de esguinces, reactivación propioceptiva y saltos seguros sin dolor.",
    tag: "Basketball Specialist",
    duration: 5000
  }
];

export default function InstagramHeroReel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(2418);
  const [progress, setProgress] = useState(0);

  // Auto-progress reel slides when playing
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % REEL_SLIDES.length);
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  const toggleLike = (e) => {
    e.stopPropagation();
    if (!liked) {
      setLikesCount(prev => prev + 1);
      setLiked(true);
    } else {
      setLikesCount(prev => prev - 1);
      setLiked(false);
    }
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setProgress(0);
    setCurrentSlide((curr) => (curr + 1) % REEL_SLIDES.length);
  };

  const activeSlide = REEL_SLIDES[currentSlide];

  return (
    <div className="relative mx-auto max-w-sm sm:max-w-md w-full">
      
      {/* Outer Glow / Ambient Lighting */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#0F4C3A]/30 via-[#FF9F1C]/25 to-[#0F4C3A]/20 rounded-[36px] blur-xl opacity-75 animate-pulse pointer-events-none" />

      {/* Reel Smartphone Shell */}
      <div 
        onClick={togglePlay}
        className="relative rounded-[32px] overflow-hidden bg-[#0A1713] border-4 border-white shadow-2xl aspect-[9/16] max-h-[580px] flex flex-col justify-between group select-none cursor-pointer"
      >
        
        {/* Animated Background Reel Slides with Pan Zoom FX */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0.2, scale: 1.08 }}
            animate={{ opacity: 1, scale: isPlaying ? 1.02 : 1 }}
            exit={{ opacity: 0.1, scale: 0.98 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <img 
              src={activeSlide.image} 
              alt={activeSlide.caption}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Cinematic Gradient Overlays for readable text and contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-black/70 pointer-events-none" />

        {/* Top Story/Reel Progress Bars */}
        <div className="relative z-20 pt-3 px-4 flex gap-1.5">
          {REEL_SLIDES.map((_, idx) => (
            <div key={idx} className="flex-1 h-1 rounded-full bg-white/30 overflow-hidden">
              <div 
                className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
                style={{
                  width: idx === currentSlide ? `${progress}%` : idx < currentSlide ? '100%' : '0%'
                }}
              />
            </div>
          ))}
        </div>

        {/* Top Header: Instagram Status & Creator Handle */}
        <div className="relative z-20 px-4 py-2 flex items-center justify-between">
          <a 
            href="https://www.instagram.com/dr_fisio3/" 
            target="_blank" 
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2.5 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 hover:bg-black/70 transition-colors"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-500 via-rose-500 to-purple-600 p-[1.5px] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-black flex items-center justify-center text-[10px] font-black text-white">
                DF
              </div>
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-white flex items-center gap-1">
                @dr_fisio3
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
              </span>
            </div>
          </a>

          {/* Sound & External IG Action */}
          <div className="flex items-center gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsMuted(!isMuted);
              }}
              className="w-8 h-8 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center border border-white/20 hover:scale-105 transition-transform cursor-pointer"
              aria-label="Silenciar / Activar sonido"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
            <a 
              href="https://www.instagram.com/dr_fisio3/" 
              target="_blank" 
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF9F1C] to-[#E65100] text-black font-black flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
              title="Abrir Reel en Instagram"
            >
              <InstagramIcon className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Center: Play / Pause indicator icon */}
        <div className="relative z-20 flex-1 flex items-center justify-center pointer-events-none">
          {!isPlaying && (
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-white border border-white/30 shadow-2xl"
            >
              <Play className="w-8 h-8 ml-1 fill-white" />
            </motion.div>
          )}
        </div>

        {/* Right Sidebar: Reel Engagement Actions */}
        <div className="absolute right-3 bottom-24 z-20 flex flex-col items-center gap-4 text-white">
          <button 
            onClick={toggleLike}
            className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
          >
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
              liked ? 'bg-rose-600 text-white scale-110' : 'bg-black/50 backdrop-blur-md text-white hover:scale-110'
            }`}>
              <Heart className={`w-5 h-5 ${liked ? 'fill-white stroke-white' : ''}`} />
            </div>
            <span className="text-[10px] font-bold drop-shadow-md">
              {likesCount.toLocaleString()}
            </span>
          </button>

          <a 
            href="https://www.instagram.com/dr_fisio3/" 
            target="_blank" 
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex flex-col items-center gap-1 group cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold drop-shadow-md">184</span>
          </a>

          <button 
            onClick={nextSlide}
            title="Siguiente reel"
            className="flex flex-col items-center gap-1 group cursor-pointer focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center hover:scale-110 transition-transform">
              <Layers className="w-4 h-4 text-[#FF9F1C]" />
            </div>
            <span className="text-[10px] font-bold drop-shadow-md">Next</span>
          </button>
        </div>

        {/* Bottom Description & Audio Info */}
        <div className="relative z-20 p-5 space-y-2.5 text-left">
          
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#FF9F1C] text-[#15241E] text-[10px] font-black uppercase tracking-wider shadow-md">
            <Sparkles className="w-3 h-3 fill-current" />
            <span>{activeSlide.tag}</span>
          </div>

          <h3 className="text-white font-bold text-sm sm:text-base leading-snug drop-shadow-md">
            {activeSlide.caption}
          </h3>

          <p className="text-[#CCDCD2] text-xs line-clamp-2 leading-relaxed">
            {activeSlide.desc}
          </p>

          {/* Reel audio track pill */}
          <div className="pt-1 flex items-center justify-between text-[11px] text-[#A2B1A8]">
            <div className="flex items-center gap-1.5">
              <div className="w-3 h-3 rounded-full border border-white/50 flex items-center justify-center animate-spin">
                <span className="w-1 h-1 bg-white rounded-full"></span>
              </div>
              <span className="truncate max-w-[170px]">Audio original · Dr. Fisio Biomecánica</span>
            </div>

            <a 
              href="https://www.instagram.com/dr_fisio3/" 
              target="_blank" 
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-[#FF9F1C] font-bold flex items-center gap-0.5 hover:underline"
            >
              <span>Ver en IG</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>

      {/* Floating Badge: Alter ego / basketball clinic */}
      <div className="absolute -bottom-4 -left-3 bg-[#15241E] text-white p-3 rounded-2xl shadow-xl flex items-center gap-2.5 border border-[#254D43] z-30">
        <div className="w-8 h-8 rounded-lg bg-[#FF9F1C] text-[#15241E] flex items-center justify-center font-bold text-xs">
          🏀
        </div>
        <div>
          <div className="text-xs font-bold leading-tight">Basketball Rehab</div>
          <div className="text-[10px] text-[#A2B1A8]">Caracas VE · Lima PE</div>
        </div>
      </div>

    </div>
  );
}
