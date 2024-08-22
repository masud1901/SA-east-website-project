const Image = ({ src, alt, className }) => (
  <figure className={`mb-3 ${className}`}>
    <img
      src={src}
      alt={alt}
      className="img-fluid rounded shadow-sm"
      style={{ width: "100%", height: "auto", objectFit: "cover" }}
    />
  </figure>
);

const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5 bg-white">
      <div className="container">
        <h2 className="text-primary fs-1 mb-4">ABOUT</h2>
        <div className="row">
          <article className="col-md-8 mb-4 mb-md-0">
            <p className="text-muted">
              We live in a world where Facility Management is booming into a big
              opportunity for business. We at Al-Shams Al-Amana Company provide
              services in cleaning, maintenance, event management, renovation,
              and development, warehousing. Continuous experimentation with new
              products under the supervision of qualified professionals has led
              us to develop competitive products that satisfy our clients.
            </p>
            <a href="#" className="text-primary font-weight-bold">
              READ MORE →
            </a>
          </article>
          <aside className="col-md-4">
            <div className="row">
              <Image
                src="src/assets/heroSection1.jpeg"
                alt="Worker in yellow helmet"
                className="col-12 col-md-6"
              />
              <Image
                src="src/assets/heroSection2.jpeg"
                alt="Worker welding"
                className="col-12 col-md-6"
              />
              <Image
                src="src/assets/heroSection3.jpeg"
                alt="Workers on site"
                className="col-12"
              />
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
