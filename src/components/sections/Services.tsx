import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon:  "https://png.pngtree.com/png-vector/20240314/ourmid/pngtree-litigation-support-vector-concept-illustration-png-image_11949755.png",
      title: "Litigation Services",
      description: "Expert representation for civil, criminal, and corporate legal matters in courts across India."
    },
    {
      icon: "https://img.freepik.com/premium-vector/conceptual-illustration-document-management-organization_1263357-34825.jpg?semt=ais_hybrid&w=740",
      title: "Document Drafting & Review",
      description: "Professional drafting, reviewing, and verification of contracts, agreements, wills, and legal documents."
    },
    {
      icon:  "https://karnatakajudiciary.kar.nic.in/newwebsite/assets/images/legalservices.png",
      title: "Legal Consultation",
      description: "Get expert advice on a wide range of issues including property disputes, family matters, and corporate law."
    },
    {
      icon: "https://icon2.cleanpng.com/20180218/qpw/avhb7etli.webp",
      title: "Dispute Resolution",
      description: "Mediation and arbitration services to resolve disputes quickly without lengthy litigation."
    },
    {
      icon:  "https://www.vanillalaw.law/wp-content/uploads/2023/11/231127-VL-Corporate-Law-Essentials2.png",
      title: "Corporate Legal Services",
      description: "Advisory and compliance services for startups, SMEs, and large enterprises to ensure smooth operations."
    },
    {
      icon: "https://cdni.iconscout.com/illustration/premium/thumb/child-custody-or-alimony-illustration-download-in-svg-png-gif-file-formats--family-law-couple-divorce-book-and-children-2-pack-people-illustrations-3697000.png" ,
      title: "Family Law Assistance",
      description: "Support in divorce cases, child custody, alimony, and succession planning with confidentiality and care."
    }
  ];

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
              <img src={service.icon} alt={service.title} className="w-full h-auto object-contain" />
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