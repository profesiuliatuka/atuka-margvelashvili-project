import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  slogan: string;
}

export const Hero = ({ title, slogan }: HeroProps) => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/90 via-zinc-950/60 to-zinc-950 z-10" />
        <div className="absolute inset-0 bg-emerald-500/10 mix-blend-overlay z-10" />
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000" 
          alt="Stadium" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-5xl">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.15)]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          ოფიციალური ვებსაიტი
        </div>
        
        <h1
          className="font-sans text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter italic mb-8 pr-2"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0.15))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            WebkitTextStroke: '1px rgba(255,255,255,0.25)',
            filter: 'drop-shadow(0 4px 40px rgba(255,255,255,0.2)) drop-shadow(0 0 80px rgba(16,185,129,0.1))',
          }}
        >
          {title}
        </h1>
        
        <p className="text-sm md:text-lg text-zinc-400 mb-12 font-bold tracking-[0.3em] uppercase">
          {slogan}
        </p>
        
        {/* Animated CTA Button */}
        <div className="flex justify-center">
          <Link
            to="/matches"
            className="relative inline-flex items-center gap-3 px-10 py-4 md:px-14 md:py-5 rounded-full bg-emerald-500 text-white font-black uppercase tracking-[0.2em] text-xs md:text-sm hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(16,185,129,0.5)] group"
          >
            {/* Pulse rings */}
            <span className="absolute inset-0 rounded-full border-2 border-emerald-400 animate-ping opacity-20" />
            <span className="absolute inset-0 rounded-full border border-emerald-400/30 animate-pulse" />
            
            <span className="relative z-10">მატჩები</span>
            <span className="relative z-10 text-base group-hover:translate-x-1 transition-transform duration-300">→</span>
          </Link>
        </div>
      </div>
      
      {/* Decorative Blur Orbs */}
      <div className="absolute -left-1/4 top-1/4 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none z-10" />
      <div className="absolute -right-1/4 bottom-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none z-10" />
    </section>
  );
};