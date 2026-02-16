import { Link } from 'react-router-dom';
import { Home, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => (
  <footer className="border-t border-border bg-primary text-primary-foreground">
    <div className="container mx-auto grid gap-8 px-4 py-12 md:grid-cols-4">
      <div>
        <Link to="/" className="mb-4 flex items-center gap-2 text-lg font-bold">
          <Home className="h-5 w-5" /> EstateVue
        </Link>
        <p className="text-sm opacity-80">Finding your perfect property with trust, transparency, and expertise since 2015.</p>
      </div>
      <div>
        <h4 className="mb-3 font-semibold">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          <Link to="/" className="hover:opacity-100">Home</Link>
          <Link to="/listings" className="hover:opacity-100">Listings</Link>
          <Link to="/agents" className="hover:opacity-100">Agents</Link>
          <Link to="/contact" className="hover:opacity-100">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="mb-3 font-semibold">Property Types</h4>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          <Link to="/listings?type=House" className="hover:opacity-100">Houses</Link>
          <Link to="/listings?type=Apartment" className="hover:opacity-100">Apartments</Link>
          <Link to="/listings?type=Plot" className="hover:opacity-100">Plots</Link>
        </div>
      </div>
      <div>
        <h4 className="mb-3 font-semibold">Contact Us</h4>
        <div className="flex flex-col gap-2 text-sm opacity-80">
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> 123 Main Street, New York</span>
          <span className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 000-1234</span>
          <span className="flex items-center gap-2"><Mail className="h-4 w-4" /> info@estatevue.com</span>
        </div>
      </div>
    </div>
    <div className="border-t border-primary-foreground/20 py-4 text-center text-sm opacity-60">
      © 2026 EstateVue. All rights reserved.
    </div>
  </footer>
);

export default Footer;