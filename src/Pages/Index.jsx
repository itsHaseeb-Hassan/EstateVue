import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Shield, Clock, TrendingUp, ArrowRight } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { properties } from '../constant/data';

const stats = [
  { label: 'Properties Listed', value: '500+' },
  { label: 'Happy Clients', value: '1,200+' },
  { label: 'Cities Covered', value: '25+' },
  { label: 'Years Experience', value: '10+' },
];

const features = [
  { icon: Shield, title: 'Trusted Agents', desc: 'Verified professionals you can rely on' },
  { icon: Search, title: 'Easy Search', desc: 'Find your perfect property in seconds' },
  { icon: Clock, title: 'Fast Process', desc: 'Streamlined from search to closing' },
  { icon: TrendingUp, title: 'Best Value', desc: 'Market insights for smart decisions' },
];

const Index = () => {
  const [searchLocation, setSearchLocation] = useState('');
  const featured = properties.filter(p => p.featured).slice(0, 6);

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920&h=1080&fit=crop)' }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="mb-4 text-4xl font-bold leading-tight text-white md:text-6xl">
            Find Your Dream Home
          </h1>
          <p className="mb-8 text-lg text-white/80 md:text-xl">
            Browse thousands of properties — houses, apartments, and plots
          </p>
          <div className="mx-auto flex max-w-3xl flex-col gap-3 rounded-xl bg-white p-4 shadow-lg sm:flex-row">
            <input
              type="text"
              placeholder="Search by location..."
              value={searchLocation}
              onChange={e => setSearchLocation(e.target.value)}
              className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-40">
              <option value="">Type</option>
              <option value="House">House</option>
              <option value="Apartment">Apartment</option>
              <option value="Plot">Plot</option>
            </select>
            <select className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-44">
              <option value="">Price Range</option>
              <option value="0-300000">Under $300K</option>
              <option value="300000-600000">$300K – $600K</option>
              <option value="600000-1000000">$600K – $1M</option>
              <option value="1000000+">$1M+</option>
            </select>
            <Link
              to="/listings"
              className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              <Search className="mr-2 h-4 w-4" /> Search
            </Link>
          </div>
        </div>
      </section>

      {/* Featured */}
      <section className="container mx-auto px-4 py-20">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            <p className="mt-2 text-gray-600">Hand-picked properties just for you</p>
          </div>
          <Link
            to="/listings"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            View All <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map(p => <PropertyCard key={p.id} property={p} />)}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">Why Choose Us</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map(f => (
              <div key={f.title} className="rounded-xl bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100">
                  <f.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="mb-2 font-semibold text-gray-900">{f.title}</h3>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map(s => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-yellow-600 md:text-4xl">{s.value}</p>
              <p className="mt-1 text-sm text-gray-600">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white">Ready to Find Your Dream Home?</h2>
          <p className="mb-8 text-white/80">Let our experts guide you through the journey</p>
          <Link
            to="/listings"
            className="inline-flex items-center justify-center rounded-md bg-yellow-500 px-6 py-3 text-base font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Browse Properties
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;