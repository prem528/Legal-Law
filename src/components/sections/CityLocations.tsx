import React from 'react';
import { MapPin } from 'lucide-react';

const citiesData = [
  "New Delhi", "Gurugram", "Noida", "Faridabad", "Dwarka",
  "Chandigarh", "Haryana", "Punjab", "Dehradun", "Jaipur",
  "Bengaluru", "Mumbai", "Pune", "Hyderabad", "Chennai",
  "Kolkata", "Goa", "Surat", "Ahmedabad", "Lucknow"
];

const CityLocations: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-blue-800 mb-4">Find Lawyers in Your City</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We have experienced attorneys available in major cities across the country.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {citiesData.sort().map((city, index) => (
            <a
              key={index}
              href="#"
              className="group flex items-center justify-center gap-2 p-4 bg-white border border-gray-200 rounded-lg shadow-sm text-center transition-all duration-300 hover:border-indigo-500 hover:shadow-md hover:-translate-y-1"
            >
              <MapPin className="w-4 h-4 text-indigo-500 group-hover:text-indigo-600 transition-colors" />
              <span className="text-gray-700 text-base font-medium group-hover:text-indigo-600 transition-colors">
                {city}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CityLocations;
