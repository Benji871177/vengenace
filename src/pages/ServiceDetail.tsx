import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { CheckCircle2, ArrowLeft, ArrowRight, ShieldCheck, Zap, Clock } from "lucide-react";
import { SERVICES } from "../constants";
import QuoteModal from "../components/QuoteModal";

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  
  const service = SERVICES.find((s) => s.id === id);

  useEffect(() => {
    if (!service) {
      navigate("/");
    }
    window.scrollTo(0, 0);
  }, [id, service, navigate]);

  if (!service) return null;

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover brightness-[0.5]"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <Link to="/" className="inline-flex items-center text-blue-400 font-bold mb-6 hover:text-blue-300 transition-colors group">
              <ArrowLeft className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services</span>
            </Link>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl text-slate-300 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold text-slate-900 mb-8">Service Overview</h2>
              <div className="prose prose-lg text-slate-500 max-w-none mb-12">
                <p className="leading-relaxed mb-6">
                  {service.longDescription}
                </p>
                <p className="leading-relaxed">
                  At Vengeance Cleaning Company, we understand that every {service.title.toLowerCase()} project is unique. Our team of experts is trained to handle the specific challenges of this environment, using state-of-the-art equipment and specialized cleaning agents to deliver results that exceed expectations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {service.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                    <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{benefit}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-900 rounded-3xl p-10 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
                  <p className="text-slate-400 mb-8 max-w-md">
                    Contact us today for a customized quote tailored to your specific {service.title.toLowerCase()} requirements.
                  </p>
                  <button
                    onClick={() => setIsQuoteModalOpen(true)}
                    className="bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-500 transition-all flex items-center space-x-2"
                  >
                    <span>Request a Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <ShieldCheck className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 transform rotate-12" />
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6">Other Services</h3>
                <div className="space-y-4">
                  {SERVICES.filter(s => s.id !== id).map((s) => (
                    <Link
                      key={s.id}
                      to={`/services/${s.id}`}
                      className="flex items-center justify-between p-4 bg-white rounded-xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
                    >
                      <span className="font-bold text-slate-700 group-hover:text-blue-600 transition-colors">{s.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-blue-600 rounded-3xl p-8 text-white">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-xl font-bold">Fast Response</h3>
                </div>
                <p className="text-blue-100 mb-6 text-sm leading-relaxed">
                  We pride ourselves on our quick turnaround times. Most quotes are delivered within 24 hours of your request.
                </p>
                <Link to="/contact" className="text-white font-bold underline underline-offset-4 hover:text-blue-200 transition-colors">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialService={service.id}
      />
    </div>
  );
}
