import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const updatesData = [
  {
    icon: "📜",
    title: "New Tax Legislation",
    description: "Recent changes to tax laws that could impact businesses and individuals.",
    date: "June 12, 2023"
  },
  {
    icon: "⚖️",
    title: "Supreme Court Ruling",
    description: "Latest ruling on consumer protection laws and their implications.",
    date: "May 28, 2023"
  },
  {
    icon: "🏘️",
    title: "Property Law Update",
    description: "New regulations affecting real estate transactions and rental properties.",
    date: "April 15, 2023"
  },
  {
    icon: "👨‍👩‍👧‍👦",
    title: "Family Law Changes",
    description: "Important updates to child custody and support regulations.",
    date: "March 3, 2023"
  }
];

const LawUpdates: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Law Updates</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed about the latest legal developments and changes in legislation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {updatesData.map((update, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4">{update.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{update.title}</h3>
              <p className="text-gray-600 mb-4">{update.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">{update.date}</span>
                <Button variant="link" className="p-0 h-auto text-brand-orange hover:text-brand-blue">
                  Read More <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawUpdates;
