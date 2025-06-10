import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/mkgbjaev', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: new FormData(e.target as HTMLFormElement)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Contact Us" 
          subtitle="We're here to help you plan your perfect Gatlinburg getaway" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>

            {/* Feedback Message */}
            {status === 'success' && (
              <p className="text-green-700 mb-4 font-medium">Thank you! Your message has been sent.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 mb-4 font-medium">Oops! Something went wrong. Please try again.</p>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Attractions Information">Attractions Information</option>
                  <option value="Accommodations">Accommodations</option>
                  <option value="Dining">Dining</option>
                  <option value="Events & Festivals">Events & Festivals</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={status === 'sending'}
                className="px-6 py-3 bg-green-800 hover:bg-green-900 text-white rounded-md font-medium transition-colors duration-300 disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Visitor Information</h3>
              
              <div className="space-y-4">
                <ContactInfo 
                  icon={<MapPin />}
                  title="Address"
                  details={['Gatlinburg Welcome Center', '520 Parkway, Gatlinburg, TN 37738']}
                />
                
                <ContactInfo 
                  icon={<Phone />}
                  title="Phone"
                  details={['(865) 436-4178', 'Toll-free: 1-800-588-1817']}
                />
                
                <ContactInfo 
                  icon={<Mail />}
                  title="Email"
                  details={['info@visitgatlinburg.com', 'support@visitgatlinburg.com']}
                />
                
                <ContactInfo 
                  icon={<Clock />}
                  title="Hours"
                  details={['Mon-Sat: 9:00 AM - 5:30 PM', 'Sunday: 9:00 AM - 5:00 PM']}
                />
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden shadow-md h-72">
              <iframe
                title="Gatlinburg Welcome Center Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3207.8233580819257!2d-83.51249748442686!3d35.726621980181444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88595b15e6c9b85d%3A0x28b1fbd8d4ce1ee0!2sGatlinburg%20Welcome%20Center!5e0!3m2!1sen!2sus!4v1689476801111!5m2!1sen!2sus"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type ContactInfoProps = {
  icon: React.ReactNode;
  title: string;
  details: string[];
};

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, details }) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-800 mr-4">
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-1">{title}</h4>
        <div className="space-y-1">
          {details.map((detail, index) => (
            <p key={index} className="text-gray-600">{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;