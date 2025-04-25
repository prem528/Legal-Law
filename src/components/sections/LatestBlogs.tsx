import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

const blogsData = [
  {
    image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    title: "What Small Business Owners Need to Know About Copyright Laws",
    author: "John Smith",
    date: "June 15, 2023"
  },
  {
    image: "https://t3.ftcdn.net/jpg/04/42/51/24/360_F_442512403_6pSiDAirKYmPIFTjiCUpMcmWrrEnhgjI.jpg",
    title: "A Guide to Employee Rights in the Remote Work Era",
    author: "Sarah Johnson",
    date: "May 28, 2023"
  },
  {
    image: "https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    title: "Understanding the Basics of Property Disputes",
    author: "Michael Cooper",
    date: "April 10, 2023"
  }
];

const LatestBlogs: React.FC = () => {
  return (
    <section className="py-16 px-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-semibold text-blue-800 mb-4">Latest Blogs</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stay updated with our informative articles on various legal topics.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogsData.map((blog, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-gray-900 hover:text-brand-orange transition-colors">
                  <a href="#">{blog.title}</a>
                </h3>
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span>{blog.author}</span>
                  <span className="mx-2">•</span>
                  <span>{blog.date}</span>
                </div>
                <Button variant="link" className="p-0 h-auto text-brand-orange hover:text-brand-blue">
                  Read More <ArrowRight size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button variant="outline">View All Blog Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default LatestBlogs;
