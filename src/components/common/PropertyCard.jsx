import { Link } from 'react-router-dom';
import { MapPin, Bed, Bath, Square, Heart, Star, CheckCircle, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

export default function PropertyCard({ property, featured = false }) {
  const [liked, setLiked] = useState(false);

  return (
    <div className={`property-card bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-premium border border-gray-100 group ${featured ? 'ring-1 ring-gold-300' : ''}`}>
      {/* Image */}
      <div className="relative overflow-hidden h-56">
        <img
          src={property.images[0]}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          loading="lazy"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          {featured && <span className="badge-premium">Featured</span>}
          {property.verified && (
            <span className="flex items-center gap-1 bg-emerald-500 text-white text-xs font-semibold px-2 py-1 rounded-lg">
              <CheckCircle size={10} /> Verified
            </span>
          )}
        </div>

        {/* Like button */}
        <button
          onClick={() => setLiked(!liked)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all shadow-md ${
            liked ? 'bg-red-500 text-white' : 'bg-white/90 text-dark-500 hover:bg-white'
          }`}
        >
          <Heart size={14} fill={liked ? 'currentColor' : 'none'} />
        </button>

        {/* Price tag */}
        <div className="absolute bottom-3 left-3 glass rounded-xl px-3 py-1.5 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <span className="text-white font-bold text-sm">₹{property.price.toLocaleString()}<span className="font-normal text-xs opacity-80">/{property.priceUnit}</span></span>
        </div>

        {/* View button */}
        <Link
          to={`/properties/${property.id}`}
          className="absolute bottom-3 right-3 w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-gold-600"
        >
          <ArrowUpRight size={14} className="text-white" />
        </Link>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="tag mb-2 inline-block">{property.type}</span>
            <h3 className="font-serif font-semibold text-dark-900 text-lg leading-tight line-clamp-1 group-hover:text-gold-600 transition-colors">
              {property.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-dark-400 mb-4">
          <MapPin size={13} className="text-gold-500 flex-shrink-0" />
          <span className="text-xs line-clamp-1">{property.location}</span>
        </div>

        {/* Specs */}
        <div className="flex items-center gap-4 py-3 border-t border-b border-gray-100 mb-4">
          <div className="flex items-center gap-1.5 text-dark-500 text-xs">
            <Bed size={13} className="text-gold-400" />
            <span>{property.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1.5 text-dark-500 text-xs">
            <Bath size={13} className="text-gold-400" />
            <span>{property.baths} Baths</span>
          </div>
          <div className="flex items-center gap-1.5 text-dark-500 text-xs">
            <Square size={13} className="text-gold-400" />
            <span>{property.area} sq.ft</span>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xl font-bold font-serif text-dark-900">
              ₹{property.price.toLocaleString()}
              <span className="text-sm font-normal text-dark-400">/{property.priceUnit}</span>
            </p>
          </div>
          <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1 rounded-lg">
            <Star size={12} className="text-amber-400" fill="currentColor" />
            <span className="text-xs font-semibold text-amber-700">{property.rating}</span>
            <span className="text-xs text-amber-500">({property.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
}
