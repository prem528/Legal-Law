import React from 'react';
import { Button } from '../ui/button';
 


const Navbar: React.FC = () => {
    return (
        <header className="w-full z-30 bg-white sticky top-0 border-b border-gray-100 shadow-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    <div className="flex items-center gap-2">
                        <div className="relative">
                            <div className="h-8 w-8 rounded-full bg-brand-blue"></div>
                            <div className="absolute -right-1 -top-1 h-4 w-4 rounded-full bg-brand-orange"></div>
                        </div>
                        <span className="text-xl font-bold text-brand-blue">LegalHub</span>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <a href="#" className="text-gray-700 hover:text-brand-orange transition-colors">
                            Home
                        </a>
                        <a href="#services" className="text-gray-700 hover:text-brand-orange transition-colors">
                            Services
                        </a>
                        <a href="#whyus" className="text-gray-700 hover:text-brand-orange transition-colors">
                            Why Us
                        </a>
                        <a href="#faq" className="text-gray-700 hover:text-brand-orange transition-colors">
                            FAQ
                        </a>
                        <a href="#contact" className="text-gray-700 hover:text-brand-orange transition-colors">
                            Contact
                        </a>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Button variant="outline" className="hidden md:inline-flex">Log In</Button>
                        <Button className="bg-brand-orange hover:bg-brand-orange/90">Get Consultation</Button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
