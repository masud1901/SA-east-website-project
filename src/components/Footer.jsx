import { Facebook, Twitter, Instagram } from "lucide-react";
import "../css/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer
      className="footer"
      style={{
        background: "linear-gradient(to bottom, #023E8A, #021d5e)",
      }}
    >
      <div className="footer__content">
        <div className="footer__logo-section">
          <img
            src="src/assets/main-logo.png"
            alt="Company Logo"
            className="footer__logo"
          />
          <p className="footer__description">
            We are a Saudi foundation that provides its services to
            international and local companies, ensuring fast performance and the
            highest results.
          </p>
        </div>

        <div className="footer__links">
          <h3 className="footer__section-title">Quick Links</h3>
          <ul className="footer__link-list">
            <li>
              <Link to="/home" className="footer__link" onClick={scrollToTop}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/project"
                className="footer__link"
                onClick={scrollToTop}
              >
                Project
              </Link>
            </li>
            <li>
              <Link to="/about" className="footer__link" onClick={scrollToTop}>
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className="footer__link"
                onClick={scrollToTop}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="footer__link"
                onClick={scrollToTop}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__social">
          <h3 className="footer__section-title">Follow Us</h3>
          <div className="footer__social-icons">
            <div className="icon-names-and-logo">
              <a href="#facebook" className="footer__social-icon">
                <Facebook size={30} />
              </a>
              <span>Facebook</span>
            </div>
            <div className="icon-names-and-logo">
              <a href="#twitter" className="footer__social-icon">
                <Twitter size={30} />
              </a>
              <span>Twitter</span>
            </div>
            <div className="icon-names-and-logo">
              <a href="#instagram" className="footer__social-icon">
                <Instagram size={30} />
              </a>
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__copyright">
        Copyright © {new Date().getFullYear()}. ASAA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
