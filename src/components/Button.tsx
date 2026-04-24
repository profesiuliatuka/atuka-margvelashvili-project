import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'Primary' | 'Secondary' | 'Outline';
}

export const Button = ({ children, variant = 'Primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-xl flex justify-center items-center backdrop-blur-md relative overflow-hidden group";
  
  const variants = {
    Primary: "bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:scale-105 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] border border-emerald-400/30",
    Secondary: "bg-zinc-900 border border-zinc-700 hover:border-emerald-500 text-zinc-300 hover:text-white shadow-lg",
    Outline: "bg-transparent border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.1)]"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="relative z-10">{children}</span>
      {variant === 'Primary' && (
        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
      )}
    </button>
  );
};