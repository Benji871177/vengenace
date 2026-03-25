import React from "react";
import { motion } from "motion/react";
import { ShieldCheck, Users, Zap, Clock, Star, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-sky-400 py-32 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/6195288/pexels-photo-6195288.jpeg"
            alt="Professional cleaning team"
            className="w-full h-full object-cover brightness-[0.5]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-sky-600/20" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-sky-50 max-w-2xl mx-auto leading-relaxed">
              Founded on the principles of precision and integrity, Vengeance Cleaning Company has grown from a local startup to a leading provider of premium cleaning solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-4">Our Mission</h2>
              <h3 className="text-4xl font-display font-bold text-slate-900 mb-8 leading-tight">We Believe in a Cleaner, Healthier World</h3>
              <p className="text-slate-500 text-lg mb-8 leading-relaxed">
                Our mission is to provide unmatched cleaning services that enhance the quality of life and work for our clients. We combine advanced technology with a human touch to ensure every space we touch is transformed.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Eco-Friendly Practices",
                  "Uncompromising Standards",
                  "Client-Centric Approach",
                  "Continuous Innovation",
                  "Professional Integrity",
                  "Community Commitment"
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-sky-600" />
                    <span className="text-slate-700 font-bold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/6195288/pexels-photo-6195288.jpeg"
                  alt="Spotless home environment"
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-sky-600 rounded-xl">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">10+ Years</p>
                    <p className="text-slate-500 text-xs uppercase tracking-widest font-bold">Of Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-xs font-bold text-sky-600 uppercase tracking-widest mb-4">Our Values</h2>
            <h3 className="text-4xl font-display font-bold text-slate-900 mb-6">The Pillars of Our Success</h3>
            <p className="text-slate-500 text-lg">
              Every member of the Vengeance team lives by these core values, ensuring consistency and quality in every job we perform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Precision", desc: "We pay attention to the smallest details that others might miss.", icon: Zap },
              { title: "Reliability", desc: "When we say we'll be there, we're there. On time, every time.", icon: Clock },
              { title: "Expertise", desc: "Our staff is trained in the latest cleaning techniques and safety standards.", icon: Users },
              { title: "Security", desc: "We are fully insured and vetted for your peace of mind.", icon: ShieldCheck },
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
                <div className="p-4 bg-slate-50 rounded-2xl mb-6 group-hover:bg-sky-600 transition-colors">
                  <value.icon className="w-8 h-8 text-sky-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
