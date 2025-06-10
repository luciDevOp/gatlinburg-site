import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { events } from '../data/events';
import { Calendar } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

const Events: React.FC = () => {
  const [activeMonth, setActiveMonth] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventCardProps['event'] | null>(null);

  const openModal = (event: EventCardProps['event']) => {
    setSelectedEvent(event);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedEvent(null);
  };

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

        {/* Month filter */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex space-x-2 min-w-max justify-center">
            {['all', 'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'].map(month => (
              <MonthButton
                key={month}
                name={month}
                label={month === 'all' ? 'All Events' : month.slice(0, 3).toUpperCase()}
                active={activeMonth === month}
                onClick={() => setActiveMonth(month)}
              />
            ))}
          </div>
        </div>

        {/* Event cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onViewDetails={openModal} />
          ))}
        </div>

        {/* View Details Modal */}
        <EventModal isOpen={modalOpen} onClose={closeModal} event={selectedEvent} />

        {/* Newsletter */}
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
              <NewsletterForm />
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

const MonthButton: React.FC<MonthButtonProps> = ({ label, active, onClick }) => {
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
  onViewDetails: (event: EventCardProps['event']) => void;
};

const EventCard: React.FC<EventCardProps> = ({ event, onViewDetails }) => {
  const generateCalendarLink = () => {
    const title = encodeURIComponent(event.name);
    const details = encodeURIComponent(event.description);
    const location = encodeURIComponent(event.location);

    const [startMonth] = event.date.split(' - ');
    const year = new Date().getFullYear();
    const startDate = new Date(`${startMonth} ${year}`);
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 1);

    const formatDate = (date: Date) =>
      date.toISOString().replace(/[-:]|\.\d{3}/g, '').slice(0, 15);

    return `https://www.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${formatDate(startDate)}/${formatDate(endDate)}&details=${details}&location=${location}&sf=true&output=xml`;
  };

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
          <button
            onClick={() => onViewDetails(event)}
            className="text-green-800 hover:text-green-900 font-medium transition-colors duration-300 flex items-center"
          >
            View Details
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <a
            href={generateCalendarLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-50 hover:bg-green-100 text-green-800 rounded transition-colors duration-300 text-sm font-medium"
          >
            Add to Calendar
          </a>
        </div>
      </div>
    </div>
  );
};

type EventModalProps = {
  isOpen: boolean;
  onClose: () => void;
  event: EventCardProps['event'] | null;
};

const EventModal: React.FC<EventModalProps> = ({ isOpen, onClose, event }) => {
  if (!isOpen || !event) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-lg"
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4">{event.name}</h2>
        <p className="text-sm text-gray-600 mb-2"><strong>Date:</strong> {event.date}</p>
        <p className="text-sm text-gray-600 mb-2"><strong>Location:</strong> {event.location}</p>
        <p className="text-gray-700">{event.description}</p>
      </div>
    </div>
  );
};

export default Events;
