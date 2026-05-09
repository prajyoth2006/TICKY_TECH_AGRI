import { motion } from 'motion/react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const team = [
  {
    name: 'Arjun Mehta',
    role: 'Co-Founder & CEO',
    bio: 'Visionary leader with 15+ years in IoT and strategic automation.',
    image: 'https://picsum.photos/seed/executive1/400/500'
  },
  {
    name: 'Priya Sharma',
    role: 'Chief Technical Officer',
    bio: 'Embedded systems expert. Architect of our proprietary 3-layer PCB protection.',
    image: 'https://picsum.photos/seed/executive2/400/500'
  },
  {
    name: 'Dev Kasat',
    role: 'Head of Product Design',
    bio: 'Obsessed with making complex deep-tech feel intuitive and human-centric.',
    image: 'https://picsum.photos/seed/executive3/400/500'
  }
];

export default function Team() {
  return (
    <div className="pt-32 pb-24 bg-slate-50 relative overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Subtle Premium Background Gradient */}
      <div className="absolute top-0 left-0 w-full h-125 bg-linear-to-b from-white to-transparent pointer-events-none" />
      
      <section id="team" className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <motion.h4 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-brand-600 font-bold uppercase tracking-widest text-lg mb-4"
            >
                Meet the Team
            </motion.h4>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6"
            >
                The minds behind the magic.
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-slate-600 text-lg"
            >
                A dedicated group of engineers, designers, and innovators building the future of Indian home automation from the ground up at IIT Patna.
            </motion.p>
          </div>

          {/* 
            Team Grid 
            Changed to md:grid-cols-3 to perfectly balance the 3 members.
            Added max-w-5xl and mx-auto to keep them nicely clustered in the center on massive screens.
          */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                    duration: 0.6, 
                    delay: idx * 0.15,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden border border-slate-100 hover:border-transparent hover:shadow-2xl hover:shadow-brand-600/10 hover:-translate-y-2 transition-all duration-300 ease-out h-full"
              >
                {/* Image Container with Hover Socials */}
                <div className="relative aspect-4/5 overflow-hidden bg-slate-200">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-in-out"
                    referrerPolicy="no-referrer"
                  />
                  {/* Overlay Gradient on Hover */}
                  <div className="absolute inset-0 bg-linear-to-t from-navy-900/90 via-navy-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Social Icons Slide Up */}
                  <div className="absolute bottom-0 left-0 w-full p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-center space-x-4">
                    <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-600 hover:scale-110 transition-all duration-300">
                        <Linkedin size={18} />
                    </a>
                    <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-600 hover:scale-110 transition-all duration-300">
                        <Twitter size={18} />
                    </a>
                    <a href="#" aria-label="Email" className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-brand-600 hover:scale-110 transition-all duration-300">
                        <Mail size={18} />
                    </a>
                  </div>
                </div>

                {/* Text Content (Flex-grow ensures uniform height alignment) */}
                <div className="p-8 grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-navy-900 mb-1 group-hover:text-brand-600 transition-colors duration-300">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-brand-600 uppercase tracking-widest mb-4">
                      {member.role}
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}