import React from 'react';
import { motion } from 'framer-motion';
import { Settings } from 'lucide-react';

export default function Products() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 relative overflow-hidden px-4 text-center">
      
      {/* Subtle Tech Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-teal-500/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto">
        
        {/* Animated Gear Icon */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative mb-10"
        >
          {/* Glowing orb behind the icon */}
          <div className="absolute inset-0 bg-brand-400 blur-2xl opacity-20 rounded-full animate-pulse"></div>
          
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Settings className="w-20 h-20 text-brand-600 relative z-10" strokeWidth={1.5} />
          </motion.div>
        </motion.div>

        {/* "Under Development" Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-navy-900 font-semibold text-sm mb-6 shadow-sm"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-600"></span>
          </span>
          R&D Phase
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-display font-bold text-navy-900 tracking-tight mb-6"
        >
          Engineering our product line.
        </motion.h1>

        {/* Subtext aligned with the IIT Patna startup story */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-slate-600 text-lg md:text-xl mb-12 leading-relaxed"
        >
          We're hard at work in the lab building the next generation of safe, affordable Indian home automation. Check back soon for our official hardware launch.
        </motion.p>

        {/* Premium Animated Progress Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-xs h-1.5 bg-slate-200 rounded-full overflow-hidden"
        >
          <motion.div 
            className="h-full bg-brand-600 rounded-full w-1/3"
            animate={{ 
              x: ["-100%", "300%"] 
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
          />
        </motion.div>

      </div>
    </div>
  );
}