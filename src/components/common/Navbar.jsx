import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ChevronDown, User, LogOut, Heart, Settings } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [userMenu, setUserMenu] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setUserMenu(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/properties', label: 'Properties' },
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-100' 
        : 'bg-transparent'
    }`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-gold">
              <Home size={18} className="text-white" />
            </div>
            <div className="leading-none">
              <span className={`font-serif font-bold text-xl tracking-tight transition-colors ${scrolled ? 'text-dark-900' : 'text-white'}`}>
                Room
              </span>
              <span className="font-serif font-bold text-xl gradient-text"> Chauk</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-sm font-medium tracking-wide transition-colors ${
                  scrolled
                    ? isActive(link.to) ? 'text-gold-500' : 'text-dark-800 hover:text-gold-500'
                    : isActive(link.to) ? 'text-gold-400' : 'text-white/90 hover:text-white'
                } ${isActive(link.to) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA + User */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all ${
                scrolled ? 'text-dark-700 hover:text-gold-500' : 'text-white/90 hover:text-white'
              }`}
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="btn-gold text-sm font-semibold px-6 py-2.5 rounded-xl shadow-gold transition-all"
            >
              List Property
            </Link>

            {/* User dropdown (demo) */}
            <div className="relative">
              <button
                onClick={() => setUserMenu(!userMenu)}
                className={`flex items-center gap-1.5 text-sm font-medium px-3 py-2 rounded-xl transition-all ${
                  scrolled ? 'text-dark-700 hover:bg-gray-50' : 'text-white/90 hover:bg-white/10'
                }`}
              >
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center">
                  <User size={14} className="text-white" />
                </div>
                <ChevronDown size={12} />
              </button>

              {userMenu && (
                <div className="absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl shadow-premium border border-gray-100 py-2 z-50">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <p className="text-sm font-semibold text-dark-900">Rahul Sharma</p>
                    <p className="text-xs text-dark-400">rahul@email.com</p>
                  </div>
                  <Link to="/dashboard/user" className="flex items-center gap-3 px-4 py-2.5 text-sm text-dark-700 hover:bg-gray-50 hover:text-gold-600 transition-colors">
                    <User size={15} /> My Dashboard
                  </Link>
                  <Link to="/dashboard/owner" className="flex items-center gap-3 px-4 py-2.5 text-sm text-dark-700 hover:bg-gray-50 hover:text-gold-600 transition-colors">
                    <Heart size={15} /> Owner Panel
                  </Link>
                  <Link to="/dashboard/admin" className="flex items-center gap-3 px-4 py-2.5 text-sm text-dark-700 hover:bg-gray-50 hover:text-gold-600 transition-colors">
                    <Settings size={15} /> Admin Panel
                  </Link>
                  <div className="border-t border-gray-100 mt-1">
                    <button className="flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors">
                      <LogOut size={15} /> Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-colors ${
              scrolled ? 'text-dark-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/98 backdrop-blur-xl rounded-2xl shadow-premium mb-4 border border-gray-100 overflow-hidden">
            <div className="py-4 px-2">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                    isActive(link.to)
                      ? 'bg-gold-50 text-gold-600'
                      : 'text-dark-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 mt-3 pt-3 flex gap-2 px-2">
                <Link to="/login" className="flex-1 text-center py-2.5 text-sm font-medium text-dark-700 border border-gray-200 rounded-xl hover:border-gold-400 transition-colors">
                  Sign In
                </Link>
                <Link to="/signup" className="flex-1 text-center py-2.5 text-sm font-semibold btn-gold rounded-xl">
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
