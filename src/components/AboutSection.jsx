import "../css/about.css";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="split">
          <div className="images">
            <div className="image1 pt-3">
              <img
                src="/src/assets/heroSection2.jpeg"
                alt=""
                style={{ width: "250px", height: "250px" }}
                className="rounded pb-3"
              />
              <img
                src="/src/assets/heroSection3.jpeg"
                alt=""
                style={{ width: "250px", height: "180px" }}
                className="rounded"
              />
            </div>
            <div className="image2">
              <img
                src="/src/assets/heroSection1.jpeg"
                alt=""
                style={{ width: "300px", height: "300ox" }}
                className="rounded"
              />
            </div>
          </div>
          <div className="write pt-5">
            <h1>ABOUT</h1>
            <p className="pt-4 pb-4">
              We live in a world where Facility Management is booming out into a
              big opportunity for business. We at Al-Shams Al-Amana Company
              provide services in cleaning, maintenance, event management,
              renovation and development, warehousing. With the continuous
              experimentation of new products under the supervision of qualified
              professionals has led us to come up with competitive products to
              satisfy our clients.
            </p>
            <a href="">
              <button>READ MORE {`->`}</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
