import { motion } from 'motion/react';

export default function About() {
  return (
    <div className="pt-32 pb-24">
      <section id="about" className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h4 className="text-brand-600 font-bold uppercase tracking-widest text-sm mb-4">Our Story</h4>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-navy-900 mb-8 tracking-tight">
                  Born from a need for <br /> safety and simplicity
                </h2>
                <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                  <div className="space-y-6 text-slate-600 leading-relaxed">
                    <p>
                      Ticky Tech is a hardware startup currently in its research and development phase, proudly incubated at the IIT Patna Incubation Centre. We started with a simple mission: to make high-quality IoT technology accessible to every Indian household. We realized that smart homes shouldn't be a luxury, and they shouldn't come at the cost of electrical safety.
                    </p>
                    <p>
                      Backed by the deep-tech resources and rigorous engineering environment of IIT Patna, we are actively developing and testing proprietary solutions. Our focus is on building robust technology that will soon provide homes and industries with the reliability of enterprise systems at the cost of a daily convenience.
                    </p>
                    <p>
                      Our vision is to bridge the digital divide in automation, bringing the exact same level of smart, safe control to a village home as we do to a luxury villa in the city.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 relative">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative rounded-3xl overflow-hidden bg-white border border-slate-200 shadow-2xl z-10 aspect-square p-3"
              >
                {/* Professional Badge - Highlighting your IIT Patna roots */}
                <div className="absolute top-8 right-8 z-30">
                  <div className="bg-brand-600/90 backdrop-blur-md text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg border border-white/20">
                    R&D Phase • IIT Patna
                  </div>
                </div>

                {/* Image Container */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl">
                  <img
                    src="https://ecell.iitp.ac.in/IC/IC.png"
                    alt="Innovation Lab"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out"
                    referrerPolicy="no-referrer"
                  />

                  {/* Subtle Color Enhancement Overlay */}
                  {/* This makes the image look "cool" and high-tech without hiding colors */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/40 via-transparent to-brand-600/5" />

                  {/* Modern Glassmorphism Text Block */}
                  <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-navy-900/90 via-navy-900/50 to-transparent backdrop-blur-[2px]">
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-white font-display font-medium text-lg md:text-xl italic leading-relaxed"
                    >
                      Technology is at its best when it serves the most vulnerable
                    </motion.p>

                    <div className="flex items-center mt-6 space-x-3">
                      <div className="h-px w-8 bg-brand-600" />
                      <p className="text-brand-400 font-bold uppercase tracking-[0.3em] text-[10px] text-amber-50">
                        Ticky Tech Founding Principle
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Glow - Adjusted for color depth */}
              <div className="absolute -bottom-12 -right-12 w-72 h-72 bg-brand-600/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
              <div className="absolute -top-12 -left-12 w-48 h-48 bg-teal-400/10 rounded-full blur-[80px] pointer-events-none" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
