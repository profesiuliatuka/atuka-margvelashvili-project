import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import type { NavLink } from '../types';

interface HeaderProps {
  links: NavLink[];
}

export const Header = ({ links }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const teamLogo = "https://media.api-sports.io/football/teams/685.png";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`text-white sticky top-0 z-50 border-b transition-all duration-300 ${
      scrolled
        ? 'bg-zinc-950/95 backdrop-blur-md border-zinc-800 shadow-2xl shadow-black/40'
        : 'bg-zinc-950 border-zinc-800/60'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-4 group">
              <div className="w-14 h-14 bg-white border border-zinc-700 rounded-full flex items-center justify-center p-2 shadow-inner group-hover:border-emerald-500/60 group-hover:shadow-emerald-900/20 transition-all duration-300 shrink-0">
                <img
                  src={teamLogo}
                  alt="Torpedo Kutaisi"
                  className="w-full h-full object-contain drop-shadow-xl"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-2xl tracking-tighter uppercase italic leading-none group-hover:text-emerald-400 transition-colors duration-300">
                  Torpedo
                </span>
                <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-bold leading-none mt-1">
                  Kutaisi
                </span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:block">
            <ul className="flex items-center gap-1">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`relative px-4 py-2 text-xs uppercase tracking-[0.2em] font-black transition-colors duration-200 rounded-lg ${
                        isActive
                          ? 'text-emerald-400'
                          : 'text-zinc-400 hover:text-white'
                      }`}
                    >
                      {isActive && (
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-500 rounded-full" />
                      )}
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="მენიუ"
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
                <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 bg-zinc-900/98 backdrop-blur-md ${isOpen ? 'max-h-screen py-6 border-t border-zinc-800' : 'max-h-0'}`}>
        <ul className="px-6 space-y-1">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center gap-3 py-3 px-4 rounded-xl text-base font-black uppercase tracking-widest transition-colors ${
                    isActive
                      ? 'bg-emerald-600/20 text-emerald-400 border border-emerald-500/20'
                      : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full shrink-0" />}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
};