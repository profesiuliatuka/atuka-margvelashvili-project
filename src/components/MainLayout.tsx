import type { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { navLinks } from '../data';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 font-sans selection:bg-emerald-500 selection:text-white">
      <Header links={navLinks} />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer links={navLinks} />
    </div>
  );
};