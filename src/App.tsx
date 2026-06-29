import Header from "./components/Header";
import Hero from "./components/Hero";
import BikeFleet from "./components/BikeFleet";
import Destinations from "./components/Destinations";
import WhyUs from "./components/WhyUs";
import Packages from "./components/Packages";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans">
      <Header />
      <main>
        <Hero />
        <BikeFleet />
        <Destinations />
        <WhyUs />
        <Packages />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
