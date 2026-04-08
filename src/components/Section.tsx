import type { ReactNode } from 'react';

interface SectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
}

export const Section = ({ title, children, className = "" }: SectionProps) => {
  return (
    <section className={`py-20 px-4 md:px-8 max-w-7xl mx-auto w-full ${className}`}>
      {title && (
        <div className="flex items-center gap-4 mb-12">
          <div className="w-2 h-8 bg-emerald-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">
            {title}
          </h2>
        </div>
      )}
      {children}
    </section>
  );
};