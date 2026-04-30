import { Shield, Award, Users, TrendingUp, Heart, Linkedin, Twitter } from 'lucide-react';
import SectionHeader from '../components/common/SectionHeader';
import { stats, teamMembers } from '../data/mockData';

export default function AboutPage() {
  const values = [
    { icon: Shield, title: 'Trust & Transparency', desc: 'We verify every listing and every owner. You can rely on every detail you see on Room Chauk.' },
    { icon: Heart, title: 'Tenant First', desc: 'Our platform is designed around the tenant experience — ease, comfort, and confidence at every step.' },
    { icon: Award, title: 'Quality Standard', desc: 'Only premium, well-maintained properties are listed. We\'d never compromise on the quality of your next home.' },
    { icon: TrendingUp, title: 'Innovation', desc: 'Constantly improving our platform with cutting-edge technology to make your search smarter and faster.' },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative py-28 bg-dark-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1800&q=80"
            alt=""
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900/80 to-dark-900" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="tag mb-4 inline-block">Our Story</span>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-white mb-5 leading-tight">
            Redefining Rental<br /><span className="gradient-text italic">Living in Lucknow,India</span>
          </h1>
          <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
            Room Chauk was born from a simple belief: finding your perfect rental home should be as exciting as moving in. No stress, no fraud, no brokers.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-cream py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center bg-white rounded-2xl p-6 shadow-md border border-gray-100">
                <p className="font-serif text-4xl font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-dark-400 text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="tag mb-4 inline-block">Who We Are</span>
              <h2 className="font-serif text-4xl font-bold text-dark-900 mb-5">
                Building India's Most <span className="gradient-text italic">Trusted</span> Rental Platform
              </h2>
              <p className="text-dark-500 text-base leading-relaxed mb-5">
                Founded in 2022, Room Chauk set out to eliminate the pain points of renting in India. From fake listings to broker fraud, we tackled every challenge head-on to build a platform that renters and owners can genuinely trust.
              </p>
              <p className="text-dark-500 text-base leading-relaxed mb-8">
                Today, we're present across 42+ cities with over 15,000 verified listings, serving thousands of happy tenants every month. Our proprietary verification system ensures zero tolerance for fraudulent or misleading listings.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-5 bg-cream rounded-2xl border border-gray-100">
                  <p className="font-serif text-2xl font-bold gradient-text mb-1">2026</p>
                  <p className="text-dark-500 text-sm">Founded in Lucknow</p>
                </div>
                <div className="p-5 bg-cream rounded-2xl border border-gray-100">
                  <p className="font-serif text-2xl font-bold gradient-text mb-1">₹50Cr+</p>
                  <p className="text-dark-500 text-sm">Transactions Facilitated</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-96 shadow-premium">
                <img
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80"
                  alt="Team working"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-5 shadow-premium border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gold-100 rounded-xl flex items-center justify-center">
                    <Users size={18} className="text-gold-600" />
                  </div>
                  <div>
                    <p className="font-bold text-dark-900 text-sm">8,200+ Tenants</p>
                    <p className="text-dark-400 text-xs">Found their home with us</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20 bg-dark-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,169,110,0.06),transparent_70%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl border border-gold-500/20 bg-white/5">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5">
                <TrendingUp size={22} className="text-gold-400" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Our Mission</h3>
              <p className="text-white/50 leading-relaxed">
                To democratize premium rental living across India by creating a transparent, technology-driven platform that connects quality tenants with exceptional properties — eliminating fraud, brokers, and bad experiences forever.
              </p>
            </div>
            <div className="p-8 rounded-2xl border border-gold-500/20 bg-white/5">
              <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-5">
                <Award size={22} className="text-gold-400" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Our Vision</h3>
              <p className="text-white/50 leading-relaxed">
                To become India's most trusted real estate rental ecosystem, where every Indian can find their perfect home effortlessly — regardless of city, budget, or background. A world where renting feels as joyful as owning.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Our Values"
            title={<>What We <span className="gradient-text italic">Stand For</span></>}
            subtitle="These core principles guide every decision we make at Room Chauk."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 text-center group hover:border-gold-300 hover:shadow-gold transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gold-50 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold-500 transition-colors">
                  <v.icon size={24} className="text-gold-500 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-dark-900 text-lg mb-2">{v.title}</h3>
                <p className="text-dark-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            tag="Meet the Team"
            title={<>The People Behind <span className="gradient-text italic">Room Chauk</span></>}
            subtitle="A passionate team of builders, designers, and visionaries on a mission to revolutionize rental living."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map(member => (
              <div key={member.id} className="group text-center">
                <div className="relative mb-5 inline-block">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-28 h-28 rounded-2xl object-cover ring-4 ring-gold-100 group-hover:ring-gold-300 transition-all mx-auto"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex gap-1 bg-white rounded-xl shadow-md px-2 py-1">
                    <a href={member.linkedin} className="text-dark-400 hover:text-blue-600 transition-colors"><Linkedin size={13} /></a>
                    <a href={member.twitter} className="text-dark-400 hover:text-blue-400 transition-colors"><Twitter size={13} /></a>
                  </div>
                </div>
                <h3 className="font-serif font-bold text-dark-900 text-lg mt-4">{member.name}</h3>
                <p className="text-gold-600 text-xs font-semibold uppercase tracking-wider mb-2">{member.role}</p>
                <p className="text-dark-400 text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
