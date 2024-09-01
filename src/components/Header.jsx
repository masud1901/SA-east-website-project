import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarShrunk, setIsNavbarShrunk] = useState(false);

  // Toggle the sidebar
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
              <p className="hotline-text">
                <a href="tel:+966564997029" className="hotline-text">
                  Hotline: +966564997029
                </a>
              </p>
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
            <Link to="/home" lassName="navbar-brand">
              {" "}
              <img src="/src/assets/logo.PNG" alt="" className="logo" />
            </Link>
          </div>
          <div>
            <nav className="navbar mt-2 pe-5 me-5 d-none d-md-flex">
              <Link to="/home">HOME</Link>
              <a href="#notices">JOB NOTICE</a>
              <Link to="/project">PROJECT</Link>
              <Link to="/about">ABOUT</Link>
              <Link to="/service">SERVICES</Link>
              <Link to="/contact">CONTACT</Link>
              <a href="#">
                <img
                  src="/src/assets/arabic.png"
                  alt=""
                  style={{ width: "35px", height: "auto" }}
                />
                ENGLISH
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
        <Link to="/home" onClick={toggleSidebar}>
          HOME
        </Link>
        <a href="#notices" onClick={toggleSidebar}>
          JOB NOTICE
        </a>
        <a href="#projects" onClick={toggleSidebar}>
          PROJECTS
        </a>
        <Link to="/about" onClick={toggleSidebar}>
          ABOUT
        </Link>
        <a href="#services" onClick={toggleSidebar}>
          SERVICES
        </a>
        <a href="#contact" onClick={toggleSidebar}>
          CONTACT
        </a>
        <a href="" onClick={toggleSidebar}>
          <img
            src="/src/assets/arabic.png"
            alt=""
            style={{ width: "35px", height: "auto" }}
          />
          ENGLISH
        </a>
      </div>
    </>
  );
};

export default Header;
