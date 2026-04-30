import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => { setSent(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }); }, 4000);
  };

  const contactInfo = [
    { icon: MapPin, title: 'Our Office', detail: '5th Floor, Tech Park, Banjara Hills, Hyderabad – 500034, Telangana' },
    { icon: Phone, title: 'Call Us', detail: '+91 800 123 4567\n+91 800 765 4321' },
    { icon: Mail, title: 'Email Us', detail: 'hello@roomchauk.in\nsupport@roomchauk.in' },
    { icon: Clock, title: 'Working Hours', detail: 'Monday – Saturday\n9:00 AM – 8:00 PM IST' },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-dark-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.07),transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag mb-4 inline-block">Get In Touch</span>
          <h1 className="font-serif text-5xl font-bold text-white mb-4">
            We'd Love to <span className="gradient-text italic">Hear From You</span>
          </h1>
          <p className="text-white/50 text-lg">Have questions, feedback, or want to list your property? Our team is here to help.</p>
        </div>
      </section>

      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Left Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="font-serif text-3xl font-bold text-dark-900 mb-2">Contact Information</h2>
                <p className="text-dark-400 text-sm leading-relaxed">We typically respond to all inquiries within 24 business hours.</p>
              </div>
              {contactInfo.map((info, i) => (
                <div key={i} className="flex gap-4 p-5 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <div className="w-11 h-11 rounded-xl bg-gold-50 flex items-center justify-center flex-shrink-0">
                    <info.icon size={18} className="text-gold-500" />
                  </div>
                  <div>
                    <p className="font-semibold text-dark-900 text-sm mb-1">{info.title}</p>
                    <p className="text-dark-400 text-sm whitespace-pre-line leading-relaxed">{info.detail}</p>
                  </div>
                </div>
              ))}

              {/* Map Placeholder */}
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm h-48 relative">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&q=80"
                  alt="Map"
                  className="w-full h-full object-cover opacity-50"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-xl px-4 py-2 shadow-lg flex items-center gap-2">
                    <MapPin size={15} className="text-gold-500" />
                    <span className="text-sm font-semibold text-dark-900">Banjara Hills, Hyderabad</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 shadow-premium border border-gray-100">
                <h2 className="font-serif text-2xl font-bold text-dark-900 mb-1">Send us a Message</h2>
                <p className="text-dark-400 text-sm mb-7">Fill in the form below and we'll get back to you shortly.</p>

                {sent ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={36} className="text-emerald-500" />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-dark-900 mb-2">Message Sent!</h3>
                    <p className="text-dark-400 text-sm">Thank you for reaching out. We'll respond within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Full Name *</label>
                        <input
                          type="text"
                          placeholder="Rahul Sharma"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          required
                          className="w-full premium-input rounded-xl px-4 py-3 text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Email Address *</label>
                        <input
                          type="email"
                          placeholder="rahul@email.com"
                          value={form.email}
                          onChange={e => setForm({ ...form, email: e.target.value })}
                          required
                          className="w-full premium-input rounded-xl px-4 py-3 text-sm"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Phone Number</label>
                        <input
                          type="tel"
                          placeholder="+91 98765 43210"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          className="w-full premium-input rounded-xl px-4 py-3 text-sm"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Subject *</label>
                        <select
                          value={form.subject}
                          onChange={e => setForm({ ...form, subject: e.target.value })}
                          required
                          className="w-full premium-input rounded-xl px-4 py-3 text-sm"
                        >
                          <option value="">Select a topic</option>
                          <option>General Enquiry</option>
                          <option>List My Property</option>
                          <option>Tenant Support</option>
                          <option>Owner Support</option>
                          <option>Report an Issue</option>
                          <option>Partnership</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="text-xs font-semibold text-dark-500 uppercase tracking-wider block mb-2">Message *</label>
                      <textarea
                        rows={5}
                        placeholder="Tell us how we can help you..."
                        value={form.message}
                        onChange={e => setForm({ ...form, message: e.target.value })}
                        required
                        className="w-full premium-input rounded-xl px-4 py-3 text-sm resize-none"
                      />
                    </div>
                    <button type="submit" className="w-full btn-gold py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2">
                      <Send size={16} /> Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
