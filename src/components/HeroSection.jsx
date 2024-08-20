const HeroSection = () => {
  return (
    <section
      className="hero-section text-white"
      style={{
        backgroundImage: "url(https://via.placeholder.com/1500x500)",
        backgroundSize: "cover",
        padding: "100px 0",
      }}
    >
      <div className="container text-center">
        <h1 className="display-4">AL SHAHA ALAMIA ESTABLISHMENT</h1>
        <p className="lead">Subtitle or slogan here</p>
        <a href="#projects" className="btn btn-primary btn-lg">
          Learn More
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
