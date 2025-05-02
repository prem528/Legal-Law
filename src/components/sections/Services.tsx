import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

interface Service {
  icon_url: string;
  title: string;
  description: string;
}

const Services = () => {
  const [services, setServices] = useState<Service[]>([])
  useEffect(() => {
    const loadData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/services")
        const data = await response.json();
        setServices(data);
      } catch(error) {
        console.log("Failed to load services data", error);
      }
    }
    loadData();
  }, [])

  return (
    <section className="py-10 px-4 max-w-7xl mx-auto">
      <h2 className="text-5xl font-semibold text-blue-800 mb-16 text-center flex justify-center md:text-left">
        Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex overflow-hidden"
          >
            {/* Left 1/3 - Icon */}
            <div className="w-1/3 bg-indigo-50 flex items-center justify-center p-6">
              <img src={service.icon_url} alt={service.title} className="w-full h-auto object-contain" />
            </div>

            {/* Right 2/3 - Text */}
            <div className="w-2/3 p-6 flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-indigo-500 transition-colors duration-300">
                  {service.title}
                </h3>
                <ArrowRight className="w-5 h-5 text-indigo-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
              </div>
              <p className="text-gray-600 text-sm mt-2 leading-relaxed">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;