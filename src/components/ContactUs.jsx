import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/contactUs.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  if (isSubmitted) {
    return (
      <div
        className="contact-container d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        <div className="contact-card text-center p-5">
          <div className="contact-card-body">
            <h2 className="contact-card-title mb-4">Thank You!</h2>
            <p className="contact-info-text">
              Your message has been sent successfully. We'll get back to you
              soon!
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact-container py-5">
      <div className="contact-card">
        <div className="row g-0">
          <div className="col-md-6">
            <div className="contact-card-body">
              <h2 className="contact-card-title text-center mb-4">
                Contact Us
              </h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`contact-form-control ${
                      errors.name ? "is-invalid" : ""
                    }`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                  />
                  {errors.name && (
                    <div className="invalid-feedback">{errors.name}</div>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className={`contact-form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <div className="invalid-feedback">{errors.email}</div>
                  )}
                </div>
                <div className="mb-3">
                  <textarea
                    className={`contact-form-control ${
                      errors.message ? "is-invalid" : ""
                    }`}
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                  ></textarea>
                  {errors.message && (
                    <div className="invalid-feedback">{errors.message}</div>
                  )}
                </div>
                <div className="d-grid">
                  <button
                    type="submit"
                    className="contact-btn contact-btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column">
            <div className="contact-map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3716.8992193689182!2d39.909966399999995!3d21.314998199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c209d6531bffd7%3A0x1a9b4a627dc91e81!2sAL%20SHAMS%20AL%20AMNA%20COMPANY!5e0!3m2!1sen!2sbd!4v1725309273257!5m2!1sen!2sbd"
                className="contact-map"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="contact-info-container p-4">
              <h5 className="contact-info-title mb-2">Our Location</h5>
              <p className="contact-info-text mb-2">
                العوالي MDAC7899، 7899 شارع 167 الحسينية 1، 4351، حي العوالي،
                Makkah 24377, Saudi Arabia
              </p>
              <p className="contact-info-text mb-1">
                <a href="tel:+966564997029" className="text-white">
                  <strong>Phone:</strong> +966564997029
                </a>
              </p>
              <p className="contact-info-text mb-0">
                <a href="mailto:sagroup@web.mail" className="text-white">
                  <strong>Email:</strong> sagroup@web.mail
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
