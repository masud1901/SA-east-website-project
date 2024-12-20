import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../public/assets/logo.PNG";
import "../css/header.css";

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

  // Scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="hotline-section">
        <div className="container">
          <div className="row">
            <div className="col text-end">
              <p className="hotline-text">
                <a href="tel:+966568315773" className="hotline-text">
                  Hotline: +966568315773,
                </a>
                <a href="tel:+966573083568" className="hotline-text">
                  +966573083568
                </a>
                <br />
                <a
                  href="mailto:support@saestgroup.com"
                  className="hotline-text"
                >
                  Email: support@saestgroup.com
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
            <Link to="/home" className="navbar-brand" onClick={scrollToTop}>
              <img src={logo} alt="" className="logo" />
            </Link>
          </div>
          <div>
            <nav className="navbar mt-2 pe-5 me-5 d-none d-md-flex">
              <Link to="/home" onClick={scrollToTop}>
                HOME
              </Link>
              <a href="/all-notices" onClick={scrollToTop}>
                JOB NOTICE
              </a>
              <Link to="/project" onClick={scrollToTop}>
                PROJECT
              </Link>
              <Link to="/about" onClick={scrollToTop}>
                ABOUT
              </Link>
              <Link to="/service" onClick={scrollToTop}>
                SERVICES
              </Link>
              <Link to="/contact" onClick={scrollToTop}>
                CONTACT
              </Link>
              {/* <a href="/home" onClick={scrollToTop}>
                <img
                  src={arabicImage}
                  alt=""
                  style={{ width: "35px", height: "auto" }}
                />
                ENGLISH
              </a> */}
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
        <Link
          to="/home"
          onClick={() => {
            scrollToTop();
            toggleSidebar();
          }}
        >
          HOME
        </Link>
        <Link
          to="/all-notices"
          onClick={() => {
            scrollToTop();
            toggleSidebar();
          }}
        >
          JOB NOTICE
        </Link>
        <Link
          to="/project"
          onClick={() => {
            scrollToTop();
            toggleSidebar();
          }}
        >
          PROJECTS
        </Link>
        <Link
          to="/about"
          onClick={() => {
            scrollToTop();
            toggleSidebar();
          }}
        >
          ABOUT
        </Link>
        <Link
          to="/service"
          onClick={() => {
            scrollToTop();
            toggleSidebar();
          }}
        >
          SERVICES
        </Link>
        <Link
          to="/contact"
          onClick={() => {
            scrollToTop();
            toggleSidebar();
          }}
        >
          CONTACT
        </Link>
        {/* <a
          href=""
          onClick={() => {
            scrollToTop();
            toggleSidebar();
          }}
        >
          <img
            src={arabicImage}
            alt=""
            style={{ width: "35px", height: "auto" }}
          />
          ENGLISH
        </a> */}
      </div>
    </>
  );
};

export default Header;
