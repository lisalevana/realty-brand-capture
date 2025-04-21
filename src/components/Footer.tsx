
import { Logo } from './Logo';
import { MapPin, Mail, Phone, Link } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container max-w-screen-xl py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo variant="white" />
            <p className="mt-4 text-sm opacity-80">
              Professional commercial real estate services delivering exceptional value and results.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { name: 'Properties', href: '#properties' },
                { name: 'Services', href: '#services' },
                { name: 'About Us', href: '#about' },
                { name: 'Contact', href: '#contact' },
                { name: 'Schedule a Call', href: '#schedule' },
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="opacity-80 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              {[
                'Property Management',
                'Investment Services',
                'Property Acquisition',
                'Leasing Services',
                'Market Analysis',
              ].map((service) => (
                <li key={service} className="opacity-80 hover:opacity-100 transition-opacity">
                  {service}
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-80">
                  123 Business Avenue<br />
                  Suite 500<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href="mailto:info@realtynexus.com" className="opacity-80 hover:opacity-100 hover:underline">
                  info@realtynexus.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href="tel:+12125551234" className="opacity-80 hover:opacity-100 hover:underline">
                  (212) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-white/20 my-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between text-sm opacity-70">
          <p>© {new Date().getFullYear()} Realty Nexus. All rights reserved.</p>
          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 hover:underline">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
