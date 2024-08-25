import AboutSection from "./components/AboutSection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";
import GoalsSection from "./components/GoalsSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSlider from "./components/ProjectsSlider";
import ServicesSection from "./components/ServicesSection";
import WhyUsSection from "./components/WhyUsSection";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectsSlider />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <GoalsSection />
      <ClientsSection />
      <ContactSection />
    </>
  );
};

export default App;
