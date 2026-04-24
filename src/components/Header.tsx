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
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      scrolled
        ? 'bg-zinc-950/50 backdrop-blur-2xl saturate-150 border-b border-white/10 shadow-lg shadow-black/20'
        : 'bg-transparent border-b border-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}>

          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-4 group">
              <div className={`flex items-center justify-center p-2 shrink-0 bg-white/90 backdrop-blur-xl rounded-full shadow-md transition-all duration-500 ${
                scrolled ? 'w-10 h-10' : 'w-14 h-14'
              }`}>
                <img
                  src={teamLogo}
                  alt="Torpedo Kutaisi"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className={`font-sans font-black tracking-tighter uppercase italic leading-none transition-all duration-500 text-white ${
                  scrolled ? 'text-xl' : 'text-2xl'
                }`}>
                  Torpedo
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.3em] text-zinc-400 font-bold leading-none mt-1">
                  Kutaisi
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-6">
              {links.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className={`text-xs uppercase tracking-widest font-black transition-colors duration-300 ${
                        isActive
                          ? 'text-emerald-400'
                          : 'text-zinc-300 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 transition-colors duration-300"
              aria-label="მენიუ"
            >
              <div className="w-6 h-4 flex flex-col justify-between relative">
                <span className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 origin-left ${isOpen ? 'rotate-45 translate-x-1 -translate-y-1' : ''}`} />
                <span className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                <span className={`h-[2px] w-full bg-white rounded-full transition-all duration-300 origin-left ${isOpen ? '-rotate-45 translate-x-1 translate-y-1' : ''}`} />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out bg-zinc-950/80 backdrop-blur-3xl saturate-150 border-white/10 absolute w-full left-0 ${isOpen ? 'max-h-[400px] border-b shadow-2xl' : 'max-h-0 border-b-0'}`}>
        <ul className="px-6 py-6 space-y-4">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-sm font-black uppercase tracking-widest transition-colors duration-300 ${
                    isActive
                      ? 'text-emerald-400'
                      : 'text-zinc-300'
                  }`}
                >
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