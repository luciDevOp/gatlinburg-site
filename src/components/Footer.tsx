import React from 'react';
import { Link } from './Link';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import NewsletterForm from './NewsletterForm';
const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-6">Visit Gatlinburg</h3>
            <p className="mb-6 text-gray-300">
              The gateway to the Great Smoky Mountains National Park, offering memorable experiences for all visitors.
            </p>
            <div className="flex space-x-4">
              {/* AICI PUI CE VREI TU LA HREF - LINK CATRE CE VREI TU */}
              <SocialLink icon={<Facebook size={20} />} href="#" />
              <SocialLink icon={<Twitter size={20} />} href="#" />
              <SocialLink icon={<Instagram size={20} />} href="#" />
              <SocialLink icon={<Youtube size={20} />} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink to="things-to-do">Things to Do</FooterLink>
              <FooterLink to="places-to-stay">Places to Stay</FooterLink>
              <FooterLink to="dining">Restaurants & Dining</FooterLink>
              <FooterLink to="events">Events & Festivals</FooterLink>
              <FooterLink to="about">About Gatlinburg</FooterLink>
              <FooterLink to="contact">Contact Us</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Visitor Guide</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Trip Planner</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Travel Tips</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Maps & Directions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Weather</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="mb-4 text-gray-300">
              Subscribe to our newsletter for the latest updates, events, and special offers.
            </p>
            <NewsletterForm compact />
          </div>
        </div>
        
        <div className="pt-8 border-t border-green-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Visit Gatlinburg. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors duration-300 mb-2 md:mb-0">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors duration-300 mb-2 md:mb-0">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors duration-300 mb-2 md:mb-0">Accessibility</a>
            <a href="#" className="hover:text-white transition-colors duration-300 mb-2 md:mb-0">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

type SocialLinkProps = {
  icon: React.ReactNode;
  href: string;
};

const SocialLink: React.FC<SocialLinkProps> = ({ icon, href }) => {
  return (
    <a 
      href={href}
      className="h-10 w-10 rounded-full bg-green-800 hover:bg-amber-600 flex items-center justify-center transition-colors duration-300"
    >
      {icon}
    </a>
  );
};

type FooterLinkProps = {
  to: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({ to, children }) => {
  return (
    <li>
      <Link 
        to={to} 
        className="text-gray-300 hover:text-white transition-colors duration-300"
      >
        {children}
      </Link>
    </li>
  );
};

export default Footer;