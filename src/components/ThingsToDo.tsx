import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { attractions } from '../data/attractions';

const ThingsToDo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'attractions' | 'outdoor' | 'sightseeing'>('all');
  
  const filteredAttractions = activeTab === 'all' 
    ? attractions 
    : attractions.filter(item => item.category === activeTab);

  return (
    <section id="things-to-do" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Things to Do" 
          subtitle="Discover unforgettable experiences in Gatlinburg" 
        />
        
        <div className="flex flex-wrap justify-center mb-12">
          <TabButton 
            label="All" 
            isActive={activeTab === 'all'} 
            onClick={() => setActiveTab('all')} 
          />
          <TabButton 
            label="Attractions" 
            isActive={activeTab === 'attractions'} 
            onClick={() => setActiveTab('attractions')} 
          />
          <TabButton 
            label="Outdoor Activities" 
            isActive={activeTab === 'outdoor'} 
            onClick={() => setActiveTab('outdoor')} 
          />
          <TabButton 
            label="Sightseeing" 
            isActive={activeTab === 'sightseeing'} 
            onClick={() => setActiveTab('sightseeing')} 
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAttractions.map((item) => (
            <AttractionCard key={item.id} attraction={item} />
          ))}
        </div>

      </div>
    </section>
  );
};

type TabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const TabButton: React.FC<TabButtonProps> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 mx-2 my-2 rounded-full transition-colors duration-300 ${
        isActive 
          ? 'bg-green-800 text-white' 
          : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

type AttractionCardProps = {
  attraction: {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
    rating: number;
  };
};


const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div 
        className="h-56 bg-cover bg-center"
        style={{ backgroundImage: `url(${attraction.image})` }}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{attraction.name}</h3>
          <div className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm font-medium">
            {attraction.rating.toFixed(1)} ★
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          {isExpanded 
            ? attraction.description 
            : attraction.description.slice(0, 80) + (attraction.description.length > 80 ? '...' : '')
          }
        </p>
        <div className="flex justify-between items-center">
          <span className="inline-block bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
            {attraction.category.charAt(0).toUpperCase() + attraction.category.slice(1)}
          </span>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-amber-600 hover:text-amber-800 font-medium transition-colors duration-300"
          >
            {isExpanded ? 'Show Less ↑' : 'Learn More →'}
          </button>
        </div>
      </div>
    </div>
  );
};


export default ThingsToDo;