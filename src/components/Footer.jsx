import { Facebook, Twitter, Instagram } from "lucide-react";
import "../css/footer.css";

const Footer = () => {
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
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="footer__link">
                About us
              </a>
            </li>
            <li>
              <a href="#notice" className="footer__link">
                Notice board
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact us
              </a>
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
