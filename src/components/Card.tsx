import { useState, useCallback, useEffect, memo } from 'react';
import { createPortal } from 'react-dom';

interface CardProps {
  title: string;
  image: string;
  description: string;
}

export const Card = memo(({ title, image, description }: CardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => setIsOpen(false), []);
  const stopPropagation = useCallback((e: React.MouseEvent) => e.stopPropagation(), []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <div
        onClick={handleOpen}
        className="relative bg-zinc-900 border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/20 transition-all duration-500 group cursor-pointer shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.8)] hover:-translate-y-2 will-change-transform"
      >
        <div className="aspect-[4/3] overflow-hidden relative rounded-t-[2rem]">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10" />
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />

          <div className="absolute top-4 right-4 z-20">
            <div className="w-9 h-9 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
              </svg>
            </div>
          </div>
        </div>

        <div className="p-6 md:p-7">
          <h3 className="text-base md:text-lg font-black text-white mb-3 tracking-wide leading-tight group-hover:text-emerald-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-zinc-500 text-sm leading-relaxed line-clamp-2 font-medium">
            {description}
          </p>
          <span className="inline-block mt-4 text-emerald-400 text-[10px] font-black uppercase tracking-[0.2em] group-hover:tracking-[0.3em] transition-all duration-300">
            ვრცლად →
          </span>
        </div>
      </div>

      {isOpen && typeof document !== 'undefined' && createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={handleClose}
        >
          <div className="absolute inset-0 bg-black/90 backdrop-blur-sm" />

          <div
            onClick={stopPropagation}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col overflow-y-auto bg-zinc-900 border border-white/10 rounded-[2rem] shadow-[0_30px_60px_rgba(0,0,0,0.8)] animate-fade-in-up"
          >
            <button
              onClick={handleClose}
              aria-label="დახურვა"
              className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-black/50 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white hover:bg-red-500 hover:border-red-500 transition-all duration-300 shadow-xl"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="w-full aspect-video shrink-0 relative rounded-t-[2rem] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent z-10 pointer-events-none" />
              <img
                src={image}
                alt={title}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 md:p-10 relative z-20 shrink-0">
              <h2 className="text-xl md:text-3xl font-black text-white mb-6 tracking-wide leading-tight">
                {title}
              </h2>
              <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-medium whitespace-pre-wrap">
                {description}
              </p>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
});