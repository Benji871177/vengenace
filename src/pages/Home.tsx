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
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2000&auto=format&fit=crop"
            alt="Clean modern office"
            className="w-full h-full object-cover brightness-[0.4]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 bg-blue-600/20 backdrop-blur-md border border-blue-500/30 px-4 py-2 rounded-full mb-6">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 text-xs font-bold uppercase tracking-widest">Certified Cleaning Experts</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-tight mb-6">
                Relentless Clean. <br />
                <span className="text-blue-500">Unmatched Precision.</span>
              </h1>
              <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
                Vengeance Cleaning Company provides premium, high-performance cleaning solutions for residential, commercial, and industrial spaces. We don't just clean; we restore.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-500 transition-all hover:shadow-xl hover:shadow-blue-500/20 flex items-center justify-center group"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/services/office"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">Cleaning Solutions for Every Need</h3>
            <p className="text-slate-500 text-lg">
              From high-tech solar panels to heavy-duty industrial sites, our specialized teams deliver perfection across all sectors.
            </p>
          </div>

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
                  <h4 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                  <p className="text-slate-500 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={`/services/${service.id}`}
                    className="inline-flex items-center text-slate-900 font-bold hover:text-blue-600 transition-colors group/link"
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
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600 rounded-3xl -z-0 hidden md:block" />
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-slate-100 rounded-full -z-0 hidden md:block" />
            </div>

            <div>
              <h2 className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">Why Vengeance?</h2>
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
                    <div className="p-3 bg-slate-50 rounded-xl">
                      <item.icon className="w-6 h-6 text-blue-600" />
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
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-600/10 skew-x-12 transform translate-x-1/4" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">Ready for a Spotless Space?</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trust Vengeance Cleaning Company for their most critical cleaning needs.
          </p>
          <button
            onClick={() => setIsQuoteModalOpen(true)}
            className="bg-white text-slate-900 px-10 py-5 rounded-full font-bold text-xl hover:bg-blue-500 hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
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
