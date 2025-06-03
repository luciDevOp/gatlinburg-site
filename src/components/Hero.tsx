import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Link } from './Link';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.5);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className="relative h-screen w-full flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{
          backgroundImage: 'url("https://colonialproperties.com/application/files/9617/2545/8917/Unique_Things_Youll_Only_Find_in_Gatlinburg_Tennessee.jpg")',
          transform: `translateY(${offset}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
          Experience the Magic of <br />
          <span className="text-amber-400">Gatlinburg</span>
        </h1>
        <p className="text-xl md:text-2xl text-white opacity-90 mb-8 max-w-3xl mx-auto">
          Nestled in the heart of the Great Smoky Mountains, Gatlinburg offers breathtaking views, thrilling attractions, and unforgettable experiences.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md font-medium transition-colors duration-300 text-lg">
            Explore Attractions
          </button>
          <button className="px-8 py-3 bg-transparent hover:bg-white/10 text-white border-2 border-white rounded-md font-medium transition-colors duration-300 text-lg">
            Plan Your Visit
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <Link to="things-to-do" className="flex flex-col items-center">
          <span className="text-sm mb-2">Discover More</span>
          <ChevronDown size={24} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;