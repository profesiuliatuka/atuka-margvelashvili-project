import { Button } from './Button';

interface HeroProps {
  title: string;
  slogan: string;
  ctaText: string;
  onCtaClick?: () => void;
}

export const Hero = ({ title, slogan, ctaText, onCtaClick }: HeroProps) => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-zinc-900 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=2000" 
          alt="Stadium" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-20 text-center px-4 max-w-4xl">
        <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6 italic">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-zinc-200 mb-10 font-light tracking-wide uppercase">
          {slogan}
        </p>
        <div className="flex justify-center">
          <Button variant="Primary" className="text-lg px-10 py-4" onClick={onCtaClick}>
            {ctaText}
          </Button>
        </div>
      </div>
    </section>
  );
};