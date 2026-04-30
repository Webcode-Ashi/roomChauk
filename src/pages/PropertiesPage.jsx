import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, MapPin, X, ChevronDown, Grid3X3, List } from 'lucide-react';
import PropertyCard from '../components/common/PropertyCard';
import SectionHeader from '../components/common/SectionHeader';
import { properties } from '../data/mockData';

export default function PropertiesPage() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [type, setType] = useState(searchParams.get('type') || 'All');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');

  const propertyTypes = ['All', 'Sector A', 'Sector B', 'Sector J', 'Aliganj', 'Sector C'];

  const filtered = useMemo(() => {
    let list = [...properties];
    if (search) list = list.filter(p => p.title.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase()));
    if (type !== 'All') list = list.filter(p => p.type === type || p.category === type);
    if (minPrice) list = list.filter(p => p.price >= Number(minPrice));
    if (maxPrice) list = list.filter(p => p.price <= Number(maxPrice));
    if (sortBy === 'price-asc') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'price-desc') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'rating') list.sort((a, b) => b.rating - a.rating);
    if (sortBy === 'newest') list.sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
    return list;
  }, [search, type, minPrice, maxPrice, sortBy]);

  const clearFilters = () => {
    setSearch(''); setType('All'); setMinPrice(''); setMaxPrice(''); setSortBy('default');
  };

  const hasFilters = search || type !== 'All' || minPrice || maxPrice;

  return (
    <main className="min-h-screen bg-cream pt-20">
      {/* Header */}
      <section className="bg-dark-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.08),transparent_70%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag mb-4 inline-block">Browse Rooms</span>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-3">
            Discover Your <span className="gradient-text italic">Dream Space</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl mx-auto">
            {filtered.length} curated Rooms across India's finest locations
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Filter bar */}
        <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-4 mb-8">
          <div className="flex flex-col lg:flex-row gap-3">
            {/* Search input */}
            <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
              <Search size={16} className="text-gold-500 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by city, locality, property name..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-dark-900 placeholder-dark-400 text-sm outline-none"
              />
              {search && <button onClick={() => setSearch('')}><X size={14} className="text-dark-400 hover:text-dark-600" /></button>}
            </div>

            {/* Type filter */}
            <div className="flex gap-2 overflow-x-auto scrollbar-hide">
              {propertyTypes.map(t => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-all ${
                    type === t
                      ? 'bg-gold-500 text-dark-900 shadow-gold font-semibold'
                      : 'bg-gray-50 text-dark-500 hover:bg-gray-100'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {/* Advanced filters toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                showFilters ? 'bg-dark-900 text-white border-dark-900' : 'border-gray-200 text-dark-600 hover:border-gold-400'
              }`}
            >
              <SlidersHorizontal size={15} /> Filters
            </button>
          </div>

          {/* Advanced filters */}
          {showFilters && (
            <div className="border-t border-gray-100 mt-4 pt-4 flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Min Price (₹/month)</label>
                <input
                  type="number"
                  placeholder="e.g. 10000"
                  value={minPrice}
                  onChange={e => setMinPrice(e.target.value)}
                  className="w-full premium-input rounded-xl px-4 py-2.5 text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Max Price (₹/month)</label>
                <input
                  type="number"
                  placeholder="e.g. 100000"
                  value={maxPrice}
                  onChange={e => setMaxPrice(e.target.value)}
                  className="w-full premium-input rounded-xl px-4 py-2.5 text-sm"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Sort By</label>
                <select
                  value={sortBy}
                  onChange={e => setSortBy(e.target.value)}
                  className="w-full premium-input rounded-xl px-4 py-2.5 text-sm"
                >
                  <option value="default">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="newest">Newest First</option>
                </select>
              </div>
              {hasFilters && (
                <div className="flex items-end">
                  <button onClick={clearFilters} className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm text-red-500 border border-red-100 hover:bg-red-50 transition-colors">
                    <X size={14} /> Clear All
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Results header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-dark-900 font-semibold">
              <span className="gradient-text font-bold">{filtered.length}</span> rooms found
            </p>
            {hasFilters && <p className="text-dark-400 text-xs mt-0.5">Filters applied</p>}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-gold-100 text-gold-600' : 'text-dark-400 hover:text-dark-600'}`}
            >
              <Grid3X3 size={16} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-gold-100 text-gold-600' : 'text-dark-400 hover:text-dark-600'}`}
            >
              <List size={16} />
            </button>
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid'
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1 lg:grid-cols-2'
          }`}>
            {filtered.map(p => (
              <PropertyCard key={p.id} property={p} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <Search size={32} className="text-dark-300" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-dark-900 mb-2">No properties found</h3>
            <p className="text-dark-400 text-sm mb-6">Try adjusting your search or filters.</p>
            <button onClick={clearFilters} className="btn-gold px-6 py-3 rounded-xl font-semibold text-sm">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
