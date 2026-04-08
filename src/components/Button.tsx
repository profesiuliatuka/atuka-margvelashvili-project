import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'Primary' | 'Secondary' | 'Outline';
}

export const Button = ({ children, variant = 'Primary', className = '', ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-3 font-bold uppercase tracking-wider text-sm transition-all duration-300 rounded-lg flex justify-center items-center";
  
  const variants = {
    Primary: "bg-emerald-600 text-white hover:bg-emerald-500 shadow-lg shadow-emerald-900/20",
    Secondary: "bg-zinc-800 text-white hover:bg-zinc-700",
    Outline: "border-2 border-emerald-600 text-emerald-500 hover:bg-emerald-600 hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};