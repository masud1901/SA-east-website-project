const AboutSection = () => {
  return (
    <section id="about" className="about-section py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://via.placeholder.com/500x300"
              alt="About Us"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h2>About Us</h2>
            <p>Brief description about the company.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
