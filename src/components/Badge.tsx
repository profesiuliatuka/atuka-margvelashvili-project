import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
}

export const Badge = ({ children }: BadgeProps) => {
  return (
    <span className="inline-flex items-center px-3 py-1 bg-zinc-950 text-emerald-400 text-xs font-bold uppercase tracking-widest rounded-full border border-emerald-900/30">
      {children}
    </span>
  );
};