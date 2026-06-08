import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ChevronRight, 
  Sprout, 
  Thermometer, 
  Wind, 
  Droplets,
  Wifi,
  Activity
} from 'lucide-react';

export default function Hero() {
  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut" as const 
    }
  };

  const floatingAnimationReverse = {
    y: [0, 15, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut" as const 
    }
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 lg:pt-0 lg:pb-0 overflow-hidden bg-white flex items-center">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[40px_40px] pointer-events-none" />
      
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-200 h-200 bg-emerald-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-150 h-150 bg-teal-400/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Copy & CTAs */}
          <div className="text-center lg:text-left z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-emerald-700 text-sm font-semibold mb-8 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Next-Gen AgriTech is Here</span>
              <ChevronRight className="w-4 h-4 text-emerald-500" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-navy-900 tracking-tight leading-[1.1] mb-6"
            >
              Ticky Tech — <br className="hidden lg:block" />
              <span className="relative">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-600 to-teal-400">
                  precision farming
                </span>
                {/* Decorative underline */}
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-teal-400/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-xl mx-auto lg:mx-0 text-lg md:text-xl text-slate-600 mb-8 leading-relaxed"
            >
              Making advanced climate control and smart crop monitoring accessible to every Indian grower. 
              <span className="block mt-4 font-semibold text-navy-900 bg-emerald-50 px-3 py-1 rounded-lg">
                Affordable solutions for all – from rural greenhouses to urban vertical farms.
              </span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a href='#products' className="w-full sm:w-auto bg-navy-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-emerald-600 transition-all duration-300 flex items-center justify-center shadow-lg shadow-navy-900/20 active:scale-95 group">
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href = '#contact' className="w-full sm:w-auto bg-white border-2 border-slate-200 text-slate-700 px-8 py-4 rounded-full font-bold text-lg hover:border-emerald-600 hover:text-emerald-600 transition-all duration-300 active:scale-95 text-center shadow-sm">
                Contact Us
              </a>
            </motion.div>
          </div>

          {/* Right Column: Glassmorphism Farm Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative h-125 w-full hidden md:flex items-center justify-center mt-12 lg:mt-0"
          >
            {/* Center Hub Card */}
            <div className="relative z-20 w-80 bg-white/70 backdrop-blur-xl border border-white rounded-4xl p-6 shadow-2xl shadow-emerald-900/10">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-navy-900 text-xl">Greenhouse A</h3>
                  <p className="text-sm text-slate-500 flex items-center gap-1">
                    <Wifi className="w-3 h-3 text-teal-500" /> Sensors Online
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-linear-to-tr from-emerald-500 to-teal-400 flex items-center justify-center text-white shadow-lg">
                  <Sprout className="w-6 h-6" />
                </div>
              </div>

              {/* Grid of smart controls */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-2 group hover:border-emerald-500 transition-colors cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                    <Wind className="w-5 h-5 text-emerald-600" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">CO2 Level</span>
                  <span className="text-xs text-slate-400 font-medium">850 ppm</span>
                </div>
                
                <div className="bg-emerald-600 rounded-2xl p-4 shadow-md shadow-emerald-600/20 flex flex-col items-center justify-center gap-2 cursor-pointer">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Thermometer className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-white">Climate</span>
                  <span className="text-xs text-emerald-100">24°C | 65% RH</span>
                </div>
              </div>
            </div>

            {/* Floating Widget 1: Sensor Grid Status */}
            <motion.div 
              animate={floatingAnimation}
              className="absolute top-10 right-4 z-30 bg-white/80 backdrop-blur-md border border-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center">
                <Activity className="w-5 h-5 text-teal-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900">Sensor Grid</p>
                <p className="text-xs text-teal-600 font-medium">All nodes tracking</p>
              </div>
            </motion.div>

            {/* Floating Widget 2: Irrigation */}
            <motion.div 
              animate={floatingAnimationReverse}
              className="absolute bottom-16 left-0 z-30 bg-white/80 backdrop-blur-md border border-white p-4 rounded-2xl shadow-xl shadow-slate-200/50 flex items-center gap-4"
            >
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-navy-900">Smart Irrigation</p>
                <p className="text-xs text-slate-500">Auto-watering engaged</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}