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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (would connect to backend in real implementation)
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
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
                  <option value="general">General Inquiry</option>
                  <option value="attractions">Attractions Information</option>
                  <option value="accommodations">Accommodations</option>
                  <option value="dining">Dining</option>
                  <option value="events">Events & Festivals</option>
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
                className="px-6 py-3 bg-green-800 hover:bg-green-900 text-white rounded-md font-medium transition-colors duration-300"
              >
                Send Message
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
            
            <div className="rounded-lg overflow-hidden shadow-md h-72 relative">
              {/* In a real implementation, this would be a Google Maps iframe */}
              <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                <div className="text-center p-4">
                  <MapPin size={32} className="mx-auto text-green-800 mb-2" />
                  <h4 className="text-lg font-bold text-gray-800">Gatlinburg Welcome Center</h4>
                  <p className="text-gray-600">520 Parkway, Gatlinburg, TN 37738</p>
                </div>
              </div>
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