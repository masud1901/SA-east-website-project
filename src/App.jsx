import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import NoticeBoard from "./components/noticeBoard";
import ProjectsSection from "./components/ProjectsSection";
import AboutSection from "./components/AboutSection";
import WhyUsSection from "./components/WhyUsSection";
import ServicesSection from "./components/ServicesSection";
import GoalsSection from "./components/GoalsSection";
import ClientsSection from "./components/ClientsSection";
import ContactSection from "./components/ContactSection";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <NoticeBoard />
      <ProjectsSection />
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
