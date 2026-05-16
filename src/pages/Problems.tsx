import { motion } from 'motion/react';
import type { Variants } from 'motion/react';


import { Banknote, Grid, ShieldAlert, WifiOff, Headphones, BarChart3 } from 'lucide-react';

const problems = [
  {
    title: 'Expensive Equipment',
    description: 'Imported CO2, temp, and RH controllers are too expensive for average growers.',
    icon: Banknote,
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Fragmented Tracking',
    description: 'Using separate meters for different metrics leads to disconnected data and manual logging.',
    icon: Grid,
    color: 'bg-blue-50 text-blue-600',
  },
  {
    title: 'Micro-Climate Shock',
    description: 'Unnoticed spikes in RH or drops in CO2 can ruin crops before you even spot them.',
    icon: ShieldAlert,
    color: 'bg-red-50 text-red-600',
  },
  {
    title: 'Cloud Dependency',
    description: 'Most smart monitors stop tracking and analyzing data if the farm internet drops.',
    icon: WifiOff,
    color: 'bg-slate-50 text-slate-600',
  },
  {
    title: 'Hardware Failures',
    description: 'Delicate sensors often fail under local voltage spikes and high greenhouse humidity.',
    icon: Headphones,
    color: 'bg-purple-50 text-purple-600',
  },
  {
    title: 'No Data Analysis',
    description: 'Basic sensors only show raw numbers without analyzing trends to help maximize yield.',
    icon: BarChart3,
    color: 'bg-orange-50 text-orange-600',
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeInOut',
    },
  },
};

export default function Problems() {
  return (
    <div className="pt-32 pb-24">
      <section
        id="problems"
        className="py-24 bg-slate-50 overflow-hidden rounded-[4rem] mx-4 sm:mx-8"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 px-4">
            <motion.h4
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-brand-600 font-bold uppercase tracking-widest text-lg mb-4"
            >
              The Challenges
            </motion.h4>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold text-navy-900 mb-6"
            >
              Problems We Solve
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-2xl mx-auto text-lg text-slate-600"
            >
              Why the current market fails the common user, and how we're
              changing the game.
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {problems.map((item, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{
                  y: -12,
                  boxShadow:
                    '0 25px 50px -12px rgba(15, 23, 42, 0.1)',
                }}
                className="bg-white p-10 rounded-3xl border border-slate-100 transition-all duration-300 group"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${item.color} group-hover:scale-110 transition-transform duration-300`}
                >
                  <item.icon className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-navy-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}