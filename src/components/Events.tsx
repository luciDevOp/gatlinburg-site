import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { events } from '../data/events';
import { Calendar } from 'lucide-react';

const Events: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState('all');
  
  const filteredEvents = activeMonth === 'all'
    ? events
    : events.filter(event => event.month === activeMonth);

  return (
    <section id="events" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Events & Festivals" 
          subtitle="Experience Gatlinburg's exciting year-round events" 
        />
        
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-2 min-w-max justify-center">
            <MonthButton name="all" label="All Events" active={activeMonth === 'all'} onClick={() => setActiveMonth('all')} />
            <MonthButton name="january" label="Jan" active={activeMonth === 'january'} onClick={() => setActiveMonth('january')} />
            <MonthButton name="february" label="Feb" active={activeMonth === 'february'} onClick={() => setActiveMonth('february')} />
            <MonthButton name="march" label="Mar" active={activeMonth === 'march'} onClick={() => setActiveMonth('march')} />
            <MonthButton name="april" label="Apr" active={activeMonth === 'april'} onClick={() => setActiveMonth('april')} />
            <MonthButton name="may" label="May" active={activeMonth === 'may'} onClick={() => setActiveMonth('may')} />
            <MonthButton name="june" label="Jun" active={activeMonth === 'june'} onClick={() => setActiveMonth('june')} />
            <MonthButton name="july" label="Jul" active={activeMonth === 'july'} onClick={() => setActiveMonth('july')} />
            <MonthButton name="august" label="Aug" active={activeMonth === 'august'} onClick={() => setActiveMonth('august')} />
            <MonthButton name="september" label="Sep" active={activeMonth === 'september'} onClick={() => setActiveMonth('september')} />
            <MonthButton name="october" label="Oct" active={activeMonth === 'october'} onClick={() => setActiveMonth('october')} />
            <MonthButton name="november" label="Nov" active={activeMonth === 'november'} onClick={() => setActiveMonth('november')} />
            <MonthButton name="december" label="Dec" active={activeMonth === 'december'} onClick={() => setActiveMonth('december')} />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
        
        <div className="mt-16 bg-green-50 rounded-lg p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0 bg-green-800 text-white p-5 rounded-full">
              <Calendar size={40} />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Looking for more events?</h3>
              <p className="text-gray-600 mb-4">
                Subscribe to our newsletter to stay updated on all upcoming events, festivals, and special celebrations in Gatlinburg.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-800 focus:border-transparent flex-grow"
                />
                <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

type MonthButtonProps = {
  name: string;
  label: string;
  active: boolean;
  onClick: () => void;
};

const MonthButton: React.FC<MonthButtonProps> = ({ name, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-md transition-colors duration-300 ${
        active 
          ? 'bg-green-800 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

type EventCardProps = {
  event: {
    id: number;
    name: string;
    date: string;
    month: string;
    image: string;
    location: string;
    description: string;
  };
};

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
      <div 
        className="h-48 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${event.image})` }}
      >
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-xl font-bold text-white">{event.name}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium mr-3">
            {event.date}
          </div>
          <span className="text-gray-600 text-sm">{event.location}</span>
        </div>
        
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="flex justify-between items-center">
          <button className="text-green-800 hover:text-green-900 font-medium transition-colors duration-300 flex items-center">
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          
          <button className="px-4 py-2 bg-green-50 hover:bg-green-100 text-green-800 rounded transition-colors duration-300">
            Add to Calendar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Events;