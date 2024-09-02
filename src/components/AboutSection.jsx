import "../css/about.css";
import { Link } from "react-router-dom";
const About = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <>
      <div className="about reveal" id="about">
        <div className="split">
          <div className="images">
            <div className="image1 pt-3">
              <img
                src="/public/assets/hero_section/heroSection2.jpeg"
                alt=""
                style={{ width: "250px", height: "250px" }}
                className="rounded pb-3"
              />
              <img
                src="/public/assets/hero_section/heroSection3.jpeg"
                alt=""
                style={{ width: "250px", height: "180px" }}
                className="rounded"
              />
            </div>
            <div className="image2">
              <img
                src="/public/assets/hero_section/heroSection1.jpeg"
                alt=""
                style={{ width: "250px", height: "300px" }}
                className="rounded"
              />
            </div>
          </div>
          <div className="write pt-5">
            <h1 style={{ fontWeight: "bold" }}>ABOUT</h1>
            <p className="pt-4 pb-4">
              We live in a world where Facility Management is booming out into a
              big opportunity for business. We at{" "}
              <span className="company">Al-Shams Al-Amana Company </span>
              provide services in cleaning, maintenance, event management,
              renovation and development, warehousing. With the continuous
              experimentation of new products under the supervision of qualified
              professionals has led us to come up with competitive products to
              satisfy our clients.
            </p>
            <a href="">
              <Link to="/about" onClick={scrollToTop}>
                <button>READ MORE »</button>
              </Link>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
