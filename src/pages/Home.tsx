import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, Star, ShieldCheck, Zap, Clock, Users } from "lucide-react";
import { SERVICES } from "../constants";
import QuoteModal from "../components/QuoteModal";

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="w-full max-w-7xl mx-auto">
          <img
            src="https://i.postimg.cc/Pqf6Gs9h/Whats-App-Image-2026-03-26-at-22-44-00-(1).jpg"
            alt="Vengeance Cleaning Hero"
            className="w-full h-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-sky-600 text-white rounded-[2.5rem] p-12 md:p-16 relative overflow-hidden shadow-2xl shadow-sky-200">
            <div className="absolute top-0 left-0 w-full h-full opacity-10">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />
            </div>
            <div className="relative z-10 text-center">
              <h3 className="text-lg md:text-2xl font-display font-bold leading-relaxed flex flex-wrap justify-center gap-x-2">
                {"Vengeance Cleaning Company provides premium, high-performance cleaning solutions for residential, commercial, and industrial spaces. We don't just clean; we restore.".split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.4 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors">{service.title}</h4>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-slate-900 font-bold hover:text-sky-600 transition-colors group/link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=1000&auto=format&fit=crop"
                  alt="Professional cleaner at work"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-sky-600 rounded-3xl -z-0 hidden md:block" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-slate-100 rounded-full -z-0 hidden md:block" />
            </div>

            <div>
              <h2 className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-4">Why Vengeance?</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">We Take Cleanliness Personally</h3>
              <p className="text-slate-500 text-lg mb-10 leading-relaxed">
                Our name reflects our attitude. We have a vengeance against dirt, grime, and bacteria. We use the latest technology and the most rigorous standards to ensure your environment is not just clean, but healthy.
              </p>

              <div className="space-y-6">
                {[
                  { title: "Eco-Friendly Technology", desc: "We use sustainable products that are safe for people, pets, and the planet.", icon: Zap },
                  { title: "Fully Insured & Vetted", desc: "Every member of our team undergoes rigorous background checks and training.", icon: ShieldCheck },
                  { title: "24/7 Support", desc: "Our customer service team is always available to handle your requests.", icon: Clock },
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-4">
                    <div className="p-3 bg-sky-50 rounded-xl">
                      <item.icon className="w-6 h-6 text-sky-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-sky-400 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/10 skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready for a Spotless Space?</h2>
          <p className="text-xl text-sky-50 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Vengeance Cleaning Company for their most critical cleaning needs.
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-white text-sky-500 px-10 py-5 rounded-full font-bold text-xl hover:bg-sky-50 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-sky-900/10"
          >
            Get Your Free Quote Today
          </button>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
    </div>
  );
}
