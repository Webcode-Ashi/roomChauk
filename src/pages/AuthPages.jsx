import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Home, Eye, EyeOff, Mail, Lock, ArrowRight, CheckCircle } from 'lucide-react';

function AuthLayout({ children, image, side }) {
  return (
    <div className="min-h-screen flex">
      {/* Left side - form */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-md">
          <Link to="/" className="flex items-center gap-2 mb-10">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center shadow-gold">
              <Home size={18} className="text-white" />
            </div>
            <span className="font-serif font-bold text-xl">
              Room <span className="gradient-text">Chauk</span>
            </span>
          </Link>
          {children}
        </div>
      </div>
      {/* Right side - image */}
      <div className="hidden lg:block lg:w-5/12 relative overflow-hidden">
        <img src={image} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/40 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 text-white">
          <blockquote className="font-serif text-2xl font-bold mb-3 leading-tight">
            {side.quote}
          </blockquote>
          <p className="text-white/60 text-sm">{side.author}</p>
        </div>
      </div>
    </div>
  );
}

export function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard/user');
  };

  return (
    <AuthLayout
      image="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=900&q=90"
      side={{
        quote: '"Room Chauk found me the perfect apartment in Bangalore within a week."',
        author: '— Arjun Kapoor, Software Engineer'
      }}
    >
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-dark-900 mb-2">Welcome Back</h1>
        <p className="text-dark-400 text-sm">Sign in to access your Room Chauk account.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Email Address</label>
          <div className="relative">
            <Mail size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-300" />
            <input
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
              className="w-full premium-input rounded-xl pl-10 pr-4 py-3 text-sm"
            />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider">Password</label>
            <a href="#" className="text-xs text-gold-600 hover:text-gold-700 font-medium">Forgot password?</a>
          </div>
          <div className="relative">
            <Lock size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-300" />
            <input
              type={showPass ? 'text' : 'password'}
              placeholder="••••••••"
              value={form.password}
              onChange={e => setForm({ ...form, password: e.target.value })}
              required
              className="w-full premium-input rounded-xl pl-10 pr-10 py-3 text-sm"
            />
            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-300 hover:text-dark-600">
              {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </div>
        </div>

        <button type="submit" className="w-full btn-gold py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 mt-2">
          Sign In <ArrowRight size={15} />
        </button>

        <div className="relative my-5">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-gray-200" /></div>
          <div className="relative flex justify-center"><span className="px-4 text-xs text-dark-400 bg-white">or continue as</span></div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            { label: 'User Demo', to: '/dashboard/user', color: 'border-blue-200 text-blue-700 hover:bg-blue-50' },
            { label: 'Admin Demo', to: '/dashboard/admin', color: 'border-purple-200 text-purple-700 hover:bg-purple-50' },
          ].map(({ label, to, color }) => (
            <Link key={label} to={to} className={`py-3 rounded-xl text-sm font-medium border text-center transition-colors ${color}`}>
              {label}
            </Link>
          ))}
        </div>
      </form>

      <p className="mt-8 text-center text-sm text-dark-400">
        Don't have an account?{' '}
        <Link to="/signup" className="text-gold-600 hover:text-gold-700 font-semibold">Create one free</Link>
      </p>
    </AuthLayout>
  );
}

export function SignupPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', role: 'tenant' });
  const [showPass, setShowPass] = useState(false);
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard/user');
  };

  return (
    <AuthLayout
      image="https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=900&q=90"
      side={{
        quote: '"As a property owner, Room Chauk gave me amazing visibility and quality tenants."',
        author: '— Meera Iyer, Property Owner'
      }}
    >
      <div className="mb-8">
        <h1 className="font-serif text-3xl font-bold text-dark-900 mb-2">Create Account</h1>
        <p className="text-dark-400 text-sm">Join thousands of happy renters and owners on Room Chauk.</p>
      </div>

      {/* Role toggle */}
      <div className="flex bg-gray-100 rounded-xl p-1 mb-7">
        {[
          { value: 'tenant', label: 'I\'m a Tenant' },
          { value: 'owner', label: 'I\'m an Owner' },
        ].map(opt => (
          <button
            key={opt.value}
            onClick={() => setForm({ ...form, role: opt.value })}
            className={`flex-1 py-2.5 rounded-xl text-sm font-semibold transition-all ${
              form.role === opt.value
                ? 'bg-white shadow-sm text-dark-900'
                : 'text-dark-400 hover:text-dark-600'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-2">
            <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Full Name</label>
            <input
              type="text"
              placeholder="Rahul Sharma"
              value={form.name}
              onChange={e => setForm({ ...form, name: e.target.value })}
              required
              className="w-full premium-input rounded-xl px-4 py-3 text-sm"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Email</label>
            <input
              type="email"
              placeholder="you@email.com"
              value={form.email}
              onChange={e => setForm({ ...form, email: e.target.value })}
              required
              className="w-full premium-input rounded-xl px-4 py-3 text-sm"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Phone</label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={form.phone}
              onChange={e => setForm({ ...form, phone: e.target.value })}
              className="w-full premium-input rounded-xl px-4 py-3 text-sm"
            />
          </div>
          <div className="col-span-2">
            <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Password</label>
            <div className="relative">
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Create a strong password"
                value={form.password}
                onChange={e => setForm({ ...form, password: e.target.value })}
                required
                className="w-full premium-input rounded-xl px-4 pr-10 py-3 text-sm"
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-4 top-1/2 -translate-y-1/2 text-dark-300 hover:text-dark-600">
                {showPass ? <EyeOff size={15} /> : <Eye size={15} />}
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input type="checkbox" id="terms" required className="mt-1 accent-gold-500" />
          <label htmlFor="terms" className="text-xs text-dark-500 leading-relaxed">
            I agree to Room Chauk's{' '}
            <a href="#" className="text-gold-600 font-medium hover:underline">Terms of Service</a> and{' '}
            <a href="#" className="text-gold-600 font-medium hover:underline">Privacy Policy</a>
          </label>
        </div>

        <button type="submit" className="w-full btn-gold py-3.5 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 mt-2">
          Create Account <ArrowRight size={15} />
        </button>
      </form>

      {/* Benefits */}
      <div className="mt-6 p-4 bg-cream rounded-xl border border-gray-100">
        <p className="text-xs font-semibold text-dark-500 uppercase tracking-wider mb-2">What you get:</p>
        <div className="space-y-1.5">
          {['Free account forever', 'Access to 15,000+ verified listings', 'Direct owner contact', 'Bookmark your favorites'].map(b => (
            <div key={b} className="flex items-center gap-2">
              <CheckCircle size={12} className="text-gold-500" />
              <span className="text-xs text-dark-500">{b}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-5 text-center text-sm text-dark-400">
        Already have an account?{' '}
        <Link to="/login" className="text-gold-600 hover:text-gold-700 font-semibold">Sign in</Link>
      </p>
    </AuthLayout>
  );
}
