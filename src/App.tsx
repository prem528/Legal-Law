import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import Features from './components/sections/Features';
import ConsultationSteps from './components/sections/ConsultationSteps';
import QuickContact from './components/forms/QuickContact';
import ServiceFeatures from './components/sections/ServiceFeatures';
import Services from './components/sections/Services';
import VirtualMembership from './components/sections/VirtualMembership';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import LawUpdates from './components/sections/LawUpdates';
import LatestBlogs from './components/sections/LatestBlogs';
import ContactForm from './components/forms/ContactForm';
import CityLocations from './components/sections/CityLocations';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />
      <Features />
      <ConsultationSteps />
      <QuickContact />
      <ServiceFeatures />
      <Services />
      <VirtualMembership />
      <Testimonials />
      <FAQ />
      <LawUpdates />
      <LatestBlogs />
      <ContactForm />
      <CityLocations />
      <Footer />
    </div>
  )
}
export default App;
