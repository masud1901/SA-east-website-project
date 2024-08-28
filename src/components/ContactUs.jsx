import { Phone, Mail } from "lucide-react";
import "../css/contactUs.css";

const ContactSection = () => {
  return (
    <div className="contact-section">
      <h2 className="contact-title">
        <span>Contact Our</span> <span>Service Team</span>
      </h2>
      <div className="contact-info">
        <div className="contact-item">
          <Phone className="contact-icon" size={28} />
          <span className="contact-item-text">+880024325345465</span>
        </div>
        <div className="contact-item">
          <Mail className="contact-icon" size={28} />
          <span className="contact-item-text">sacompany@web.mail</span>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
