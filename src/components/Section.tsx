import { Link } from 'react-router-dom';
import type { ReactNode } from 'react';
import { useEffect, useRef, useState } from 'react';

interface SectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  actionLink?: string;
  actionText?: string;
}

export const Section = ({ title, children, className = "", actionLink, actionText }: SectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`py-20 px-4 md:px-8 max-w-7xl mx-auto w-full transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        } ${className}`}
    >
      {title && (
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="flex items-center gap-4">
            <div className="w-2 h-8 bg-emerald-600 rounded-full shadow-[0_0_15px_rgba(16,185,129,0.5)]" />
            <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight drop-shadow-md">
              {title}
            </h2>
          </div>
          {actionLink && actionText && (
            <Link
              to={actionLink}
              className="text-sm uppercase tracking-widest text-emerald-400 font-bold hover:text-white transition-colors duration-300"
            >
              {actionText} <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      )}
      {children}
    </section>
  );
};