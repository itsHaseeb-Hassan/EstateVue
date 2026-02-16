import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => (
  <div className="min-h-screen">
    <Navbar />
    <div className="container mx-auto px-4 py-10">
      <h1 className="mb-2 text-3xl font-bold text-gray-900">Contact Us</h1>
      <p className="mb-10 text-gray-600">We'd love to hear from you. Get in touch with us today.</p>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Form */}
        <div className="rounded-xl border border-gray-200 p-6">
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Send Us a Message</h2>
          <form className="flex flex-col gap-4" onSubmit={e => e.preventDefault()}>
            <div className="grid gap-4 sm:grid-cols-2">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <textarea
              placeholder="How can we help you?"
              rows={5}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <button
              type="submit"
              className="w-full rounded-md bg-yellow-500 px-4 py-2 text-sm font-medium text-white hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Office Info */}
        <div>
          <h2 className="mb-6 text-xl font-semibold text-gray-900">Office Information</h2>
          <div className="flex flex-col gap-5">
            {[
              { icon: MapPin, label: 'Address', value: '123 Main Street, Suite 400\nNew York, NY 10001' },
              { icon: Phone, label: 'Phone', value: '+1 (555) 000-1234' },
              { icon: Mail, label: 'Email', value: 'info@estatevue.com' },
              { icon: Clock, label: 'Working Hours', value: 'Mon – Fri: 9AM – 6PM\nSat: 10AM – 4PM\nSun: Closed' },
            ].map(item => (
              <div key={item.label} className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-yellow-100">
                  <item.icon className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{item.label}</p>
                  <p className="whitespace-pre-line text-sm text-gray-600">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map Placeholder */}
          <div className="mt-8 flex h-64 items-center justify-center rounded-xl bg-gray-100">
            <p className="text-gray-600">Map view coming soon</p>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

export default Contact;