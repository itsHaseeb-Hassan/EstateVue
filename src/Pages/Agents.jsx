import { Phone, Mail, Building } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { agents } from '../constant/data';

const Agents = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Our Agents</h1>
      <p className="mb-10 text-gray-600">Meet our team of experienced real estate professionals</p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {agents.map(agent => (
          <div 
            key={agent.id} 
            className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg"
          >
            <div className="p-6 text-center">
              <img
                src={agent.photo}
                alt={agent.name}
                className="mx-auto mb-4 h-28 w-28 rounded-full object-cover ring-4 ring-gray-100 transition-all group-hover:ring-yellow-500/30"
              />
              <h3 className="text-lg font-semibold text-gray-900">{agent.name}</h3>
              <p className="text-sm text-yellow-600">{agent.specialization}</p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">{agent.bio}</p>
              <div className="mt-4 flex items-center justify-center gap-1 text-sm text-gray-600">
                <Building className="h-4 w-4" /> {agent.listings} Active Listings
              </div>
              <div className="mt-4 flex flex-col gap-2 text-sm">
                <span className="flex items-center justify-center gap-2 text-gray-600">
                  <Phone className="h-4 w-4" /> {agent.phone}
                </span>
                <span className="flex items-center justify-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" /> {agent.email}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </div>
);

export default Agents;