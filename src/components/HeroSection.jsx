import "../css/HeroSection.css";

// Import images
import image1 from "../../public/assets/hero_section/heroSection1.jpeg";
import image2 from "../../public/assets/hero_section/heroSection2.jpeg";
import image3 from "../../public/assets/hero_section/heroSection3.jpeg";
import image4 from "../../public/assets/hero_section/p1.jpeg";
import image5 from "../../public/assets/hero_section/p2.jpeg";
import image6 from "../../public/assets/hero_section/p3.jpeg";
import image7 from "../../public/assets/hero_section/p4.jpeg";
import image8 from "../../public/assets/hero_section/p5.jpeg";
import image9 from "../../public/assets/hero_section/p6.jpeg";
import image10 from "../../public/assets/hero_section/heroSection4.jpg";
import image11 from "../../public/assets/hero_section/heroSection6.png";
import image12 from "../../public/assets/hero_section/heroSection7.png";
import image13 from "../../public/assets/hero_section/heroSection8.jpg";

const HeroSection = () => {
  return (
    <div>
      <section className="section-top">
        <img src={image2} alt="Slide 1" />
        <img src={image3} alt="Slide 2" />
        <img src={image7} alt="Slide 7" />
        <img src={image8} alt="Slide 8" />
        <img src={image1} alt="Slide 3" />
        <img src={image4} alt="Slide 4" />
        <img src={image5} alt="Slide 5" />
        <img src={image6} alt="Slide 6" />
        <img src={image9} alt="Slide 9" />
        <img src={image10} alt="Slide 10" />
        <img src={image11} alt="Slide 11" />
        <img src={image12} alt="Slide 12" />
        <img src={image13} alt="Slide 13" />

        <div className="content">
          <h1 className="sideLine">AL SHAMS AL AMNA ESTABLISHMENT</h1>
          <h3>FOR OPERATION AND MAINTENANCE</h3>
          <p className="ps-4">
            Success isn’t just our goal,
            <br /> it’s a byproduct of our commitment to delivering exceptional
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
