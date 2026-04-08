import { Link } from 'react-router-dom';
import type { NavLink } from '../types';

interface FooterProps {
  links: NavLink[];
}

export const Footer = ({ links }: FooterProps) => {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-12 border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          <div>
            <span className="text-white font-bold text-2xl tracking-wider uppercase mb-6 block">
              FC Torpedo
            </span>
            <p className="text-sm leading-relaxed mb-6">
              ქუთაისის ტორპედოს ოფიციალური ვებსაიტი. სიახლეები, მატჩები, გუნდის შემადგენლობა და ფანშოფი.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">FB</a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">IG</a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-emerald-600 hover:text-white transition-colors">YT</a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6">ნავიგაცია</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="hover:text-emerald-400 transition-colors text-sm uppercase tracking-wide">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg uppercase tracking-wider mb-6">კონტაქტი</h3>
            <ul className="space-y-3 text-sm">
              <li>ქუთაისი, რამაზ შენგელიას სტადიონი</li>
              <li>info@fctorpedo.ge</li>
              <li>+995 32 2 00 00 00</li>
            </ul>
          </div>
          
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-xs tracking-wider uppercase">
          &copy; {new Date().getFullYear()} FC Torpedo Kutaisi. ყველა უფლება დაცულია.
        </div>
      </div>
    </footer>
  );
};