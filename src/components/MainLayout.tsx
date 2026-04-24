import { useLocation } from 'react-router-dom';
import type { ReactNode } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { navLinks } from '../data';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-zinc-900 font-quadrosquare selection:bg-emerald-500 selection:text-white">
      <Header links={navLinks} />
      <main className="flex-grow flex flex-col overflow-x-hidden">
        <div key={location.pathname} className="flex-grow animate-fade-in-up">
          {children}
        </div>
      </main>
      <Footer links={navLinks} />
    </div>
  );
};