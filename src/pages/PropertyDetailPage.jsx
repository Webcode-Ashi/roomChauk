import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  MapPin, Bed, Bath, Square, Star, CheckCircle, Heart, Share2,
  Phone, Mail, ArrowLeft, Shield, Calendar, ChevronLeft, ChevronRight, Send
} from 'lucide-react';
import { properties } from '../data/mockData';
import PropertyCard from '../components/common/PropertyCard';

export default function PropertyDetailPage() {
  const { id } = useParams();
  const property = properties.find(p => p.id === Number(id)) || properties[0];
  const [activeImg, setActiveImg] = useState(0);
  const [liked, setLiked] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: `Hi, I'm interested in "${property.title}". Please get in touch.` });
  const [sent, setSent] = useState(false);

  const related = properties.filter(p => p.id !== property.id).slice(0, 3);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <main className="min-h-screen bg-cream pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-dark-400">
            <Link to="/" className="hover:text-gold-600 transition-colors">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-gold-600 transition-colors">Properties</Link>
            <span>/</span>
            <span className="text-dark-700 line-clamp-1">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left: Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100">
              <div className="relative h-80 md:h-96">
                <img
                  src={property.images[activeImg]}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
                {/* Nav arrows */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={() => setActiveImg(p => (p - 1 + property.images.length) % property.images.length)}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={18} className="text-dark-700" />
                    </button>
                    <button
                      onClick={() => setActiveImg(p => (p + 1) % property.images.length)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors"
                    >
                      <ChevronRight size={18} className="text-dark-700" />
                    </button>
                  </>
                )}
                {/* Badges */}
                <div className="absolute top-4 left-4 flex gap-2">
                  {property.featured && <span className="badge-premium">Featured</span>}
                  {property.verified && (
                    <span className="flex items-center gap-1 bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded-lg">
                      <CheckCircle size={11} /> Verified
                    </span>
                  )}
                </div>
                {/* Actions */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <button
                    onClick={() => setLiked(!liked)}
                    className={`w-9 h-9 rounded-full flex items-center justify-center shadow-lg transition-all ${liked ? 'bg-red-500 text-white' : 'bg-white/90 text-dark-500 hover:bg-white'}`}
                  >
                    <Heart size={15} fill={liked ? 'currentColor' : 'none'} />
                  </button>
                  <button className="w-9 h-9 rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:bg-white text-dark-500 transition-colors">
                    <Share2 size={15} />
                  </button>
                </div>
                {/* Image count */}
                <div className="absolute bottom-4 right-4 glass rounded-lg px-3 py-1 text-white text-xs font-medium">
                  {activeImg + 1} / {property.images.length}
                </div>
              </div>
              {/* Thumbnails */}
              {property.images.length > 1 && (
                <div className="flex gap-2 p-3">
                  {property.images.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImg(i)}
                      className={`w-20 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${activeImg === i ? 'border-gold-500' : 'border-transparent hover:border-gray-300'}`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-2xl p-7 shadow-md border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-5">
                <div>
                  <span className="tag mb-2 inline-block">{property.type}</span>
                  <h1 className="font-serif text-3xl font-bold text-dark-900 leading-tight">{property.title}</h1>
                  <div className="flex items-center gap-2 text-dark-400 mt-2">
                    <MapPin size={14} className="text-gold-500" />
                    <span className="text-sm">{property.location}</span>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-serif text-3xl font-bold text-dark-900">₹{property.price.toLocaleString()}</p>
                  <p className="text-dark-400 text-sm">per {property.priceUnit}</p>
                  <div className="flex items-center gap-1 justify-end mt-1">
                    <Star size={13} className="text-amber-400" fill="currentColor" />
                    <span className="text-sm font-semibold text-dark-700">{property.rating}</span>
                    <span className="text-xs text-dark-400">({property.reviews} reviews)</span>
                  </div>
                </div>
              </div>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-4 py-5 border-t border-b border-gray-100 mb-5">
                {[
                  { icon: Bed, label: 'Bedrooms', value: property.beds },
                  { icon: Bath, label: 'Bathrooms', value: property.baths },
                  { icon: Square, label: 'Area (sq.ft)', value: property.area },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="text-center p-3 bg-cream rounded-xl">
                    <Icon size={20} className="text-gold-500 mx-auto mb-2" />
                    <p className="font-bold text-dark-900 text-lg">{value}</p>
                    <p className="text-dark-400 text-xs">{label}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h3 className="font-serif font-semibold text-dark-900 text-lg mb-3">About this Property</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{property.description}</p>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl p-7 shadow-md border border-gray-100">
              <h3 className="font-serif font-semibold text-dark-900 text-xl mb-5">Amenities & Features</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {property.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-3 p-3 bg-cream rounded-xl">
                    <CheckCircle size={15} className="text-gold-500 flex-shrink-0" />
                    <span className="text-sm text-dark-700 font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div className="space-y-6">
            {/* Owner Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 sticky top-24">
              <div className="flex items-center gap-1 text-xs text-emerald-600 font-semibold mb-4 bg-emerald-50 px-3 py-1.5 rounded-lg w-fit">
                <Shield size={12} /> Verified Owner
              </div>
              <div className="flex items-center gap-4 mb-5 pb-5 border-b border-gray-100">
                <img src={property.owner.avatar} alt={property.owner.name} className="w-14 h-14 rounded-full object-cover ring-2 ring-gold-200" />
                <div>
                  <p className="font-serif font-bold text-dark-900">{property.owner.name}</p>
                  <p className="text-dark-400 text-xs">Property Owner</p>
                  <div className="flex items-center gap-1 mt-1">
                    <Star size={11} className="text-amber-400" fill="currentColor" />
                    <span className="text-xs text-dark-600 font-medium">4.9 · 32 listings</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3 mb-5">
                <a href={`tel:${property.owner.phone}`} className="flex items-center gap-3 p-3 bg-cream rounded-xl hover:bg-gold-50 transition-colors">
                  <Phone size={15} className="text-gold-500" />
                  <span className="text-sm text-dark-700">{property.owner.phone}</span>
                </a>
                <a href={`mailto:${property.owner.email}`} className="flex items-center gap-3 p-3 bg-cream rounded-xl hover:bg-gold-50 transition-colors">
                  <Mail size={15} className="text-gold-500" />
                  <span className="text-sm text-dark-700">{property.owner.email}</span>
                </a>
              </div>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <h4 className="font-semibold text-dark-900 text-sm mb-3">Send Enquiry</h4>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full premium-input rounded-xl px-4 py-2.5 text-sm"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full premium-input rounded-xl px-4 py-2.5 text-sm"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={e => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full premium-input rounded-xl px-4 py-2.5 text-sm"
                />
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full premium-input rounded-xl px-4 py-2.5 text-sm resize-none"
                />
                <button
                  type="submit"
                  className={`w-full py-3 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                    sent ? 'bg-emerald-500 text-white' : 'btn-gold'
                  }`}
                >
                  {sent ? <><CheckCircle size={15} /> Message Sent!</> : <><Send size={15} /> Send Message</>}
                </button>
              </form>

              <div className="mt-4 p-3 bg-cream rounded-xl flex items-center gap-2">
                <Calendar size={14} className="text-gold-500" />
                <span className="text-xs text-dark-500">Posted: {new Date(property.postedDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Properties */}
        <div className="mt-16">
          <h2 className="font-serif text-3xl font-bold text-dark-900 mb-8">
            Similar <span className="gradient-text italic">Properties</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {related.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
