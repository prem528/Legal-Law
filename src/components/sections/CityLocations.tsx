import React from 'react';

const citiesData = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", 
  "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose",
  "Austin", "Jacksonville", "Fort Worth", "Columbus", "Charlotte",
  "San Francisco", "Indianapolis", "Seattle", "Denver", "Washington"
];

const CityLocations: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Lawyers in Your City</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We have experienced attorneys available in major cities across the country.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {citiesData.map((city, index) => (
            <a 
              key={index} 
              href="#" 
              className="py-2 px-4 bg-white border border-gray-200 rounded-md text-center text-gray-700 hover:border-brand-orange hover:text-brand-orange transition-colors"
            >
              {city}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityLocations;
