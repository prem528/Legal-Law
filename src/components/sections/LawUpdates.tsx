import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const updatesData = [
  {
    image: "https://images.unsplash.com/photo-1555374018-13a8994ab246?auto=format&fit=crop&w=400&q=80",
    title: "New Tax Legislation",
    description: "The Income-Tax Bill, 2025 was introduced in Lok Sabha on February 13, 2025.  It seeks to replace the Income-Tax Act, 1961.  The Bill retains most of the provisions of the 1961 Act.  It primarily aims to simplify the language and remove redundant provisions.  Tax rates and regimes for individuals and corporations remain unchanged.  Most definitions have also been retained.  There are no changes in offences and penalties.  The Bill proposes April 1, 2026 as the date of its commencement.",
    date: "June 12, 2023"
  },
  {
    image: "https://cdnbbsr.s3waas.gov.in/s3ec0490f1f4972d133619a60c30f3559e/uploads/2023/10/SCI-banner.jpg",
    title: "Supreme Court Ruling",
    description: "Latest ruling on consumer protection laws and their implications. The Supreme Court of India, in a recent ruling (UCO Bank v. Vijay Kumar Handa, 2025 INSC 442), affirmed the right to pension for a bank employee removed from service, provided they meet the eligibility criteria. The court's decision clarifies that even if an employee is dismissed due to misconduct, they are still entitled to pension benefits if they have completed the minimum qualifying service period. This ruling emphasizes the importance of the Bipartite Settlement provisions, which stipulate that superannuation benefits are still due to employees removed from service under certain circumstances",
    date: "May 28, 2023"
  },
  {
    image: "https://getlegalindia.com/wp-content/uploads/2022/05/property-law-in-india.jpg",
    title: "Property Law Update",
    description: "The new law, which will be applied in 2025, is expected to make some important changes in the property rights system.",
    date: "April 15, 2023"
  },
  {
    image: "https://media.istockphoto.com/id/1355038837/photo/family-figurines-and-court-hammer-family-law-and-adoption-concept.jpg?s=612x612&w=0&k=20&c=vBOodeE9CRQwL9TBwkY73YgarAgAW2lSYyhNbkK6syU=",
    title: "Family Law Changes",
    description: "Important updates to child custody and support regulations.",
    date: "March 3, 2023"
  }
];

const LawUpdates: React.FC = () => {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-24 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-blue-800 mb-4">Law Updates</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay informed about the latest legal developments and changes in legislation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {updatesData.map((update, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row group transition-all duration-300 hover:shadow-xl"
            >
              {/* Image */}
              <div className="w-full md:w-1/3 h-48 md:h-auto">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{update.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{update.description}</p>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">{update.date}</span>
                  <Button variant="link" className="p-0 h-auto text-indigo-600 hover:text-orange-600">
                    Read More <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LawUpdates;
