import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import AboutUs from "./components/AboutUspage"; // Import your AboutUs page component
import Project from "./components/projectSectionpage";

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
    <Router>
      <Header />
      <Routes>
        <Route
          path="/home"
          element={
            <>
              <HeroSection />
              <NoticeBoard />
              <ProjectsSlider />
              <AboutSection />
              <WhyUsSection />
              <ServicesSection />
              <GoalsSection />
              <ClientsSection />
              <ContactUs />
            </>
          }
        />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
