import React from 'react';
import SectionTitle from './SectionTitle';
import { accommodations } from '../data/accommodations';

const PlacesToStay: React.FC = () => {
  return (
    <section id="places-to-stay" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Places to Stay" 
          subtitle="Find your perfect accommodation in Gatlinburg" 
        />
        
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            <FilterButton label="All Accommodations" active={true} />
            <FilterButton label="Hotels" />
            <FilterButton label="Cabins" />
            <FilterButton label="Resorts" />
            <FilterButton label="Vacation Rentals" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation) => (
            <AccommodationCard key={accommodation.id} accommodation={accommodation} />
          ))}
        </div>
        
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 bg-green-800 hover:bg-green-900 text-white rounded-md font-medium transition-colors duration-300">
            Browse All Accommodations
          </button>
        </div>
      </div>
    </section>
  );
};

type FilterButtonProps = {
  label: string;
  active?: boolean;
};

const FilterButton: React.FC<FilterButtonProps> = ({ label, active = false }) => {
  return (
    <button
      className={`px-4 py-2 rounded-md transition-all duration-300 ${
        active 
          ? 'bg-green-800 text-white' 
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );
};

type AccommodationCardProps = {
  accommodation: {
    id: number;
    name: string;
    type: string;
    image: string;
    price: string;
    rating: number;
    features: string[];
  };
};

const AccommodationCard: React.FC<AccommodationCardProps> = ({ accommodation }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100">
      <div 
        className="h-64 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${accommodation.image})` }}
      >
        <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-green-800">
          {accommodation.type}
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-800">{accommodation.name}</h3>
          <div className="flex items-center">
            <span className="text-amber-500 mr-1">★</span>
            <span className="font-medium">{accommodation.rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {accommodation.features.map((feature, index) => (
            <span 
              key={index}
              className="inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs"
            >
              {feature}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-800">{accommodation.price}</span>
            <span className="text-gray-600 text-sm"> /night</span>
          </div>
          <button className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded transition-colors duration-300">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlacesToStay;