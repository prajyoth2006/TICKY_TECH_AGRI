import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react';

export default function Contact() {
  return (
    <div className="pt-32 pb-24">
      <section id="contact" className="bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20">
            {/* Contact Information */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h4 className="text-brand-600 font-bold uppercase tracking-widest text-xl mb-4">Contact Us</h4>
                <h2 className="text-4xl md:text-6xl font-display font-bold text-navy-900 mb-8 tracking-tight">
                  Let's talk about <br /> your next project
                </h2>
                <p className="text-lg text-slate-600 mb-12 max-w-lg leading-relaxed">
                  Have a question about our solutions? Our team is here to help you navigate 
                  your automation journey, from villas to industrial setups.
                </p>

                <div className="space-y-10">
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 shadow-sm">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-1">Email Us</h4>
                      <p className="text-slate-600">info.tickytech@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 shadow-sm">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-1">Call Us</h4>
                      <p className="text-slate-600">+91 70688 18200</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-6">
                    <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-brand-600 shadow-sm">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold uppercase tracking-widest text-navy-900 mb-1">Visit Us</h4>
                      <p className="text-slate-600">1st Floor (I) Incubation Center, IIT Patna , Bihar, India</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-slate-50 p-10 md:p-12 rounded-[3.5rem] border border-slate-100 shadow-xl shadow-slate-200/50"
              >
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Full Name</label>
                    <input 
                        type="text" 
                        placeholder="John Doe" 
                        className="w-full px-8 py-5 rounded-3xl bg-white border border-slate-200 focus:border-brand-600 focus:outline-none focus:ring-4 focus:ring-brand-600/5 transition-all text-navy-900 placeholder:text-slate-300"
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Email Address</label>
                      <input 
                        type="email" 
                        placeholder="john@example.com" 
                        className="w-full px-8 py-5 rounded-3xl bg-white border border-slate-200 focus:border-brand-600 focus:outline-none transition-all text-navy-900"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Phone Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 00000 00000" 
                        className="w-full px-8 py-5 rounded-3xl bg-white border border-slate-200 focus:border-brand-600 focus:outline-none transition-all text-navy-900"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-4">Message</label>
                    <textarea 
                        rows={5}
                        placeholder="Tell us about your requirements..." 
                        className="w-full px-8 py-6 rounded-4xl bg-white border border-slate-200 focus:border-brand-600 focus:outline-none transition-all text-navy-900 resize-none"
                    />
                  </div>

                  <button className="w-full flex items-center justify-center space-x-3 bg-brand-600 text-white py-6 rounded-full font-bold text-lg hover:bg-brand-700 transition-all shadow-xl shadow-brand-600/20 active:scale-95 group">
                    <span>Send Message</span>
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
