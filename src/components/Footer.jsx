import { MessageCircleMore } from "lucide-react";
import { Link } from "react-router-dom";
import mainLogo from "../../public/assets/main-logo.png";
import "../css/footer.css";

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
          <img src={mainLogo} alt="Company Logo" className="footer__logo" />
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
          <h3 className="footer__section-title">Chat with us on WhatsApp</h3>
          <div className="footer__social-icons">
            <div className="icon-names-and-logo">
              <a
                href="https://wa.me/966564997029"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-icon"
              >
                <MessageCircleMore size={45} />
                <small>
                  <span>+966564997029</span>
                </small>
              </a>
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
