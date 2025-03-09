import "../css/about.css";
import { Link } from "react-router-dom";

// Importing images
import Gal10 from "../../public/assets/about_page/gal10.jpeg";
import Gal14 from "../../public/assets/about_page/gal14.jpeg";
import Gal20 from "../../public/assets/about_page/gal20.jpeg";

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
                src={Gal10}
                alt=""
                style={{ width: "250px", height: "250px" }}
                className="rounded pb-3"
              />
              <img
                src={Gal14}
                alt=""
                style={{ width: "250px", height: "180px" }}
                className="rounded"
              />
            </div>
            <div className="image2">
              <img
                src={Gal20}
                alt=""
                style={{ width: "250px", height: "300px" }}
                className="rounded"
              />
            </div>
          </div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugit aut harum labore facere, eveniet pariatur, earum aliquam debitis error non unde sapiente tempora minus impedit repellat itaque saepe? Perspiciatis quos sit temporibus veniam libero reiciendis quia commodi vero sed quaerat rerum fuga nisi, alias expedita optio atque quae cupiditate minima dignissimos consequatur labore officia. Ea doloribus ipsum tempore vero doloremque officiis, reprehenderit itaque delectus autem voluptate ullam consequuntur culpa labore ipsa id corrupti laudantium fuga rem quasi, cupiditate sequi quae voluptates. Ipsam placeat dicta, tenetur temporibus, explicabo qui ullam, eaque fuga rerum illo iste repellat itaque? Sed, ut aliquam!</div>
          <div className="write pt-5">
            <h1 style={{ fontWeight: "bold" }}>ABOUT</h1>
            <p className="pt-4 pb-4">
              We live in a world where Facility Management is booming out into a
              big opportunity for business. We at{" "}
              <span className="company">Al-Shams Al-Amana Est. </span>
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
