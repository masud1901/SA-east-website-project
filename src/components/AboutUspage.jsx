import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../css/aboutuspage.css";

import AbuImage from "../../public/assets/abu1.png";
import AliImage from "../../public/assets/ali1.jpeg";
import KabirImage from "../../public/assets/kabir1.jpeg";
import Staff1 from "../../public/assets/staff/staff1.PNG";
import Staff2 from "../../public/assets/staff/staff2.PNG";
import Staff3 from "../../public/assets/staff/staff3.PNG";
import Staff4 from "../../public/assets/staff/staff4.PNG";
import Staff5 from "../../public/assets/staff/staff5.PNG";
import Staff6 from "../../public/assets/staff/staff6.PNG";
import Staff7 from "../../public/assets/staff/staff7.PNG";
import Staff8 from "../../public/assets/staff/staff8.PNG";
import Staff9 from "../../public/assets/staff/staff9.jpeg";
import Inf1 from "../../public/assets/inf1.png";
import Inf2 from "../../public/assets/inf2.png";
import Inf3 from "../../public/assets/inf3.png";
import Inf4 from "../../public/assets/inf4.png";
import Inf5 from "../../public/assets/inf5.png";
import Inf6 from "../../public/assets/inf6.png";
import Inf7 from "../../public/assets/inf7.png";
import Inf8 from "../../public/assets/inf8.png";
import Acc1 from "../../public/assets/about_page/acc1.PNG";
import Acc2 from "../../public/assets/about_page/acc2.PNG";
import Acc3 from "../../public/assets/about_page/acc3.PNG";
import Acc4 from "../../public/assets/about_page/acc4.PNG";
import Acc5 from "../../public/assets/about_page/acc5.PNG";
import Gal1 from "../../public/assets/about_page/gal1.PNG";
import Gal2 from "../../public/assets/about_page/gal2.PNG";
import Gal3 from "../../public/assets/about_page/gal3.PNG";
import Gal4 from "../../public/assets/about_page/gal4.PNG";
import Gal5 from "../../public/assets/about_page/gal5.PNG";
import Gal6 from "../../public/assets/about_page/gal6.PNG";
import Gal7 from "../../public/assets/about_page/gal7.PNG";
import Imp1 from "../../public/assets/about_page/imp1.jpeg";
import Imp2 from "../../public/assets/about_page/imp2.jpeg";
import Imp3 from "../../public/assets/about_page/imp3.jpeg";
import Imp4 from "../../public/assets/about_page/imp4.jpeg";

const AboutUs = () => {
  return (
    <>
      <section id="aboutUS">
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
                  image: AbuImage,
                },
                {
                  name: "Mohammad Anowarr Hossain",
                  title: "Employment Management Manager",
                  description:
                    "At Al-Shams Al-Anma Est. the only thing that matters is this word [value] the value of Human Being, the value of Assets, and the value of Services, at Al-Shams Al-Anma company we built our company at the core this word. We value our man power, our clients and their assets and the services we provide. ",
                  image: AliImage,
                },
                {
                  name: "Humayun Kabir",
                  title: "Marketing Manager",
                  description:
                    "At Al-Shams Al-Anma Est. the only thing that matters is this word [value] the value of Human Being, the value of Assets, and the value of Services, at Al-Shams Al-Anma company we built our company at the core this word. We value our man power, our clients and their assets and the services we provide. ",
                  image: KabirImage,
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
                          <Card.Title className="mt-5 fw-bold">
                            {manager.name}
                          </Card.Title>
                          <Card.Subtitle className="mb-2 mt-3 text-muted fw-bolder">
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
                <img src={Staff1} alt="Maintenance" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">KHAYRUL HASAN</h2>
                  <p className="text-center">COORDINATOR</p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff2} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD HASIBUL BASHAR</h2>
                  <p className="text-center">ACCOUNTANT</p>
                </div>
              </article>

              <article className="card__article">
                <img src={Staff3} alt="Maintenance" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD RASEL SHEIK</h2>
                  <p className="text-center">SUPERVISOR</p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff4} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">KHALED MOSHAROF</h2>
                  <p className="text-center">SUPERVISOR</p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff5} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD TURJOY HOSSAIN</h2>
                  <p className="text-center">TEAM LEADER</p>
                </div>
              </article>

              <article className="card__article">
                <img src={Staff6} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD ARIF</h2>
                  <p className="text-center">TEAM LEADER</p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff7} alt="Maintenance" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD HRYDOY</h2>
                  <p className="text-center">TEAM LEADER</p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff8} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">JABEDUL PAVEL</h2>
                  <p className="text-center">DRIVER</p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff9} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD. KOKHON</h2>
                  <p className="text-center">DRIVER</p>
                </div>
              </article>
            </div>
          </div>
        </div>
        <Container className="in-figures my-5">
          <h2 className="section-title">AL-SHAMS AL-AMNA COMPANY IN FIGURES</h2>
          <Row>
            {[
              {
                img: Inf1,
                label: "AL-SHAMS AL-AMNA COMPANY ESTABLISHED",
                value: "2023",
              },
              {
                img: Inf2,
                label: "WAREHOUSE AREA",
                value: "1500 m²",
              },
              {
                img: Inf3,
                label: "ACCOMMODATION AREA",
                value: "5000 m²",
              },
              {
                img: Inf4,
                label: "MANPOWER",
                value: "300+",
              },
              {
                img: Inf5,
                label: "NO. OF CLIENTS",
                value: "100+",
              },
              {
                img: Inf6,
                label: "BUSES FOR TRANSPORTATION",
                value: 3,
              },
              {
                img: Inf7,
                label: "TRANSFERRING VEHICLES",
                value: 5,
              },
              {
                img: Inf8,
                label: "PRIVATE CARS FOR OFFICIAL STAFF TRANSPORTATION",
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
          <h2 className="section-title">SA COMPANY ACCOMMODATION GALLERY</h2>
          <Row>
            {[
              Acc1,
              Acc2,
              Acc3,
              Acc4,
              Acc5,
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
              Gal1,
              Gal2,
              Gal3,
              Gal4,
              Gal5,
              Gal6,
              Gal7,
              Imp1,
              Imp2,
              Imp3,
              Imp4,
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
      </section>
    </>
  );
};

export default AboutUs;
