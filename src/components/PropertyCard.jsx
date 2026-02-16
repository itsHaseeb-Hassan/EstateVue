import { Link } from 'react-router-dom';
import { Bed, Bath, Maximize, MapPin } from 'lucide-react';

const PropertyCard = ({ property }) => (
  <Link to={`/property/${property.id}`}>
    <div className="group overflow-hidden rounded-lg border border-gray-200 bg-white transition-shadow hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 rounded-full bg-yellow-500 px-3 py-1 text-xs font-medium text-white">
          {property.type}
        </span>
      </div>
      <div className="p-4">
        <p className="text-xl font-bold text-blue-600">${property.price.toLocaleString()}</p>
        <h3 className="mt-1 font-semibold leading-tight text-gray-900">{property.title}</h3>
        <p className="mt-1 flex items-center gap-1 text-sm text-gray-600">
          <MapPin className="h-3.5 w-3.5" /> {property.location}
        </p>
        {property.type !== 'Plot' && (
          <div className="mt-3 flex gap-4 border-t border-gray-200 pt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <Bed className="h-4 w-4" /> {property.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-4 w-4" /> {property.bathrooms}
            </span>
            <span className="flex items-center gap-1">
              <Maximize className="h-4 w-4" /> {property.area} ft²
            </span>
          </div>
        )}
      </div>
    </div>
  </Link>
);

export default PropertyCard;