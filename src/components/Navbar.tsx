import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Cpu, Home } from 'lucide-react';
import { NavLink, Link } from 'react-router-dom';

const navLinks = [
  { name: 'About', to: '/about' },
  { name: 'Problems', to: '/problems' },
  { name: 'Why Choose Us', to: '/solutions' },
  { name: 'Products', to: '/products' },
  { name: 'Team', to: '/team' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-brand-600 p-1.5 rounded-lg group-hover:rotate-12 transition-transform">
              <Cpu className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-display font-bold text-navy-900 tracking-tight">
              Ticky<span className="text-brand-600">Tech</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) => 
                  `text-sm font-medium transition-colors relative group ${
                    isActive ? 'text-brand-600' : 'text-slate-600 hover:text-brand-600'
                  }`
                }
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-600 transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
            
            <Link 
              to="https://ticky-tech-blond.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative flex items-center gap-2 px-6 py-2.5 rounded-full bg-navy-900 text-white text-sm font-semibold hover:bg-brand-600 transition-all duration-300 shadow-md hover:shadow-brand-600/30 active:scale-95 group"
            >
              <Home className="w-4 h-4 text-brand-400 group-hover:text-white transition-colors" />
              Try Our Smart Home Solution
            </Link>

          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-navy-900"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    `block px-3 py-4 text-base font-medium rounded-lg transition-colors ${
                      isActive ? 'bg-brand-50 text-brand-600' : 'text-slate-700 hover:bg-slate-50 hover:text-brand-600'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <div className="pt-4 px-3">
                <Link 
                  to="https://ticky-tech-blond.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-navy-900 text-white px-5 py-3 rounded-xl text-base font-semibold hover:bg-brand-600 transition-colors"
                >
                  <Home className="w-5 h-5" />
                  Home Automation
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}