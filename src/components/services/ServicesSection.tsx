import { 
  BookCheck, 
  Building, 
  Receipt, 
  Ship, 
  Utensils, 
  Award, 
  FileCheck, 
  Users 
} from "lucide-react";
import { ServiceCard } from "./ServiceCard";
import { HelpCard } from "./HelpCard";
import { TestimonialCard } from "./TestimonialCard";
import { StatsCard } from "./StatsCard";

const services = [
  {
    icon: BookCheck,
    title: "Trademark Registration",
    description: "Get your Trademark registration from anywhere in India and protect your Brand Name/Logo/Slogan.",
    color: "text-blue-500",
  },
  {
    icon: Building,
    title: "Company Registration",
    description: "It includes all the forms of company registration, compliances, PAN and TAN, GST, change of Registered Address",
    color: "text-green-500",
  },
  {
    icon: Receipt,
    title: "GST Services",
    description: "Outsource your GST compliance to Online Legal India. India's fastest growing online corporate services.",
    color: "text-indigo-500",
  },
  {
    icon: Ship,
    title: "Import Export License",
    description: "Register your import export business under Directorate General of Foreign Trade, Ministry of Commerce...",
    color: "text-amber-500",
  },
  {
    icon: Utensils,
    title: "FSSAI Registration",
    description: "Get FSSAI certificate & license no. to utilize on your products and website as well.",
    color: "text-red-500",
  },
  {
    icon: Award,
    title: "ISO Registration",
    description: "Get your ISO Certification from anywhere in India and enhance your business credibility with globally recognized standard",
    color: "text-blue-700",
  },
  {
    icon: FileCheck,
    title: "Online Dispute Resolution",
    description: "Resolve disputes online with ease—fast, fair, and affordable Online Dispute Redressal services await you!",
    color: "text-blue-600",
  },
  {
    icon: Users,
    title: "PF & ESIC Return Filing",
    description: "File your PF & ESIC returns seamlessly from anywhere in India and ensure compliance with employee welfare regulations.",
    color: "text-orange-500",
  },
];

export function ServicesSection() {
  return (
    <section className="py-24 px-4 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold">Our Services</h2>
        <div className="w-12 h-1 bg-green-500 mx-auto mt-3"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Main service cards container */}
        <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              color={service.color}
            />
          ))}
        </div>

        {/* Right sidebar stacked vertically */}
        <div className="md:col-span-1 flex flex-col gap-6">
          
          <div className="py-4">
            <HelpCard />
          </div>
          
          <TestimonialCard />
          <div className=" gap-4">
            <StatsCard
              value="1 Lakh+"
              description="Happy Customers"
              className="bg-green-500 text-white"
            />
            
            <StatsCard
              value="25,000+"
              description="Trustpilot Reviews"
              className="bg-green-500 text-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
