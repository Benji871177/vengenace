import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { SERVICES } from "../constants";

export default function Footer() {
  return (
    <footer className="bg-sky-50 text-slate-900 pt-20 pb-10 border-t border-sky-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
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
              <span className="text-2xl font-display font-bold tracking-tight text-slate-900">
                VENGEANCE <span className="text-sky-500">CLEANING</span>
              </span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Premium cleaning solutions for every environment. We bring a relentless commitment to cleanliness, ensuring your space is spotless and sanitized.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-sky-100 flex items-center justify-center hover:bg-sky-400 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-sky-100 flex items-center justify-center hover:bg-sky-400 hover:text-white transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-sky-100 flex items-center justify-center hover:bg-sky-400 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white border border-sky-100 flex items-center justify-center hover:bg-sky-400 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-slate-500 hover:text-sky-500 transition-colors text-sm">Home</Link></li>
              <li><Link to="/about" className="text-slate-500 hover:text-sky-500 transition-colors text-sm">About Us</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-sky-500 transition-colors text-sm">Contact</Link></li>
              <li><Link to="/contact" className="text-slate-500 hover:text-sky-500 transition-colors text-sm">Request a Quote</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900">Our Services</h3>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link to={`/services/${service.id}`} className="text-slate-500 hover:text-sky-500 transition-colors text-sm">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-slate-900">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span className="text-slate-500 text-sm">123 Cleaning Ave, Suite 500<br />San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span className="text-slate-500 text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-sky-500 flex-shrink-0" />
                <span className="text-slate-500 text-sm">info@vengeancecleaning.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-sky-100 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-slate-400 text-xs">
            © 2026 Vengeance Cleaning Company. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-slate-400">
            <a href="#" className="hover:text-sky-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
