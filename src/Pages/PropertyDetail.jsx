import { useParams, Link } from 'react-router-dom';
import { Bed, Bath, Maximize, Calendar, Home, MapPin, ArrowLeft, Phone, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { properties, agents } from '../constant/data';
import { useState } from 'react';

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);
  const [selectedImg, setSelectedImg] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Property not found</h1>
          <Link 
            to="/listings" 
            className="mt-4 inline-block rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600"
          >
            Back to Listings
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const agent = agents.find(a => a.id === property.agentId);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <Link 
          to="/listings" 
          className="mb-4 inline-flex items-center text-sm text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Listings
        </Link>

        {/* Image Gallery */}
        <div className="mb-8 grid gap-4 lg:grid-cols-[1fr_300px]">
          <div className="aspect-[16/10] overflow-hidden rounded-xl">
            <img src={property.images[selectedImg]} alt={property.title} className="h-full w-full object-cover" />
          </div>
          <div className="flex gap-2 lg:flex-col">
            {property.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImg(i)}
                className={`aspect-[4/3] flex-1 overflow-hidden rounded-lg border-2 transition-colors ${
                  selectedImg === i ? 'border-yellow-500' : 'border-transparent'
                }`}
              >
                <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_350px]">
          {/* Main Info */}
          <div>
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-yellow-100 px-3 py-1 text-xs font-medium text-yellow-800">
                {property.type}
              </span>
              <span className="flex items-center gap-1 text-sm text-gray-600">
                <MapPin className="h-3.5 w-3.5" /> {property.address}
              </span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
            <p className="mt-1 text-3xl font-bold text-yellow-600">${property.price.toLocaleString()}</p>

            {/* Key Details */}
            {property.type !== 'Plot' && (
              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { icon: Bed, label: 'Bedrooms', value: property.bedrooms },
                  { icon: Bath, label: 'Bathrooms', value: property.bathrooms },
                  { icon: Maximize, label: 'Area', value: `${property.area} ft²` },
                  { icon: Calendar, label: 'Year Built', value: property.yearBuilt },
                ].map(d => (
                  <div key={d.label} className="rounded-lg border border-gray-200 p-4 text-center">
                    <d.icon className="mx-auto mb-2 h-5 w-5 text-gray-500" />
                    <p className="text-lg font-semibold text-gray-900">{d.value}</p>
                    <p className="text-xs text-gray-600">{d.label}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-8">
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Description</h2>
              <p className="leading-relaxed text-gray-600">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Amenities</h2>
              <div className="flex flex-wrap gap-2">
                {property.amenities.map(a => (
                  <span key={a} className="rounded-full border border-gray-300 px-3 py-1 text-xs text-gray-700">
                    {a}
                  </span>
                ))}
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-semibold text-gray-900">Location</h2>
              <div className="flex h-64 items-center justify-center rounded-xl bg-gray-100">
                <p className="text-gray-600">Map view coming soon</p>
              </div>
            </div>
          </div>

          {/* Agent Card */}
          <div className="h-fit rounded-xl border border-gray-200 p-6">
            {agent && (
              <div className="mb-6 text-center">
                <img src={agent.photo} alt={agent.name} className="mx-auto mb-3 h-20 w-20 rounded-full object-cover" />
                <h3 className="font-semibold text-gray-900">{agent.name}</h3>
                <p className="text-sm text-gray-600">{agent.specialization}</p>
                <div className="mt-3 flex flex-col gap-1 text-sm text-gray-600">
                  <span className="flex items-center justify-center gap-1">
                    <Phone className="h-3.5 w-3.5" /> {agent.phone}
                  </span>
                  <span className="flex items-center justify-center gap-1">
                    <Mail className="h-3.5 w-3.5" /> {agent.email}
                  </span>
                </div>
              </div>
            )}
            <h3 className="mb-4 font-semibold text-gray-900">Inquire About This Property</h3>
            <form className="flex flex-col gap-3" onSubmit={e => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <textarea
                placeholder="I'm interested in this property..."
                rows={3}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <button
                type="submit"
                className="w-full rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
              >
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PropertyDetail;