import React from 'react';
import SectionTitle from './SectionTitle';
import { restaurants } from '../data/restaurants';

const Dining: React.FC = () => {
  return (
    <section id="dining" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Restaurants & Dining" 
          subtitle="Savor the flavors of Gatlinburg" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-lg overflow-hidden shadow-md">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Local Cuisine</h3>
              <p className="text-gray-600 mb-6">
                Experience authentic Southern cooking and Smoky Mountain specialties. From mouthwatering barbecue to fresh trout, the local cuisine captures the essence of Appalachian traditions with a modern twist.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  <span>Southern comfort food and home-style cooking</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  <span>Mountain trout and local game dishes</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  <span>Moonshine tastings and craft distilleries</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-amber-500 rounded-full mr-2"></span>
                  <span>Hand-crafted desserts and Appalachian sweets</span>
                </li>
              </ul>
              <button className="px-5 py-2 bg-green-800 hover:bg-green-900 text-white rounded transition-colors duration-300">
                Explore Local Specialties
              </button>
            </div>
          </div>
          
          <div 
            className="bg-cover bg-center rounded-lg shadow-md hidden md:block"
            style={{ backgroundImage: 'url("https://images.pexels.com/photos/3217156/pexels-photo-3217156.jpeg")' }}
          ></div>
        </div>
        
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">Featured Restaurants</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors duration-300">
            View All Dining Options
          </button>
        </div>
      </div>
    </section>
  );
};

type RestaurantCardProps = {
  restaurant: {
    id: number;
    name: string;
    cuisine: string;
    image: string;
    priceRange: string;
    rating: number;
    description: string;
  };
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div 
        className="h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${restaurant.image})` }}
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-gray-800">{restaurant.name}</h3>
          <div className="flex items-center">
            <span className="text-amber-500 mr-1">★</span>
            <span>{restaurant.rating.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-gray-600 text-sm mr-3">{restaurant.cuisine}</span>
          <span className="text-gray-600 text-sm">{restaurant.priceRange}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{restaurant.description}</p>
        <button className="w-full px-4 py-2 bg-green-50 hover:bg-green-100 text-green-800 rounded transition-colors duration-300 font-medium">
          View Menu
        </button>
      </div>
    </div>
  );
};

export default Dining;