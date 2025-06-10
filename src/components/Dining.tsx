import React, { useState } from 'react';
import SectionTitle from './SectionTitle';
import { restaurants } from '../data/restaurants';

const Dining: React.FC = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState<RestaurantCardProps['restaurant'] | null>(null);

  const handleViewMenu = (restaurant: RestaurantCardProps['restaurant']) => {
    setSelectedRestaurant(restaurant);
  };

  const closeModal = () => {
    setSelectedRestaurant(null);
  };

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
            <RestaurantCard key={restaurant.id} restaurant={restaurant} onViewMenu={handleViewMenu} />
          ))}
        </div>

        <RestaurantModal restaurant={selectedRestaurant} onClose={closeModal} />

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
    menu: string[]; 
  };
  onViewMenu: (restaurant: RestaurantCardProps['restaurant']) => void;
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant, onViewMenu }) => {
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
        <button
          onClick={() => onViewMenu(restaurant)}
          className="w-full px-4 py-2 bg-green-50 hover:bg-green-100 text-green-800 rounded transition-colors duration-300 font-medium"
        >
          View Menu
        </button>
      </div>
    </div>
  );
};

type RestaurantModalProps = {
  restaurant: RestaurantCardProps['restaurant'] | null;
  onClose: () => void;
};

const RestaurantModal: React.FC<RestaurantModalProps> = ({ restaurant, onClose }) => {
  if (!restaurant) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2">{restaurant.name}</h2>
        <p className="text-sm text-gray-600 mb-1"><strong>Cuisine:</strong> {restaurant.cuisine}</p>
        <p className="text-sm text-gray-600 mb-1"><strong>Price:</strong> {restaurant.priceRange}</p>
        <p className="text-sm text-gray-600 mb-4"><strong>Rating:</strong> {restaurant.rating.toFixed(1)} ★</p>
        <p className="text-gray-700 mb-4">{restaurant.description}</p>
        <h3 className="text-lg font-semibold text-gray-800 mb-2">Sample Menu</h3>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {restaurant.menu.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dining;
