import { useState } from 'react';
import { Link, useLocation, Outlet } from 'react-router-dom';
import {
  Home, User, Heart, Bell, Settings, LogOut, BarChart2,
  Building2, Users, FileText, Plus, Menu, X, ChevronRight,
  MapPin, Bed, Bath, Star, CheckCircle, Clock, Trash2, Edit,
  TrendingUp, DollarSign, Eye, MessageSquare
} from 'lucide-react';
import { savedProperties, bookingRequests, properties, adminStats } from '../data/mockData';
import PropertyCard from '../components/common/PropertyCard';

// ─────────────────────────────────────────────────────────
// SHARED DASHBOARD LAYOUT
// ─────────────────────────────────────────────────────────
function DashboardLayout({ navItems, title, role, children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-dark-900 flex flex-col transition-transform duration-300 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        {/* Logo */}
        <div className="p-6 border-b border-white/10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
              <Home size={16} className="text-white" />
            </div>
            <span className="font-serif font-bold text-white">Room <span className="gradient-text">Chauk</span></span>
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 flex items-center justify-center">
              <User size={18} className="text-gold-400" />
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Rahul Sharma</p>
              <p className="text-white/40 text-xs capitalize">{role}</p>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          <p className="text-white/30 text-xs font-semibold uppercase tracking-wider px-3 mb-3">Navigation</p>
          {navItems.map(item => {
            const active = location.pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setSidebarOpen(false)}
                className={`sidebar-link flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all ${
                  active
                    ? 'bg-gold-500/15 text-gold-400 border-l-gold-400'
                    : 'text-white/50 hover:text-white/80'
                }`}
              >
                <item.icon size={16} />
                {item.label}
                {item.badge && (
                  <span className="ml-auto bg-gold-500 text-dark-900 text-xs font-bold px-2 py-0.5 rounded-full">{item.badge}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <Link to="/" className="sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-white/40 hover:text-white/70 transition-all">
            <Home size={16} /> Back to Site
          </Link>
          <button className="sidebar-link flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-red-400/70 hover:text-red-400 transition-all mt-1">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* Overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Main content */}
      <div className="flex-1 lg:ml-64 flex flex-col min-h-screen">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-dark-500 hover:text-dark-800">
              <Menu size={20} />
            </button>
            <div>
              <h1 className="font-serif font-bold text-dark-900 text-lg">{title}</h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className="relative p-2 rounded-xl hover:bg-gray-100 text-dark-400 transition-colors">
              <Bell size={18} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <div className="w-9 h-9 rounded-xl bg-gold-100 flex items-center justify-center">
              <User size={16} className="text-gold-600" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-6">
          {children}
        </main>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// USER DASHBOARD
// ─────────────────────────────────────────────────────────
export function UserDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const navItems = [
    { to: '/dashboard/user', label: 'Overview', icon: BarChart2 },
    { to: '/dashboard/owner', label: 'Owner Panel', icon: Building2 },
    { to: '/dashboard/admin', label: 'Admin Panel', icon: Users },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'saved', label: 'Saved Properties' },
    { id: 'bookings', label: 'My Bookings' },
    { id: 'profile', label: 'Profile' },
  ];

  return (
    <DashboardLayout navItems={navItems} title="User Dashboard" role="tenant">
      {/* Tabs */}
      <div className="flex gap-2 mb-8 overflow-x-auto scrollbar-hide">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-gold-500 text-dark-900 shadow-gold'
                : 'bg-white text-dark-500 border border-gray-200 hover:border-gold-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Overview */}
      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Quick stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: Heart, label: 'Saved Properties', value: '2', color: 'bg-red-50 text-red-500' },
              { icon: MessageSquare, label: 'Active Enquiries', value: '3', color: 'bg-blue-50 text-blue-500' },
              { icon: CheckCircle, label: 'Confirmed Bookings', value: '1', color: 'bg-emerald-50 text-emerald-500' },
              { icon: Eye, label: 'Properties Viewed', value: '14', color: 'bg-purple-50 text-purple-500' },
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className={`w-10 h-10 rounded-xl ${s.color} flex items-center justify-center mb-3`}>
                  <s.icon size={18} />
                </div>
                <p className="font-serif text-3xl font-bold text-dark-900 mb-1">{s.value}</p>
                <p className="text-dark-400 text-xs uppercase tracking-wide">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Recent bookings preview */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100 flex items-center justify-between">
              <h3 className="font-serif font-bold text-dark-900">Recent Booking Requests</h3>
              <button onClick={() => setActiveTab('bookings')} className="text-gold-600 text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all">
                View All <ChevronRight size={13} />
              </button>
            </div>
            <div className="divide-y divide-gray-50">
              {bookingRequests.map(req => (
                <div key={req.id} className="flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors">
                  <img src={req.propertyImage} alt="" className="w-14 h-14 rounded-xl object-cover" />
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-dark-900 text-sm truncate">{req.propertyTitle}</p>
                    <p className="text-dark-400 text-xs flex items-center gap-1 mt-0.5">
                      <MapPin size={10} /> {req.propertyLocation}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${
                      req.status === 'Approved' ? 'bg-emerald-50 text-emerald-600' : 'bg-amber-50 text-amber-600'
                    }`}>
                      {req.status === 'Approved' ? <CheckCircle size={10} /> : <Clock size={10} />}
                      {req.status}
                    </span>
                    <p className="text-dark-400 text-xs mt-1">{req.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended for you */}
          <div>
            <h3 className="font-serif font-bold text-dark-900 text-xl mb-5">Recommended For You</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {properties.slice(0, 3).map(p => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>
        </div>
      )}

      {/* Saved Properties */}
      {activeTab === 'saved' && (
        <div>
          <h3 className="font-serif font-bold text-dark-900 text-xl mb-6">Saved Properties ({savedProperties.length})</h3>
          {savedProperties.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {savedProperties.map(p => <PropertyCard key={p.id} property={p} />)}
            </div>
          ) : (
            <div className="text-center py-20">
              <Heart size={48} className="text-gray-200 mx-auto mb-4" />
              <h4 className="font-serif text-xl font-bold text-dark-900 mb-2">No saved properties yet</h4>
              <p className="text-dark-400 text-sm mb-5">Start browsing and save properties you love.</p>
              <Link to="/properties" className="btn-gold px-6 py-3 rounded-xl text-sm font-semibold">Browse Properties</Link>
            </div>
          )}
        </div>
      )}

      {/* Bookings */}
      {activeTab === 'bookings' && (
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-dark-900 text-xl mb-6">My Booking Requests</h3>
          {bookingRequests.map(req => (
            <div key={req.id} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 flex flex-col sm:flex-row gap-5">
              <img src={req.propertyImage} alt="" className="w-full sm:w-28 h-28 rounded-xl object-cover" />
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                  <div>
                    <h4 className="font-serif font-bold text-dark-900">{req.propertyTitle}</h4>
                    <p className="text-dark-400 text-xs flex items-center gap-1 mt-1"><MapPin size={11} /> {req.propertyLocation}</p>
                  </div>
                  <span className={`self-start inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full ${
                    req.status === 'Approved' ? 'bg-emerald-50 text-emerald-600 border border-emerald-100' : 'bg-amber-50 text-amber-600 border border-amber-100'
                  }`}>
                    {req.status === 'Approved' ? <CheckCircle size={11} /> : <Clock size={11} />}
                    {req.status}
                  </span>
                </div>
                <p className="text-dark-500 text-sm mt-3 bg-gray-50 rounded-xl px-4 py-3 italic">"{req.message}"</p>
                <p className="text-dark-400 text-xs mt-2">Requested on {req.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Profile */}
      {activeTab === 'profile' && (
        <div className="max-w-2xl">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <div className="flex items-center gap-5 mb-8 pb-6 border-b border-gray-100">
              <div className="w-20 h-20 rounded-2xl bg-gold-100 flex items-center justify-center">
                <User size={32} className="text-gold-500" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-dark-900">Rahul Sharma</h3>
                <p className="text-dark-400 text-sm">Member since January 2024</p>
                <span className="mt-1 inline-flex items-center gap-1 text-xs font-semibold bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full">
                  <CheckCircle size={10} /> Verified Account
                </span>
              </div>
            </div>
            <div className="space-y-5">
              {[
                { label: 'Full Name', value: 'Rahul Sharma', type: 'text' },
                { label: 'Email Address', value: 'rahul@email.com', type: 'email' },
                { label: 'Phone Number', value: '+91 98765 43210', type: 'tel' },
                { label: 'City', value: 'Hyderabad', type: 'text' },
              ].map(field => (
                <div key={field.label}>
                  <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">{field.label}</label>
                  <input
                    type={field.type}
                    defaultValue={field.value}
                    className="w-full premium-input rounded-xl px-4 py-3 text-sm"
                  />
                </div>
              ))}
              <button className="btn-gold px-8 py-3 rounded-xl font-semibold text-sm mt-2">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}

// ─────────────────────────────────────────────────────────
// OWNER DASHBOARD
// ─────────────────────────────────────────────────────────
export function OwnerDashboard() {
  const [activeTab, setActiveTab] = useState('listings');
  const [showAddForm, setShowAddForm] = useState(false);

  const navItems = [
    { to: '/dashboard/user', label: 'User Panel', icon: User },
    { to: '/dashboard/owner', label: 'My Listings', icon: Building2 },
    { to: '/dashboard/admin', label: 'Admin Panel', icon: Users },
  ];

  const tabs = [
    { id: 'listings', label: 'My Listings' },
    { id: 'add', label: '+ Add Property' },
    { id: 'inquiries', label: 'Inquiries' },
  ];

  return (
    <DashboardLayout navItems={navItems} title="Owner Dashboard" role="property owner">
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-gold-500 text-dark-900 shadow-gold'
                : 'bg-white text-dark-500 border border-gray-200 hover:border-gold-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {[
          { label: 'Total Listings', value: '5', icon: Building2, color: 'bg-blue-50 text-blue-500' },
          { label: 'Active', value: '4', icon: CheckCircle, color: 'bg-emerald-50 text-emerald-500' },
          { label: 'Inquiries', value: '12', icon: MessageSquare, color: 'bg-amber-50 text-amber-500' },
          { label: 'Total Views', value: '248', icon: Eye, color: 'bg-purple-50 text-purple-500' },
        ].map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <div className={`w-9 h-9 rounded-xl ${s.color} flex items-center justify-center mb-3`}>
              <s.icon size={16} />
            </div>
            <p className="font-serif text-2xl font-bold text-dark-900">{s.value}</p>
            <p className="text-dark-400 text-xs">{s.label}</p>
          </div>
        ))}
      </div>

      {activeTab === 'listings' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-serif font-bold text-dark-900">My Properties</h3>
            <button onClick={() => setActiveTab('add')} className="btn-gold px-4 py-2 rounded-xl text-sm font-semibold flex items-center gap-1.5">
              <Plus size={14} /> Add New
            </button>
          </div>
          <div className="divide-y divide-gray-50">
            {properties.slice(0, 4).map(p => (
              <div key={p.id} className="flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors">
                <img src={p.images[0]} alt="" className="w-16 h-16 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-dark-900 text-sm truncate">{p.title}</p>
                  <p className="text-dark-400 text-xs flex items-center gap-1 mt-0.5"><MapPin size={10} />{p.location}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-gold-600 text-xs font-bold">₹{p.price.toLocaleString()}/mo</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${p.status === 'Available' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                      {p.status}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-xl hover:bg-blue-50 text-dark-400 hover:text-blue-500 transition-colors">
                    <Edit size={15} />
                  </button>
                  <button className="p-2 rounded-xl hover:bg-red-50 text-dark-400 hover:text-red-500 transition-colors">
                    <Trash2 size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'add' && (
        <div className="max-w-2xl">
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
            <h3 className="font-serif text-2xl font-bold text-dark-900 mb-6">Add New Property</h3>
            <div className="space-y-5">
              {[
                { label: 'Property Title', placeholder: 'e.g. Luxury 3BHK Apartment', type: 'text' },
                { label: 'Location / Address', placeholder: 'e.g. Banjara Hills, Hyderabad', type: 'text' },
                { label: 'Monthly Rent (₹)', placeholder: 'e.g. 45000', type: 'number' },
                { label: 'Property Area (sq.ft)', placeholder: 'e.g. 1800', type: 'number' },
              ].map(field => (
                <div key={field.label}>
                  <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} className="w-full premium-input rounded-xl px-4 py-3 text-sm" />
                </div>
              ))}
              <div className="grid grid-cols-3 gap-4">
                {['Bedrooms', 'Bathrooms', 'Type'].map(f => (
                  <div key={f}>
                    <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">{f}</label>
                    {f === 'Type' ? (
                      <select className="w-full premium-input rounded-xl px-4 py-3 text-sm">
                        {['Apartment', 'Villa', 'Studio', 'Penthouse'].map(t => <option key={t}>{t}</option>)}
                      </select>
                    ) : (
                      <input type="number" placeholder="0" min="0" className="w-full premium-input rounded-xl px-4 py-3 text-sm" />
                    )}
                  </div>
                ))}
              </div>
              <div>
                <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Description</label>
                <textarea rows={4} placeholder="Describe your property..." className="w-full premium-input rounded-xl px-4 py-3 text-sm resize-none" />
              </div>
              <div>
                <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Upload Images</label>
                <div className="border-2 border-dashed border-gray-200 hover:border-gold-400 rounded-xl p-8 text-center transition-colors cursor-pointer">
                  <Plus size={28} className="text-gray-300 mx-auto mb-2" />
                  <p className="text-dark-400 text-sm">Click to upload images</p>
                  <p className="text-dark-300 text-xs mt-1">PNG, JPG up to 10MB each</p>
                </div>
              </div>
              <button className="w-full btn-gold py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
                <Plus size={16} /> Publish Property
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'inquiries' && (
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-dark-900 text-xl mb-2">Tenant Inquiries</h3>
          {bookingRequests.map((req, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center">
                    <User size={18} className="text-dark-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900 text-sm">Rahul Sharma</p>
                    <p className="text-dark-400 text-xs">Inquiry for: {req.propertyTitle}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-emerald-50 text-emerald-600 text-xs font-semibold rounded-lg hover:bg-emerald-100 transition-colors">Accept</button>
                  <button className="px-3 py-1.5 bg-red-50 text-red-500 text-xs font-semibold rounded-lg hover:bg-red-100 transition-colors">Decline</button>
                </div>
              </div>
              <p className="text-dark-500 text-sm mt-3 bg-gray-50 rounded-xl px-4 py-3 italic">"{req.message}"</p>
              <p className="text-dark-400 text-xs mt-2">{req.date}</p>
            </div>
          ))}
        </div>
      )}
    </DashboardLayout>
  );
}

// ─────────────────────────────────────────────────────────
// ADMIN DASHBOARD
// ─────────────────────────────────────────────────────────
export function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const navItems = [
    { to: '/dashboard/user', label: 'User Panel', icon: User },
    { to: '/dashboard/owner', label: 'Owner Panel', icon: Building2 },
    { to: '/dashboard/admin', label: 'Admin Panel', icon: Users },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'users', label: 'Manage Users' },
    { id: 'listings', label: 'Manage Listings' },
  ];

  return (
    <DashboardLayout navItems={navItems} title="Admin Dashboard" role="administrator">
      <div className="flex gap-2 mb-8 overflow-x-auto">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold whitespace-nowrap transition-all ${
              activeTab === tab.id
                ? 'bg-dark-900 text-white'
                : 'bg-white text-dark-500 border border-gray-200 hover:border-dark-900'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === 'overview' && (
        <div className="space-y-8">
          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {adminStats.map((s, i) => (
              <div key={i} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-dark-400 text-xs uppercase tracking-wide">{s.label}</p>
                  <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                    s.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'
                  }`}>
                    {s.change}
                  </span>
                </div>
                <p className="font-serif text-3xl font-bold text-dark-900">{s.value}</p>
              </div>
            ))}
          </div>

          {/* Revenue chart placeholder */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
            <h3 className="font-serif font-bold text-dark-900 mb-5">Platform Growth</h3>
            <div className="flex items-end gap-3 h-32">
              {[40, 55, 45, 70, 60, 85, 75, 90, 80, 100, 90, 110].map((h, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-gold-500 to-gold-300 rounded-t-lg transition-all hover:from-gold-600 hover:to-gold-400"
                    style={{ height: `${h}%` }}
                  />
                  <span className="text-dark-300 text-xs">
                    {['J','F','M','A','M','J','J','A','S','O','N','D'][i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent activity */}
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-100">
              <h3 className="font-serif font-bold text-dark-900">Recent Activity</h3>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { text: 'New property listed: "Luxury 3BHK, Hyderabad"', time: '2 min ago', type: 'listing' },
                { text: 'New user registered: Priya Kapoor', time: '15 min ago', type: 'user' },
                { text: 'Booking request approved for Villa in Bangalore', time: '1 hr ago', type: 'booking' },
                { text: 'Property flagged for review: Powai Apartment', time: '3 hrs ago', type: 'flag' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
                  <div className={`w-2 h-2 rounded-full ${
                    item.type === 'listing' ? 'bg-blue-400' :
                    item.type === 'user' ? 'bg-emerald-400' :
                    item.type === 'booking' ? 'bg-gold-400' : 'bg-red-400'
                  }`} />
                  <p className="flex-1 text-sm text-dark-700">{item.text}</p>
                  <span className="text-xs text-dark-300 whitespace-nowrap">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeTab === 'users' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-serif font-bold text-dark-900">All Users ({11842})</h3>
            <input placeholder="Search users..." className="premium-input rounded-xl px-4 py-2 text-sm w-48" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  {['User', 'Email', 'Role', 'Status', 'Joined', 'Actions'].map(h => (
                    <th key={h} className="px-5 py-3 text-xs font-semibold text-dark-500 uppercase tracking-wider">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {[
                  { name: 'Rahul Sharma', email: 'rahul@email.com', role: 'Tenant', status: 'Active', joined: 'Jan 2024' },
                  { name: 'Priya Iyer', email: 'priya@email.com', role: 'Owner', status: 'Active', joined: 'Dec 2023' },
                  { name: 'Anil Mehta', email: 'anil@email.com', role: 'Owner', status: 'Active', joined: 'Nov 2023' },
                  { name: 'Kavita Joshi', email: 'kavita@email.com', role: 'Tenant', status: 'Suspended', joined: 'Jan 2024' },
                ].map((user, i) => (
                  <tr key={i} className="hover:bg-gray-50 transition-colors">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gold-100 flex items-center justify-center">
                          <User size={14} className="text-gold-600" />
                        </div>
                        <span className="text-sm font-medium text-dark-900">{user.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-sm text-dark-500">{user.email}</td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${user.role === 'Owner' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${user.status === 'Active' ? 'bg-emerald-50 text-emerald-600' : 'bg-red-50 text-red-500'}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-dark-400">{user.joined}</td>
                    <td className="px-5 py-4">
                      <div className="flex gap-2">
                        <button className="p-1.5 rounded-lg hover:bg-blue-50 text-dark-400 hover:text-blue-500 transition-colors"><Edit size={13} /></button>
                        <button className="p-1.5 rounded-lg hover:bg-red-50 text-dark-400 hover:text-red-500 transition-colors"><Trash2 size={13} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'listings' && (
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-5 border-b border-gray-100 flex items-center justify-between">
            <h3 className="font-serif font-bold text-dark-900">All Listings ({4291})</h3>
            <input placeholder="Search listings..." className="premium-input rounded-xl px-4 py-2 text-sm w-48" />
          </div>
          <div className="divide-y divide-gray-50">
            {properties.map(p => (
              <div key={p.id} className="flex items-center gap-4 p-5 hover:bg-gray-50 transition-colors">
                <img src={p.images[0]} alt="" className="w-14 h-14 rounded-xl object-cover" />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-dark-900 text-sm">{p.title}</p>
                  <p className="text-dark-400 text-xs mt-0.5">{p.location} · {p.type}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-gold-600 text-xs font-bold">₹{p.price.toLocaleString()}/mo</span>
                    {p.verified && <span className="flex items-center gap-1 text-xs text-emerald-600"><CheckCircle size={10} /> Verified</span>}
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="px-3 py-1.5 bg-amber-50 text-amber-600 text-xs font-semibold rounded-lg hover:bg-amber-100 transition-colors">Review</button>
                  <button className="p-1.5 rounded-lg hover:bg-red-50 text-dark-400 hover:text-red-500 transition-colors"><Trash2 size={13} /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </DashboardLayout>
  );
}
