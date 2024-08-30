import { Phone, Mail } from "lucide-react";
import "../css/contactUs.css";

const ContactSection = () => {
  return (
    <div className="contact-section reveal">
      <h2 className="contact-title mb-2">
        <span>Contact Our</span> <span>Management Team</span>
      </h2>
      <div className="contact-info mt-4">
        <div className="contact-item">
          <Phone className="contact-icon" size={28} />
          <a href="tel:+966564997029">
            <span className="contact-item-text">+966564997029</span>
          </a>
        </div>
        <div className="contact-item">
          <Mail className="contact-icon" size={28} />
          <a href="mailto:example@email.com">
            <span className="contact-item-text">sacompany@web.mail</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
