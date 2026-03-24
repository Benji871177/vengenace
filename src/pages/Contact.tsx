import React from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, MessageCircle } from "lucide-react";
import { SERVICES } from "../constants";

export default function Contact() {
  const whatsappNumber = "27742742289"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex justify-center mb-8">
              <div className="h-20 w-20 flex items-center justify-center bg-white rounded-2xl shadow-xl p-2">
                <img 
                  src="https://drive.google.com/uc?export=download&id=1wdOvGsY08Yw41EHYNBm0-aDDIy6RJhUk" 
                  alt="Vengeance Cleaning Logo" 
                  className="h-full w-full object-contain"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=100&auto=format&fit=crop";
                  }}
                />
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto">
              Have questions about our services or need a custom cleaning plan? Our team is ready to help you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Contact Information</h2>
              <p className="text-slate-500 mb-12 text-lg leading-relaxed">
                Reach out to us through any of these channels, or visit our office in Maitland. We're always happy to discuss how we can make your space spotless.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  { icon: Phone, title: "Phone", detail: "074 274 2289", sub: "Mon-Fri, 8am-6pm" },
                  { icon: Mail, title: "Email", detail: "info@vengeancecleaning.com", sub: "24/7 Support" },
                  { icon: MapPin, title: "Office", detail: "1 patton street Maitland", sub: "cape Town South Africa, 7404" },
                  { icon: Globe, title: "Social", detail: "Vengeance Cleaning", sub: "Follow our work" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="p-3 bg-sky-50 rounded-xl">
                      <item.icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-700 text-sm font-medium">{item.detail}</p>
                      <p className="text-slate-400 text-xs mt-1">{item.sub}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-sky-400 rounded-3xl p-10 text-white flex items-center space-x-6 shadow-xl shadow-sky-400/20">
                <div className="p-4 bg-white/20 backdrop-blur-md rounded-2xl">
                  <MessageSquare className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1 text-white">Live Chat Support</h4>
                  <p className="text-sky-50 text-sm">Need immediate assistance? Our agents are online and ready to chat.</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-8">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Service Needed</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white appearance-none">
                    <option value="">Select a service</option>
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.id}>{s.title}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-widest">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-sky-500 focus:ring-2 focus:ring-sky-200 outline-none transition-all bg-white resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-sky-400 text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-sky-500 transition-all active:scale-[0.98] shadow-lg shadow-sky-400/20"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>

                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase tracking-widest font-bold">
                    <span className="bg-slate-50 px-4 text-slate-400">Or Chat With Us</span>
                  </div>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#25D366] text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 hover:bg-[#128C7E] transition-all active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                </a>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
