import { motion, Variants } from 'motion/react';
import { 
  Layers, Cpu, Box, Smartphone, ShieldCheck, Lock, BarChart3, PowerOff, ArrowRight, Activity
} from 'lucide-react';

const solutions = [
  { title: 'Custom 3-Layer PCB', description: 'Proprietary hardware architecture ensuring maximum reliability for your devices.', icon: Layers },
  { title: 'Edge AI Offline', description: 'Lightning-fast local processing. Your home stays smart even without internet.', icon: Cpu },
  { title: 'Plug-and-Play', description: 'No walls to break. Get up and running in minutes with user-friendly setup.', icon: Box },
  { title: 'Hybrid Control', description: 'Control via our intuitive app or keep it classic with traditional switches.', icon: Smartphone },
  { title: 'Surge Resistant', description: 'Enterprise-grade shell keeps your electronics safe from external threats.', icon: ShieldCheck },
  { title: 'Child Safety Modes', description: 'Disable specific switches or set safety limits with a single tap.', icon: Lock },
  { title: 'Usage Analytics', description: 'Monitor power consumption and optimize energy usage to save on bills.', icon: BarChart3 },
  { title: 'Auto Cut-off', description: 'Smart sensing prevents damage by cutting power during unusual spikes.', icon: PowerOff },
];

export default function Solutions() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] } 
    }
  };

  return (
    <section id="solutions" className="py-24 md:py-32 bg-slate-50 relative">
      
      {/* Subtle Blueprint Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start relative">
          
          {/* LEFT SIDE: Sticky Configuration */}
          <div className="lg:col-span-5 pt-4 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-600/10 text-brand-700 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 border border-brand-600/20"
            >
              <Activity className="w-3 h-3" /> <span>Why Choose Us</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6 tracking-tight leading-tight"
            >
              Engineered for <br className="hidden lg:block" />
              <span className="text-brand-600">Reliability.</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-slate-600 leading-relaxed mb-8"
            >
              Developed at the <span className="text-navy-900 font-semibold">IIT Patna Incubation Centre</span>, our technology is built to handle voltage fluctuations that imported systems simply can't survive. 
              <br /><br />
              We bridge the gap between luxury and necessity—offering enterprise-grade protection for homes across India.
            </motion.p>

            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="inline-flex items-center space-x-3 bg-navy-900 hover:bg-brand-600 text-white px-8 py-4 rounded-full font-bold transition-all shadow-xl shadow-navy-900/10 active:scale-95 group"
            >
              <span>Read the Safety Handbook</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>

          {/* RIGHT SIDE: Scrolling Boxes */}
          <div className="lg:col-span-7">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {solutions.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="group relative p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-600/50 hover:shadow-2xl hover:shadow-brand-600/5 hover:-translate-y-1 transition-all duration-300 flex flex-col h-full"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-navy-900 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 mb-6 shadow-sm">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-navy-900 mb-3 group-hover:text-brand-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
