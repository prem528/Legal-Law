import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '../ui/accordion';


const faqData = [
    {
        question: "What areas of law do you practice?",
        answer: "We cover a wide range of legal areas including business law, family law, property law, criminal defense, personal injury, estate planning, and more. Our team of specialized attorneys ensures you get expert advice in your specific legal matter."
    },
    {
        question: "How much do your services cost?",
        answer: "Our fees vary depending on the type of legal service you need. We offer transparent pricing with no hidden fees. For many services, we provide fixed-fee options, and we also offer flexible payment plans. You can schedule a free initial consultation to get a quote for your specific case."
    },
    {
        question: "Can I get a consultation before hiring your firm?",
        answer: "Yes! We offer initial consultations where you can discuss your legal matter with one of our attorneys. This helps us understand your needs and allows you to determine if our services are a good fit for you. You can schedule a consultation through our website or by calling our office."
    },
    {
        question: "How long does it take to resolve a case?",
        answer: "The timeline for resolving legal matters varies greatly depending on the complexity of the case, court schedules, and many other factors. During your consultation, your attorney will provide an estimated timeline based on the details of your specific situation."
    },
    {
        question: "Do you offer virtual legal services?",
        answer: "Yes, we provide virtual legal consultations and services for clients who prefer remote assistance. Our secure video conferencing system ensures that all communications remain confidential, and we can handle document signing electronically for your convenience."
    },
    {
        question: "What should I bring to my first consultation?",
        answer: "For your initial consultation, please bring any relevant documents related to your legal matter, such as contracts, correspondence, legal notices, etc. Also, prepare a summary of important dates and events related to your case. This will help our attorneys provide more accurate advice during the consultation."
    },
    {
        question: "How does attorney-client privilege work?",
        answer: "Attorney-client privilege means that all communications between you and your attorney remain confidential. This legal protection ensures that your attorney cannot reveal any information you share without your permission. This privilege encourages open and honest communication, allowing us to represent you effectively."
    },
    {
        question: "Can you represent clients from other states?",
        answer: "Our attorneys are licensed to practice in specific states. However, we have attorneys licensed in multiple jurisdictions, and in some cases, we can work with local counsel in areas where we're not directly licensed. Please contact us to discuss your specific situation."
    }
];

const FAQ: React.FC = () => {
    return (
        <section className="py-16 bg-white" id="faq">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Launched FAQ</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our legal services.
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqData.map((item, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-md bg-gray-50">
                                <AccordionTrigger className="px-6 py-4 font-semibold hover:text-brand-orange">
                                    {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="px-6 pb-4 text-gray-600">
                                    {item.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
