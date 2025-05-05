
import { ServiceCard } from "./ServiceCard";
import { HelpCard } from "./HelpCard";
import { TestimonialCard } from "./TestimonialCard";
import { StatsCard } from "./StatsCard";

const services = [
  {
    image: "https://www.easytaxplanner.com/blogs/wp-content/uploads/2022/06/trademarkregistered-598a056768e1a200116dc33a.jpg",
    title: "Trademark Registration",
    description: "Get your Trademark registration from anywhere in India and protect your Brand Name/Logo/Slogan.",

  },
  {
    image: "https://caindelhi.in/wp-content/uploads/2021/02/company-registrations-1-1200x900.jpg",
    title: "Company Registration",
    description: "It includes all the forms of company registration, compliances, PAN and TAN, GST, change of Registered Address",

  },
  {
    image: "https://www.alankit.com/blog/blogimage/gstblog2.jpg",
    title: "GST Services",
    description: "Outsource your GST compliance to Online Legal India. India's fastest growing online corporate services.",

  },
  {
    image: "https://complianceease.in/images/start-up/iec-code-import-export.jpg",
    title: "Import Export License",
    description: "Register your import export business under Directorate General of Foreign Trade, Ministry of Commerce...",

  },
  {
    image: "https://www.amritaz.com/wp-content/uploads/2021/06/fssai-logo.png",
    title: "FSSAI Registration",
    description: "Get FSSAI certificate & license no. to utilize on your products and website as well.",

  },
  {
    image: "https://www.koshercertified.in/wp-content/uploads/2021/09/ISO-certification-1536x1084-1-495x400.jpeg",
    title: "ISO Registration",
    description: "Get your ISO Certification from anywhere in India and enhance your business credibility with globally recognized standard",

  },
  {
    image: "https://vservesolution.com/wp-content/uploads/2024/07/online.png",
    title: "Online Dispute Resolution",
    description: "Resolve disputes online with ease—fast, fair, and affordable Online Dispute Redressal services await you!",

  },
  {
    image: "https://www.cabkgoyal.com/wp-content/uploads/2024/02/ESI-PF-Return.png",
    title: "PF & ESIC Return Filing",
    description: "File your PF & ESIC returns seamlessly from anywhere in India and ensure compliance with employee welfare regulations.",

  },
];

export function ServicesSection() {
  return (
    <>
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-24 will-change-transform">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-semibold mb-6">
              Legal  Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb">
              Stay informed with the latest legal news, insights, and expert advice
              on business law, compliance, and regulatory updates.
            </p>
   
          </div>
        </div>
      </section>
      <section className="py-24 px-4 max-w-7xl mx-auto min-h-screen">

        {/* <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Our Services</h2>
          <div className="w-12 h-1 bg-green-500 mx-auto mt-3"></div>
        </div> */}

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Main service cards container */}
          <div className="md:col-span-2 lg:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                image={service.image}
                key={index}
                title={service.title}
                description={service.description}

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
                className="bg-blue-500 text-white"
              />

              <StatsCard
                value="25,000+"
                description="Trustpilot Reviews"
                className="bg-yellow-500 text-white"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
