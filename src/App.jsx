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
  // Function to reveal elements on scroll
  function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (elementTop < windowHeight - 50) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  }

  // Event listener for scroll
  window.addEventListener("scroll", revealOnScroll);

  // Trigger the reveal on page load
  document.addEventListener("DOMContentLoaded", revealOnScroll);

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
