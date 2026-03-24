import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SERVICES } from "../constants";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative h-14 w-14 flex items-center justify-center bg-white rounded-xl overflow-hidden shadow-lg group-hover:shadow-sky-500/30 transition-all duration-300 p-1">
              <img 
                src="https://drive.google.com/uc?export=download&id=1wdOvGsY08Yw41EHYNBm0-aDDIy6RJhUk" 
                alt="Vengeance Cleaning Logo" 
                className="h-full w-full object-contain"
                onError={(e) => {
                  // Fallback if the drive link fails
                  e.currentTarget.src = "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=100&auto=format&fit=crop";
                }}
              />
            </div>
            <span className={cn(
              "text-xl font-display font-bold tracking-tight hidden sm:block",
              isScrolled ? "text-slate-900" : "text-slate-900"
            )}>
              VENGEANCE <span className="text-sky-600">CLEANING</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-sm font-medium hover:text-sky-600 transition-colors">Home</Link>
            
            <div 
              className="relative group"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="flex items-center text-sm font-medium hover:text-sky-600 transition-colors">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              
              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full left-0 w-64 bg-white shadow-xl rounded-xl mt-2 py-2 border border-slate-100 overflow-hidden"
                  >
                    {SERVICES.map((service) => (
                      <Link
                        key={service.id}
                        to={`/services/${service.id}`}
                        className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-sky-600 transition-colors"
                      >
                        {service.title}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/about" className="text-sm font-medium hover:text-sky-600 transition-colors">About</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-sky-600 transition-colors">Contact</Link>
            
            <Link 
              to="/contact" 
              className="bg-sky-400 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-sky-300 transition-all hover:shadow-lg hover:shadow-sky-100"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-900 hover:text-sky-600 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link to="/" className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Home</Link>
              <div className="px-3 py-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Our Services</p>
                <div className="grid grid-cols-1 gap-2">
                  {SERVICES.map((service) => (
                    <Link
                      key={service.id}
                      to={`/services/${service.id}`}
                      className="block py-2 text-base text-slate-600 hover:text-sky-600"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <Link to="/about" className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">About</Link>
              <Link to="/contact" className="block px-3 py-4 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-lg">Contact</Link>
              <div className="pt-4 px-3">
                <Link 
                  to="/contact" 
                  className="block w-full text-center bg-sky-400 text-white px-6 py-4 rounded-xl font-bold"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
