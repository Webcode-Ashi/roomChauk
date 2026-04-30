import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Search, MapPin, ChevronRight, Star, Shield, Zap, Users,
  Building2, Home, Layers, ArrowRight, Play, CheckCircle,
  TrendingUp, Award, Phone, Quote
} from 'lucide-react';
import PropertyCard from '../components/common/PropertyCard';
import SectionHeader from '../components/common/SectionHeader';
import { properties, testimonials, categories, stats } from '../data/mockData';

// ────────────────────────────────────────────────────────────────────
// HERO
// ────────────────────────────────────────────────────────────────────
function HeroSection() {
  const [searchQuery, setSearchQuery] = useState('');
  const [propertyType, setPropertyType] = useState('All Types');
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);

  const heroImages = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=90',
    'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=1800&q=90',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1800&q=90',
  ];

  useEffect(() => {
    const t = setInterval(() => setActiveImage(p => (p + 1) % heroImages.length), 5000);
    return () => clearInterval(t);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/properties?search=${searchQuery}&type=${propertyType}`);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Slideshow */}
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-1500"
          style={{ opacity: activeImage === i ? 1 : 0 }}
        >
          <img src={img} alt="" className="w-full h-full object-cover scale-105" />
        </div>
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/20" />

      {/* Floating decorations */}
      <div className="absolute top-1/4 right-10 w-64 h-64 border border-gold-500/20 rounded-full animate-spin-slow hidden lg:block" />
      <div className="absolute top-1/3 right-24 w-32 h-32 border border-gold-500/30 rounded-full" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-gold-500/20 backdrop-blur-sm border border-gold-500/30 text-gold-300 text-xs font-semibold px-4 py-2 rounded-full mb-6 animate-fade-up">
            <span className="w-2 h-2 bg-gold-400 rounded-full animate-pulse" />
            India's Premium Rental Platform
          </div>

          {/* Heading */}
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fade-up" style={{ animationDelay: '0.1s' }}>
            Find Your{' '}
            <span className="gradient-text italic">Perfect</span>
            <br />Space to Live
          </h1>

          <p className="text-white/70 text-lg md:text-xl mb-10 leading-relaxed max-w-xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Discover curated luxury rentals across India's finest cities. From cozy studios to lavish penthouses — your dream home awaits.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-2 flex flex-col sm:flex-row gap-2 mb-8 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center gap-3 flex-1 bg-white rounded-xl px-4 py-3">
              <MapPin size={18} className="text-gold-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by city, locality..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="flex-1 text-dark-900 placeholder-dark-400 text-sm bg-transparent outline-none"
              />
            </div>
            <select
              value={propertyType}
              onChange={e => setPropertyType(e.target.value)}
              className="bg-white rounded-xl px-4 py-3 text-dark-700 text-sm outline-none cursor-pointer min-w-32"
            >
              {['All Types', 'Apartment', 'Villa', 'Studio', 'Penthouse', 'PG'].map(t => (
                <option key={t}>{t}</option>
              ))}
            </select>
            <button type="submit" className="btn-gold px-6 py-3 rounded-xl text-sm font-bold flex items-center gap-2 justify-center">
              <Search size={16} /> Search
            </button>
          </form>

          {/* Quick tags */}
          <div className="flex flex-wrap gap-2 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <span className="text-white/50 text-sm mr-1">Popular:</span>
            {['Hyderabad', 'Bangalore', 'Mumbai', 'Gurgaon', 'Pune'].map(city => (
              <button
                key={city}
                onClick={() => { setSearchQuery(city); navigate(`/properties?search=${city}`); }}
                className="text-xs text-white/70 hover:text-gold-400 bg-white/10 hover:bg-white/20 border border-white/20 px-3 py-1.5 rounded-full transition-all"
              >
                {city}
              </button>
            ))}
          </div>
        </div>

        {/* Stats floating cards */}
        <div className="hidden lg:flex items-end absolute right-8 bottom-8 gap-4">
          <div className="glass rounded-2xl p-4 text-center">
            <p className="font-serif text-2xl font-bold text-white">15K+</p>
            <p className="text-white/50 text-xs">Properties</p>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <p className="font-serif text-2xl font-bold text-white">8.2K+</p>
            <p className="text-white/50 text-xs">Happy Tenants</p>
          </div>
          <div className="glass rounded-2xl p-4 text-center">
            <p className="font-serif text-2xl font-bold text-white">42+</p>
            <p className="text-white/50 text-xs">Cities</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
// STATS BAND
// ────────────────────────────────────────────────────────────────────
function StatsBand() {
  return (
    <section className="bg-dark-900 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center">
              <p className="font-serif text-4xl font-bold gradient-text mb-1">{stat.value}</p>
              <p className="text-white/40 text-sm uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
// FEATURED PROPERTIES
// ────────────────────────────────────────────────────────────────────
function FeaturedProperties() {
  const featured = properties.filter(p => p.featured);

  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            tag="Hand-Picked Listings"
            title={<>Featured <span className="gradient-text italic">Properties</span></>}
            subtitle="Explore our most sought-after rental homes, verified and curated for the discerning tenant."
            center={false}
          />
          <Link to="/properties" className="flex items-center gap-2 text-gold-600 font-semibold text-sm hover:gap-3 transition-all mt-4 md:mt-0 whitespace-nowrap">
            View All <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map(p => (
            <PropertyCard key={p.id} property={p} featured />
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
// CATEGORIES
// ────────────────────────────────────────────────────────────────────
function CategoriesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Browse by Type"
          title={<>Explore <span className="gradient-text italic">Categories</span></>}
          subtitle="From cozy studios to sprawling villas — find the type of home that fits your lifestyle."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map(cat => (
            <Link
              key={cat.id}
              to={`/properties?type=${cat.name}`}
              className="group relative rounded-2xl overflow-hidden h-40 cursor-pointer"
            >
              <img src={cat.image} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-4 text-center">
                <p className="text-white font-semibold text-sm">{cat.name}</p>
                <p className="text-white/60 text-xs">{cat.count} listings</p>
              </div>
              <div className="absolute inset-0 border-2 border-gold-400/0 group-hover:border-gold-400/60 rounded-2xl transition-all duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
// WHY CHOOSE US
// ────────────────────────────────────────────────────────────────────
function WhyChooseUs() {
  const features = [
    { icon: Shield, title: "100% Verified Listings", desc: "Every property is physically verified by our expert team before listing. No fake or misleading listings." },
    { icon: Zap, title: "Instant Contact", desc: "Connect with property owners directly in real time. No brokers, no middlemen, no delays." },
    { icon: Award, title: "Premium Quality", desc: "Only the finest properties make it to our platform. We maintain strict quality standards." },
    { icon: TrendingUp, title: "Best Price Guarantee", desc: "Find the most competitive rental prices in your desired locations with our price tracking." },
    { icon: Users, title: "Trusted Community", desc: "Join 8,000+ verified tenants and 3,500+ trusted property owners on our platform." },
    { icon: Phone, title: "24/7 Support", desc: "Our dedicated support team is always available to help you with any queries or concerns." },
  ];

  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Why Room Chauk"
          title={<>Why <span className="gradient-text italic">Choose</span> Us</>}
          subtitle="We've redefined the rental experience with transparency, trust, and technology."
          light
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-gold-500/40 hover:bg-white/8 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors">
                <f.icon size={22} className="text-gold-400" />
              </div>
              <h3 className="font-serif font-semibold text-white text-lg mb-2">{f.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
// LATEST LISTINGS
// ────────────────────────────────────────────────────────────────────
function LatestListings() {
  return (
    <section className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <SectionHeader
            tag="Fresh on Market"
            title={<>Latest <span className="gradient-text italic">Listings</span></>}
            subtitle="Newly added properties — be the first to inquire."
            center={false}
          />
          <Link to="/properties" className="flex items-center gap-2 text-gold-600 font-semibold text-sm hover:gap-3 transition-all mt-4 md:mt-0 whitespace-nowrap">
            Browse All <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.slice(0, 6).map(p => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
// TESTIMONIALS
// ────────────────────────────────────────────────────────────────────
function TestimonialsSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          tag="Client Stories"
          title={<>What Our <span className="gradient-text italic">Clients</span> Say</>}
          subtitle="Real experiences from real tenants and property owners across India."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.slice(0, 4).map((t, i) => (
            <div key={t.id} className="p-7 rounded-2xl bg-cream border border-gray-100 hover:border-gold-200 hover:shadow-gold transition-all duration-300 group">
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400" fill="currentColor" />
                ))}
              </div>
              <Quote size={28} className="text-gold-300 mb-3" />
              <p className="text-dark-600 text-sm leading-relaxed mb-5 italic">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-gold-200" />
                <div>
                  <p className="font-semibold text-dark-900 text-sm">{t.name}</p>
                  <p className="text-dark-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
// CTA SECTION
// ────────────────────────────────────────────────────────────────────
function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1800&q=80"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-dark-900/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-900 via-dark-900/80 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="tag mb-4 inline-block">Own a Property?</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
            List Your Property,<br />
            <span className="gradient-text italic">Reach Thousands</span>
          </h2>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Join 3,500+ property owners who trust Room Chauk to find quality tenants. Get premium visibility, verified inquiries, and seamless management tools.
          </p>
          <ul className="space-y-3 mb-10">
            {['Free property listing for the first 30 days', 'Verified tenant inquiries only', 'Real-time booking & messaging dashboard', 'Dedicated owner support team'].map(item => (
              <li key={item} className="flex items-center gap-3 text-white/70 text-sm">
                <CheckCircle size={16} className="text-gold-400 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/signup" className="btn-gold px-8 py-4 rounded-xl font-semibold text-sm flex items-center gap-2 justify-center">
              List Your Property <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="px-8 py-4 rounded-xl font-semibold text-sm flex items-center gap-2 justify-center border border-white/20 text-white hover:bg-white/10 transition-colors">
              Talk to Us <Phone size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────────
// HOMEPAGE ASSEMBLY
// ────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsBand />
      <FeaturedProperties />
      <CategoriesSection />
      <WhyChooseUs />
      <LatestListings />
      <TestimonialsSection />
      <CTASection />
    </main>
  );
}
