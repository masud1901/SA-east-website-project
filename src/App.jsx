import NoticeBoard from "./components/noticeBoard";
import AboutSection from "./components/AboutSection";
import ClientsSection from "./components/ClientsSection";
import Footer from "./components/Footer";
import GoalsSection from "./components/GoalsSection";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ContactUs from "./components/ContactUs";
import ProjectsSlider from "./components/ProjectsSlider";
import WhyUsSection from "./components/WhyUsSection";
import ServicesSection from "./components/ServicesSection";

const App = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <NoticeBoard />
      <ProjectsSlider />
      <AboutSection />
      <WhyUsSection />
      <ServicesSection />
      <GoalsSection />
      <ClientsSection />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
