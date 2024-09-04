import { useEffect } from "react";
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
import ProjectPage from "./components/projectSectionpage";
import ServicePage from "./components/servicepage";
import Login from "./components/Login";
import Admin from "./components/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AllNotices from './components/AllNotices';



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

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();

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
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/all-notices" element={<AllNotices />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
