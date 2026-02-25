import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import TrustedSection from "./components/TrustedSection";
import StatsSection from "./components/Numberssection";
import LeadershipSection from "./components/LeadershipSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TrustedSection />
      <StatsSection />
      <LeadershipSection />
      <ContactSection />
      <Footer />
    </>
  );
}