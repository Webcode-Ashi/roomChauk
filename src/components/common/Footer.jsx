import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin, Instagram, Twitter, Linkedin, Facebook, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gold-500/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold-500/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter bar */}
        <div className="border-b border-white/10 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Stay Updated</h3>
              <p className="text-white/50 text-sm">Get the latest premium listings delivered to your inbox.</p>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 md:w-72 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-gold-500 transition-colors"
              />
              <button className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 whitespace-nowrap">
                Subscribe <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
                <Home size={18} className="text-white" />
              </div>
              <span className="font-serif font-bold text-xl">
                Room <span className="gradient-text">Chauk</span>
              </span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              India's most trusted premium rental platform. Connecting quality tenants with exceptional rooms across 42+ cities.
            </p>
            <div className="flex gap-3">
              {[Instagram, Twitter, Linkedin, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gold-500 flex items-center justify-center transition-all hover:scale-110 border border-white/10 hover:border-gold-500"
                >
                  <Icon size={15} className="text-white/60 hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Home' },
                { to: '/properties', label: 'Browse Properties' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
                { to: '/login', label: 'Sign In' },
                { to: '/signup', label: 'List Your Room' },
              ].map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-white/40 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold-400 transition-all duration-300" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">Property Types</h4>
            <ul className="space-y-3">
              {['Luxury Apartments', 'Premium Villas', 'Studio Lofts', 'Penthouses', 'PG & Hostels', 'Commercial Spaces'].map(type => (
                <li key={type}>
                  <Link
                    to="/properties"
                    className="text-white/40 hover:text-gold-400 text-sm transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-gold-400 transition-all duration-300" />
                    {type}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm tracking-widest uppercase mb-6">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/40 text-sm">5th Floor, Tech Park, Banjara Hills, Hyderabad – 500034</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-400 flex-shrink-0" />
                <a href="tel:+918001234567" className="text-white/40 hover:text-gold-400 text-sm transition-colors">+91 800 123 4567</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={15} className="text-gold-400 flex-shrink-0" />
                <a href="mailto:hello@roomchauk.in" className="text-white/40 hover:text-gold-400 text-sm transition-colors">hello@roomchauk.in</a>
              </li>
            </ul>

           
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © 2024 Room Chauk. All rights reserved. Built with ❤️ in India.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map(item => (
              <a key={item} href="#" className="text-white/30 hover:text-white/60 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
