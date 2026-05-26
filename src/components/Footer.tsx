import { Cpu, Mail, Phone, MapPin, Facebook, Linkedin, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white pt-20 pb-10 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Identity */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="bg-brand-600 p-1.5 rounded-lg group-hover:scale-110 transition-transform">
                <Cpu className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-display font-bold tracking-tight">
                Ticky<span className="text-brand-600">Tech</span>
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Revolutionizing IoT with affordable, safe, and future-ready 
              automation for the modern Indian home and industry.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-brand-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display">Quick Links</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#about" className="hover:text-brand-600 transition-colors">About Us</a></li>
              <li><a href="#solutions" className="hover:text-brand-600 transition-colors">Why Choose Us</a></li>
              <li><a href="#problems" className="hover:text-brand-600 transition-colors">Problems</a></li>
              <li><a href="#team" className="hover:text-brand-600 transition-colors">Our Team</a></li>
              <li><a href="#contact" className="hover:text-brand-600 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display">Support</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-brand-600 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Safety Guides</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Warranty Info</a></li>
              <li><a href="#" className="hover:text-brand-600 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-display">Contact Us</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-600 mt-1 shrink-0" />
                <span>1st Floor (I) Incubation Center, IIT Patna , Bihar, India</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-600 shrink-0" />
                <span>+91 70688 18200</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-600 shrink-0" />
                <span>info.tickytech@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-600 shrink-0" />
                <span>info@tickytech.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm space-y-4 md:space-y-0">
          <p>© {currentYear} Ticky Tech Solutions Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
