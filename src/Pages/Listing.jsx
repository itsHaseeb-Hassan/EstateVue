import { useState, useMemo } from 'react';
import { LayoutGrid, List } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { properties } from '../constant/data';
const ITEMS_PER_PAGE = 6;

const Listings = () => {
  const [search, setSearch] = useState('');
  const [type, setType] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [bedrooms, setBedrooms] = useState('all');
  const [view, setView] = useState('grid');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return properties.filter(p => {
      if (search && !p.location.toLowerCase().includes(search.toLowerCase()) && !p.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (type !== 'all' && p.type !== type) return false;
      if (bedrooms !== 'all' && p.bedrooms !== Number(bedrooms)) return false;
      if (priceRange !== 'all') {
        const [min, max] = priceRange.split('-').map(Number);
        if (max ? (p.price < min || p.price > max) : p.price < min) return false;
      }
      return true;
    });
  }, [search, type, priceRange, bedrooms]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-10">
        <h1 className="mb-2 text-3xl font-bold text-gray-900">Property Listings</h1>
        <p className="mb-8 text-gray-600">Browse all available properties</p>

        {/* Filters */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <input
            type="text"
            placeholder="Search location or title..."
            value={search}
            onChange={e => { setSearch(e.target.value); setPage(1); }}
            className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 sm:w-60"
          />
          
          <select
            value={type}
            onChange={e => { setType(e.target.value); setPage(1); }}
            className="w-36 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="all">All Types</option>
            <option value="House">House</option>
            <option value="Apartment">Apartment</option>
            <option value="Plot">Plot</option>
          </select>

          <select
            value={priceRange}
            onChange={e => { setPriceRange(e.target.value); setPage(1); }}
            className="w-44 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="all">Any Price</option>
            <option value="0-300000">Under $300K</option>
            <option value="300000-600000">$300K – $600K</option>
            <option value="600000-1000000">$600K – $1M</option>
            <option value="1000000-99999999">$1M+</option>
          </select>

          <select
            value={bedrooms}
            onChange={e => { setBedrooms(e.target.value); setPage(1); }}
            className="w-36 rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
          >
            <option value="all">Any Beds</option>
            <option value="1">1 Bed</option>
            <option value="2">2 Beds</option>
            <option value="3">3 Beds</option>
            <option value="4">4+ Beds</option>
          </select>

          <div className="ml-auto flex gap-1">
            <button
              onClick={() => setView('grid')}
              className={`rounded-md p-2 ${
                view === 'grid' 
                  ? 'bg-yellow-500 text-white' 
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <LayoutGrid className="h-4 w-4" />
            </button>
            <button
              onClick={() => setView('list')}
              className={`rounded-md p-2 ${
                view === 'list' 
                  ? 'bg-yellow-500 text-white' 
                  : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              <List className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Results */}
        <p className="mb-4 text-sm text-gray-600">{filtered.length} properties found</p>
        {paginated.length === 0 ? (
          <p className="py-20 text-center text-gray-600">No properties match your filters.</p>
        ) : (
          <div className={view === 'grid' ? 'grid gap-6 sm:grid-cols-2 lg:grid-cols-3' : 'flex flex-col gap-4'}>
            {paginated.map(p => <PropertyCard key={p.id} property={p} />)}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="mt-10 flex justify-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`rounded-md px-3 py-1 text-sm ${
                  page === i + 1
                    ? 'bg-yellow-500 text-white'
                    : 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Listings;