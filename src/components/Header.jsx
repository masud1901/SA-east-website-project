import { useState, useEffect } from "react";
import "../css/header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarShrunk, setIsNavbarShrunk] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Shrink navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 50) {
        setIsNavbarShrunk(true);
      } else {
        setIsNavbarShrunk(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Close sidebar when screen is resized
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 830) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="hotline-section">
        <div className="container">
          <div className="row">
            <div className="col text-end">
              <p className="hotline-text">Hotline: +123 456 7890</p>
            </div>
          </div>
        </div>
      </div>
      <header
        className={`bg-white sticky-top ${
          isNavbarShrunk ? "navbar-shrink" : ""
        }`}
      >
        <div className="d-flex justify-content-between align-items-center fw-bold">
          <div className="logo-item">
            <a className="navbar-brand " href="">
              <img src="/src/assets/logo.PNG" alt="" className="logo" />
            </a>
          </div>
          <div>
            <nav className="navbar mt-2 pe-5 me-5 d-none d-md-flex">
              <a href="">JOB NOTICE</a>
              <a href="">PROJECTS</a>
              <a href="">ABOUT</a>
              <a href="">SERVICES</a>
              <a href="">GOALS</a>
              <a href="">CONTACT</a>
              <a href="" id="language">
                <img
                  src="/src/assets/language.png"
                  alt=""
                  style={{ width: "35px", height: "auto" }}
                />
              </a>
            </nav>
            <button
              className="navbar-toggler d-md-none me-2"
              type="button"
              onClick={toggleSidebar}
            >
              <FaBars size={30} color="#023e8a" />
            </button>
          </div>
        </div>
      </header>

      <div className={`sidebar fw-bold mt-5 ${isSidebarOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ×
        </button>
        <a href="" onClick={toggleSidebar}>
          JOB NOTICE
        </a>
        <a href="#projects" onClick={toggleSidebar}>
          PROJECTS
        </a>
        <a href="#about" onClick={toggleSidebar}>
          ABOUT
        </a>
        <a href="#services" onClick={toggleSidebar}>
          SERVICES
        </a>
        <a href="#goals" onClick={toggleSidebar}>
          GOALS
        </a>
        <a href="#contact" onClick={toggleSidebar}>
          CONTACT
        </a>
        <a href="" onClick={toggleSidebar}>
          <img
            src="/src/assets/language.png"
            alt=""
            style={{ width: "35px", height: "auto" }}
          />
        </a>
      </div>
    </>
  );
};

export default Header;
