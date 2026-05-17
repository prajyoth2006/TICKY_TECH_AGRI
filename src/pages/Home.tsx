import Hero from '../components/Hero';
import { motion, Variants } from 'motion/react'; 
import { ShieldCheck, Smartphone, Cpu, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1] as const
        } 
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      <Hero />
      
      <section className="py-25 relative group">
        
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[40px_40px] mask-[linear-gradient(to_bottom,white_60%,transparent_100%)] pointer-events-none" />
        
        <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 h-125 w-full max-w-4xl rounded-full bg-brand-600/5 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center mb-24">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-display font-bold text-navy-900 leading-[1.1]"
            >
              Engineered for the <br className="hidden md:block" />
              <span className="text-slate-400">future of farming.</span>
            </motion.h2>
          </div>

          {/* 3 Pillar Blocks */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12"
          >
            {[
              {
                icon: ShieldCheck,
                title: "Built-In Protection",
                desc: "Our devices are built tough to handle the sudden power spikes common on farms, keeping your expensive climate equipment safe from breaking.",
                accent: "bg-emerald-500"
              },
              {
                icon: Cpu,
                title: "Works Without Wi-Fi",
                desc: "Farm internet is down? No worries. Our smart sensors keep working and adjusting your greenhouse climate automatically, even offline.",
                accent: "bg-brand-500"
              },
              {
                icon: Smartphone,
                title: "Your Farm on Your Phone",
                desc: "One easy-to-use app lets you check your farm's temperature, humidity, and CO2 from anywhere. Complete control, right in your pocket.",
                accent: "bg-teal-500"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                className="group relative bg-white/60 backdrop-blur-xl border border-slate-200 rounded-[2.5rem] p-10 lg:p-12 hover:-translate-y-4 hover:shadow-2xl hover:shadow-brand-600/10 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col items-start text-left overflow-hidden"
              >
                {/* Visual Connector / Accent Color on Hover */}
                <div className={`absolute left-10 top-0 h-1 w-12 ${feature.accent} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500`} />

                {/* Decorative Hover Glow inside card */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-brand-600/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 w-16 h-16 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-10 group-hover:scale-110 group-hover:bg-white group-hover:shadow-xl group-hover:shadow-brand-600/10 transition-all duration-500">
                  <feature.icon className="w-8 h-8 text-navy-900 group-hover:text-brand-600 transition-colors" />
                </div>
                
                <h3 className="relative z-10 text-2xl font-display font-bold text-navy-900 mb-6 group-hover:translate-x-1 transition-transform duration-300">
                  {feature.title}
                </h3>
                
                <p className="relative z-10 text-slate-500 leading-relaxed font-light text-lg mb-8">
                  {feature.desc}
                </p>
                
                <div className="relative z-10 mt-auto pt-4 flex items-center text-brand-600 font-bold text-sm tracking-tight opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-500">
                  <Link to="/products" className="flex items-center hover:underline">
                    Explore Products <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}