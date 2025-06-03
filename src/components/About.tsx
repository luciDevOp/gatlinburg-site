import React from 'react';
import SectionTitle from './SectionTitle';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-stone-50">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="About Gatlinburg" 
          subtitle="The gateway to the Great Smoky Mountains" 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h3>
            <p className="text-gray-600 mb-6">
              Nestled at the entrance to Great Smoky Mountains National Park, Gatlinburg has transformed from a small mountain hamlet to one of Tennessee's most beloved tourist destinations. Originally known as White Oak Flats, the area was first settled in the early 1800s.
            </p>
            <p className="text-gray-600 mb-6">
              The town was renamed after Radford Gatlin, who opened the second general store and post office in the area. Despite Gatlin's eventual departure due to political differences with other settlers, the name Gatlinburg remained.
            </p>
            <p className="text-gray-600">
              With the establishment of the Great Smoky Mountains National Park in 1934, Gatlinburg grew into a thriving tourist destination. Today, our mountain town welcomes millions of visitors annually while maintaining its small-town charm and natural beauty.
            </p>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl">
            <img 
              src="https://images.pexels.com/photos/1034887/pexels-photo-1034887.jpeg" 
              alt="Historic Gatlinburg" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <span className="text-white/80 text-sm">Gatlinburg circa 1940s</span>
            </div>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Gatlinburg Timeline</h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            <div className="space-y-12">
              <TimelineItem 
                year="1807" 
                title="First Settlers" 
                description="Martha Jane Huskey Ogle and her family were the first permanent settlers in what would become Gatlinburg."
                position="left"
              />
              <TimelineItem 
                year="1856" 
                title="Naming of Gatlinburg" 
                description="The town was officially named after Radford Gatlin, who established a post office in the area."
                position="right"
              />
              <TimelineItem 
                year="1912" 
                title="Pi Beta Phi Settlement School" 
                description="The establishment of this school brought education and crafts to the mountain community."
                position="left"
              />
              <TimelineItem 
                year="1934" 
                title="Great Smoky Mountains National Park" 
                description="The establishment of the national park transformed Gatlinburg into a gateway tourist destination."
                position="right"
              />
              <TimelineItem 
                year="1954" 
                title="Gatlinburg Space Needle" 
                description="The iconic Space Needle observation tower was built, becoming a landmark of the city."
                position="left"
              />
              <TimelineItem 
                year="1986" 
                title="Ripley's Aquarium" 
                description="One of the city's most popular attractions opened, adding to Gatlinburg's appeal."
                position="right"
              />
              <TimelineItem 
                year="2016" 
                title="Gatlinburg Wildfires" 
                description="The community showed remarkable resilience in recovering from devastating wildfires."
                position="left"
              />
              <TimelineItem 
                year="Present" 
                title="Thriving Mountain Destination" 
                description="Today, Gatlinburg welcomes millions of visitors annually while preserving its mountain heritage."
                position="right"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCard 
            number="14,000+" 
            label="Residents" 
            description="Proud citizens who call Gatlinburg home"
          />
          <StatCard 
            number="11+ million" 
            label="Annual Visitors" 
            description="Tourists who experience Gatlinburg each year"
          />
          <StatCard 
            number="520,000+" 
            label="Acres" 
            description="Of surrounding Great Smoky Mountains National Park"
          />
        </div>
      </div>
    </section>
  );
};

type TimelineItemProps = {
  year: string;
  title: string;
  description: string;
  position: 'left' | 'right';
};

const TimelineItem: React.FC<TimelineItemProps> = ({ year, title, description, position }) => {
  return (
    <div className={`relative flex items-center ${position === 'left' ? 'flex-row-reverse' : 'flex-row'}`}>
      <div className="flex-1"></div>
      
      {/* Center dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-green-800 border-4 border-white z-10"></div>
      
      <div className={`flex-1 ${position === 'left' ? 'pr-12' : 'pl-12'}`}>
        <div className={`p-6 bg-white rounded-lg shadow-md ${position === 'left' ? 'mr-6' : 'ml-6'}`}>
          <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-bold mb-2">
            {year}
          </span>
          <h4 className="text-lg font-bold text-gray-800 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

type StatCardProps = {
  number: string;
  label: string;
  description: string;
};

const StatCard: React.FC<StatCardProps> = ({ number, label, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <h3 className="text-3xl md:text-4xl font-bold text-green-800 mb-2">{number}</h3>
      <h4 className="text-xl font-bold text-gray-800 mb-3">{label}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default About;