import "../css/HeroSection.css";
const HeroSection = () => {
  return (
    <div>
      <section className="section-top">
        <div className="content text-white">
          <h1 className="sideLine">AL SHAMS AL AMNA ESTABLISHMENT</h1>
          <h3>FOR OPERATION AND MAINTENANCE</h3>
          <p className="ps-4">
            We {`don't`} build services to make money, <br />
            We make money to build better services
          </p>
        </div>
      </section>
      <div className="marquee">
        <div className="marquee-content">
          <span>✵</span>
          <span>AL SHAMS AL AMNA ESTABLISHMENT</span>
          <span>✵</span>
          <span>AL SHAMS AL AMNA ESTABLISHMENT</span>
          <span>✵</span>
          <span>AL SHAMS AL AMNA ESTABLISHMENT</span>
          <span>✵</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
