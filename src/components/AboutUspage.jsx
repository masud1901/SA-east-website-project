import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/aboutuspage.css";

const AboutUs = () => {
  return (
    <>
      <small className="smallHeader">
        {" "}
        <Link to="/home">Home</Link> » <Link to="/about">About</Link>
      </small>
      <section id="aboutUS" className="mt-3">
        <div className="about-us-page">
          <Container>
            <Row>
              <Col md={6} className="text-left">
                <h1 className="main-title">
                  AL-SHAMS AL-AMNA
                  <br />
                  est. PROFILE
                </h1>
                <p className="operations">
                  Operations & Maintenance * Recruitment & Staff Outsourcing{" "}
                  <br />
                  Support Services * Landscaping * Pest Control * Security
                  Guarding <br />
                  MEP & Renovation * Janitorial * Specialized Cleaning
                </p>
              </Col>
            </Row>
          </Container>

          <Container className="management-section my-5">
            <h2 className="section-title">
              MEET OUR MANAGEMENT
              <hr />
            </h2>
            <Row>
              {[
                {
                  name: "Ali Bin Abu Talib Al-Ghubaishi",
                  title: "General Manager",
                  description:
                    "At Al-Shams Al-Anma Est. the only thing that matters is this word [value] the value of Human Being, the value of Assets, and the value of Services, at Al-Shams Al-Anma company we built our company at the core this word. We value our man power, our clients and their assets and the services we provide. ",
                  image: "/src/assets/abu.PNG",
                },
                {
                  name: "Mohammad Anowarr Hossain",
                  title: "Employment Management Manager",
                  description:
                    "At Al-Shams Al-Anma Est. the only thing that matters is this word [value] the value of Human Being, the value of Assets, and the value of Services, at Al-Shams Al-Anma company we built our company at the core this word. We value our man power, our clients and their assets and the services we provide. ",
                  image: "/src/assets/ali.PNG",
                },
                {
                  name: "Humayun Kabir",
                  title: "Marketing Manager",
                  description:
                    "At Al-Shams Al-Anma Est. the only thing that matters is this word [value] the value of Human Being, the value of Assets, and the value of Services, at Al-Shams Al-Anma company we built our company at the core this word. We value our man power, our clients and their assets and the services we provide. ",
                  image: "/src/assets/kabir.PNG",
                },
              ].map((manager, index) => (
                <Col key={index} md={12} className="mb-4">
                  <Card className="manager-card">
                    <Row noGutters>
                      <Col md={4} className="manager-image-col">
                        <Image
                          src={manager.image}
                          fluid
                          className="manager-image"
                          style={{ height: "300px" }}
                        />
                      </Col>
                      <Col md={8}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                          <Card.Title className="mt-5">
                            {manager.name}
                          </Card.Title>
                          <Card.Subtitle className="mb-2 mt-3 text-muted">
                            {manager.title}
                          </Card.Subtitle>
                          <Card.Text className="mt-3">
                            {manager.description}
                          </Card.Text>
                        </Card.Body>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
          <div className="container-cards reveal">
            <div className="section_of_services">
              <h1 id="main-title">OUR COMPANY’S OFFICIAL STAFF</h1>
              <hr />
            </div>
            <div className="card__container">
              <article className="card__article">
                <img
                  src="/src/assets/staff1.PNG"
                  alt="Maintenance"
                  className="card__img"
                />
                <div className="card__data">
                  <h2 className="card__title">KHAYRUL HASAN</h2>
                  <p className="text-center">COORDINATOR</p>
                </div>
              </article>
              <article className="card__article">
                <img
                  src="/src/assets/staff2.PNG"
                  alt="Pest Control"
                  className="card__img"
                />
                <div className="card__data">
                  <h2 className="card__title">MD HASIBUL BASHAR</h2>
                  <p className="text-center">ACCOUNTANT</p>
                </div>
              </article>

              <article className="card__article">
                <img
                  src="/src/assets/staff4.PNG"
                  alt="Pest Control"
                  className="card__img"
                />
                <div className="card__data">
                  <h2 className="card__title">KHALED MOSHAROF</h2>
                  <p className="text-center">SUPERVISOR</p>
                </div>
              </article>
              <article className="card__article">
                <img
                  src="/src/assets/staff3.PNG"
                  alt="Maintenance"
                  className="card__img"
                />
                <div className="card__data">
                  <h2 className="card__title">MD RASEL SHEIK</h2>
                  <p className="text-center">SUPERVISOR</p>
                </div>
              </article>
              <article className="card__article">
                <img
                  src="/src/assets/staff5.PNG"
                  alt="Pest Control"
                  className="card__img"
                />
                <div className="card__data">
                  <h2 className="card__title">MD TURJOY HOSSAIN</h2>
                  <p className="text-center">TEAM LEADER</p>
                </div>
              </article>

              <article className="card__article">
                <img
                  src="/src/assets/staff6.PNG"
                  alt="Pest Control"
                  className="card__img"
                />
                <div className="card__data">
                  <h2 className="card__title">MD ARIF</h2>
                  <p className="text-center">TEAM LEADER</p>
                </div>
              </article>
              <article className="card__article">
                <img
                  src="/src/assets/staff7.PNG"
                  alt="Maintenance"
                  className="card__img"
                />
                <div className="card__data">
                  <h2 className="card__title">MD HRYDOY</h2>
                  <p className="text-center">TEAM LEADER</p>
                </div>
              </article>
              <article className="card__article">
                <img
                  src="/src/assets/staff8.PNG"
                  alt="Pest Control"
                  className="card__img"
                />
                <div className="card__data">
                  <h2 className="card__title">JABEDUL PAVEL</h2>
                  <p className="text-center">DRIVER</p>
                </div>
              </article>

              <article className="card__article">
                <img
                  src="/src/assets/service3.PNG"
                  alt="Pest Control"
                  className="card__img"
                />
                <div className="card__data">
                  <h2 className="card__title">MD. KOKHON</h2>
                  <p className="text-center">DRIVER</p>
                </div>
              </article>
            </div>
          </div>

          <Container className="in-figures my-5">
            <h2 className="section-title">
              AL-SHAMS AL-AMNA COMPANY INFIGURES
            </h2>
            <Row>
              {[
                {
                  img: "/src/assets/inf1.jfif",
                  label: "AL-SHAMS AL-AMNA COMPANY ESTABLISHED",
                  value: "2023",
                },
                {
                  img: "/src/assets/inf2.png",
                  label: "WAREHOUSE AREA",
                  value: "1500",
                },
                {
                  img: "/src/assets/inf3.webp",
                  label: "ACCOMMODATION AREA",
                  value: "5000",
                },
                {
                  img: "/src/assets/inf4.png",
                  label: "MANPOWER",
                  value: "300",
                },
                {
                  img: "/src/assets/inf5.jpg",
                  label: "NO. OF CLIENT",
                  value: "100",
                },
                {
                  img: "/src/assets/inf6.png",
                  label: "BUSES FOR TRANSPORTATION",
                  value: 3,
                },
                {
                  img: "/src/assets/inf7.png",
                  label: "TRANSFERRING VEHICLES",
                  value: 5,
                },
                {
                  img: "/src/assets/inf8.png",
                  label: "PRIVATE CAR FOR OFFICIAL STAFF TRANSPORTATION",
                  value: 3,
                },
              ].map((figure, index) => (
                <Col key={index} md={4} className="text-center">
                  <img
                    src={figure.img}
                    alt={figure.label}
                    style={{ maxWidth: "60%", height: "auto" }} // Ensure the image is responsive
                  />
                  <h2 className="figure-value">{figure.value}</h2>
                  <p className="figure-label">{figure.label}</p>
                </Col>
              ))}
            </Row>
          </Container>
          <Container className="accommodation-gallery my-5">
            <h2 className="section-title">SA COMPANY ACCOMMODATION GALLARY</h2>
            <Row>
              {[
                "/src/assets/acc5.PNG",
                "/src/assets/acc2.PNG",
                "/src/assets/acc3.PNG",
                "/src/assets/acc4.PNG",
                "/src/assets/acc1.PNG",
                // Add more photos as needed
              ].map((photo, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Card className="photo-card">
                    <Card.Img src={photo} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>

          <Container className="photo-gallery my-5">
            <h2 className="section-title">Photo Gallery</h2>
            <Row>
              {[
                "/src/assets/gal1.PNG",
                "/src/assets/gal2.PNG",
                "/src/assets/gal3.PNG",
                "/src/assets/gal4.PNG",
                "/src/assets/gal5.PNG",
                "/src/assets/gal6.PNG",
                "/src/assets/gal7.PNG",
                "/src/assets/gal1.PNG",
                // Add more photos as needed
              ].map((photo, index) => (
                <Col key={index} md={3} className="mb-4">
                  <Card className="photo-card">
                    <Card.Img src={photo} />
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
