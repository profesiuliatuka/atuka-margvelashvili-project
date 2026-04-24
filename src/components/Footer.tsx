import { Link } from 'react-router-dom';
import type { NavLink } from '../types';

interface FooterProps {
  links: NavLink[];
}

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="relative bg-zinc-950 text-zinc-400 pt-20 pb-10 border-t border-white/5 mt-auto overflow-hidden">
      
      {/* Background Glows (like match section) */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="md:col-span-2">
            <span className="text-white font-black text-3xl tracking-tighter uppercase italic leading-none mb-6 block">
              Torpedo
            </span>
            <p className="text-sm leading-relaxed mb-8 max-w-sm text-zinc-500">
              ქუთაისის ტორპედოს ოფიციალური ვებსაიტი. სიახლეები, მატჩები, გუნდის შემადგენლობა და კლუბის ისტორია ერთ სივრცეში.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-zinc-950 hover:border-white transition-all duration-300">FB</a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-zinc-950 hover:border-white transition-all duration-300">IG</a>
              <a href="#" className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-zinc-950 hover:border-white transition-all duration-300">YT</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">ნავიგაცია</h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="group flex items-center text-sm uppercase tracking-wider text-zinc-400 hover:text-white transition-colors duration-300">
                    <span className="w-0 overflow-hidden group-hover:w-3 group-hover:mr-2 transition-all duration-300 text-emerald-500">-</span>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.2em] mb-8">კონტაქტი</h3>
            <ul className="space-y-4 text-sm text-zinc-400">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">📍</span>
                <span>ქუთაისი, რამაზ შენგელიას სტადიონი</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">✉️</span>
                <span className="hover:text-white transition-colors cursor-pointer">info@fctorpedo.ge</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 mt-1">📞</span>
                <span className="hover:text-white transition-colors cursor-pointer">+995 32 2 00 00 00</span>
              </li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-600">
            &copy; {new Date().getFullYear()} FC Torpedo Kutaisi. ყველა უფლება დაცულია.
          </div>
          <div className="flex items-center gap-6 text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-600">
            <Link to="/terms" className="hover:text-white transition-colors">წესები და პირობები</Link>
            <Link to="/privacy" className="hover:text-white transition-colors">კონფიდენციალურობა</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};