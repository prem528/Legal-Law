import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages or Sections
import HeroSection from './components/sections/HeroSection';
import Features from './components/sections/Features';
import ConsultationSteps from './components/sections/ConsultationSteps';
import QuickContact from './components/forms/QuickContact';
import Services from './components/sections/Services';
import ServiceFeatures from './components/sections/ServiceFeatures';
import VirtualMembership from './components/sections/VirtualMembership';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import LawUpdates from './components/sections/LawUpdates';
import LatestBlogs from './components/sections/LatestBlogs';
import ContactForm from './components/forms/ContactForm';
import CityLocations from './components/sections/CityLocations';
 
import ServicesPage from './components/services/ServicesPage';
import BlogPost from './components/blogs/BlogPost';
import Blogs from './components/blogs/Blogs';

function HomePage() {
  return (
    <>
      <HeroSection />
      <Features />
      <ConsultationSteps />
      <QuickContact />
      <Services />
      <ServiceFeatures />
      <VirtualMembership />
      <Testimonials />
      <FAQ />
      <LawUpdates />
      <LatestBlogs />
      <ContactForm />
      <CityLocations />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        {/* Main Route Logic */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/services" element={<ServicesPage />} />
          {/* You can add more routes like /about, /contact, etc. */}
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
