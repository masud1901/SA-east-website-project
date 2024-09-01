import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
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
import AboutUs from "./components/AboutUspage";
import Project from "./components/projectSectionpage";
import ServicePage from "./components/servicepage";

const App = () => {
  useEffect(() => {
    const revealOnScroll = () => {
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
    };

    // Add event listener for scroll
    window.addEventListener("scroll", revealOnScroll);

    // Trigger the reveal on page load
    revealOnScroll();

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
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
        <Route path="/service" element={<ServicePage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
