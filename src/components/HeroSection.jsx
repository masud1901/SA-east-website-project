import "../css/HeroSection.css";
const HeroSection = () => {
  return (
    <div>
      <section className="section-top">
        <div className="content text-white">
          <h1 className="sideLine">AL SHAMS AL AMNA ESTABLISHMENT</h1>
          <h3>FOR OPERATION AND MAINTENANCE</h3>
          <p className="ps-4">
            Success isn`t just our goal,
            <br /> it`s a byproduct of our commitment to delivering exceptional
            services every day.
          </p>
        </div>
      </section>
      <div className="marquee">
        <div className="marquee-content mt-3">
          <span>✵</span>
          <span>AL SHAMS AL AMNA ESTABLISHMENT</span>
          <span>✵</span>
          <span>SHAMS AL-NASEEM ESTABLISHMENT</span>
          <span>✵</span>
          <span>MY COMFORT MASSAGE CENTER</span>
          <span>✵</span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
