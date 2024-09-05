import { Container, Row, Col, Card, Image } from "react-bootstrap";
import "../css/aboutuspage.css";

import AbuImage from "../../public/assets/abu1.png";
import AliImage from "../../public/assets/ali1.jpeg";
import KabirImage from "../../public/assets/kabir1.jpeg";
import Staff1 from "../../public/assets/staff/staff1.PNG";
import Staff2 from "../../public/assets/staff/staff2.PNG";
import Staff3 from "../../public/assets/staff/staff3.jpeg";
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
import Agro1 from "../../public/assets/agro/agro1.PNG";
import Agro2 from "../../public/assets/agro/agro2.PNG";
import Agro3 from "../../public/assets/agro/agro3.PNG";
import Agro4 from "../../public/assets/agro/agro4.PNG";
import Agro5 from "../../public/assets/agro/agro5.PNG";
import Agro6 from "../../public/assets/agro/agro6.PNG";
import Agro7 from "../../public/assets/agro/agro7.PNG";
import Agro8 from "../../public/assets/agro/agro8.PNG";
import Agro9 from "../../public/assets/agro/agro9.PNG";
import Gal1 from "../../public/assets/about_page/gal1.PNG";
import Gal2 from "../../public/assets/about_page/gal2.PNG";
import Gal3 from "../../public/assets/about_page/gal3.PNG";
import Gal4 from "../../public/assets/about_page/gal4.PNG";
import Gal5 from "../../public/assets/about_page/gal5.PNG";
import Gal6 from "../../public/assets/about_page/gal6.PNG";
import Gal7 from "../../public/assets/about_page/gal7.PNG";
import Gal8 from "../../public/assets/about_page/gal8.PNG";
import Gal9 from "../../public/assets/about_page/gal9.jpeg";
import Gal10 from "../../public/assets/about_page/gal10.jpeg";
import Gal11 from "../../public/assets/about_page/gal11.jpeg";
import Gal12 from "../../public/assets/about_page/gal12.jpeg";
import Gal13 from "../../public/assets/about_page/gal13.jpeg";
import Gal14 from "../../public/assets/about_page/gal14.jpeg";
import Gal15 from "../../public/assets/about_page/gal15.jpeg";
import Gal16 from "../../public/assets/about_page/gal16.jpeg";
import Gal17 from "../../public/assets/about_page/gal17.jpeg";
import Gal18 from "../../public/assets/about_page/gal18.jpeg";
import Gal19 from "../../public/assets/about_page/gal19.jpeg";
import Gal20 from "../../public/assets/about_page/gal20.jpeg";
import Gal21 from "../../public/assets/about_page/gal21.jpeg";
import Gal22 from "../../public/assets/about_page/gal22.jpeg";
import Gal23 from "../../public/assets/about_page/gal23.jpeg";
import Gal24 from "../../public/assets/about_page/gal24.jpeg";
import Gal25 from "../../public/assets/about_page/gal25.jpeg";
import Gal26 from "../../public/assets/about_page/gal26.jpeg";
import Gal27 from "../../public/assets/about_page/gal27.jpeg";
import Gal28 from "../../public/assets/about_page/gal28.jpeg";
import Gal29 from "../../public/assets/about_page/gal29.jpeg";
import Gal30 from "../../public/assets/about_page/gal30.jpeg";
import Gal31 from "../../public/assets/about_page/gal31.jpeg";
import Gal32 from "../../public/assets/about_page/gal32.jpeg";
import Gal33 from "../../public/assets/about_page/gal33.jpeg";
import Gal34 from "../../public/assets/about_page/gal34.jpeg";
import Gal35 from "../../public/assets/about_page/gal35.jpeg";
import Gal36 from "../../public/assets/about_page/gal36.jpeg";
import Gal37 from "../../public/assets/about_page/gal37.jpeg";
import Gal38 from "../../public/assets/about_page/gal38.jpeg";
import Gal39 from "../../public/assets/about_page/gal39.jpeg";
import Gal40 from "../../public/assets/about_page/gal40.jpeg";
import Gal41 from "../../public/assets/about_page/gal41.jpeg";
import Gal42 from "../../public/assets/about_page/gal42.jpeg";
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
                  EST. PROFILE
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
                    "At Al-Shams Al-Amna Est., the word that matters most is 'value'—the value of human beings, the value of assets, and the value of services. We've built our establishment on this core principle. We value our workforce, our clients and their assets, and the services we provide.",
                  image: AbuImage,
                  phone: "+966502711132",
                },
                {
                  name: "Mohammad Anowar Hossain",
                  title: "Employment Management Manager",
                  description:
                    "At Al-Shams Al-Amna Est., the word that matters most is 'value'—the value of human beings, the value of assets, and the value of services. We've built our establishment on this core principle. We value our workforce, our clients and their assets, and the services we provide.",
                  image: AliImage,
                  phone: "+966568315773",
                },
                {
                  name: "Humayun Kabir",
                  title: "Marketing Manager",
                  description:
                    "At Al-Shams Al-Amna Est., the word that matters most is 'value'—the value of human beings, the value of assets, and the value of services. We've built our establishment on this core principle. We value our workforce, our clients and their assets, and the services we provide.",
                  image: KabirImage,
                  phone: "+966545666218",
                },
              ].map((manager, index) => (
                <Col key={index} md={12} className="mb-4">
                  <Card className="manager-card text-center">
                    <Row noGutters>
                      <Col md={12} className="manager-image-col">
                        <Image
                          src={manager.image}
                          fluid
                          className="manager-image"
                          style={{ height: "270px" }}
                        />
                      </Col>
                      <Col md={12}>
                        <Card.Body className="d-flex flex-column justify-content-center">
                          <Card.Title className="mt-3 fw-bold">
                            {manager.name}
                          </Card.Title>
                          <Card.Subtitle className="mt-2 text-muted fw-bolder">
                            {manager.title}
                          </Card.Subtitle>
                          <Card.Text className="mt-1">
                            <a
                              href={`tel:${manager.phone}`}
                              className="phone-link"
                            >
                              Phone: {manager.phone}
                            </a>
                          </Card.Text>
                          <Card.Text>
                            <a
                              href={`mailto:Sacompanymakkah@gmail.com`}
                              className="phone-link"
                            >
                              Email: Sacompanymakkah@gmail.com
                            </a>
                          </Card.Text>
                          <Card.Text className="mt-1">
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
              <h1 id="main-title">OUR OFFICIAL STAFF</h1>
              <hr />
            </div>
            <div className="card__container">
              <article className="card__article">
                <img src={Staff1} alt="Maintenance" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">KHAYRUL HASAN</h2>
                  <p className="text-center">COORDINATOR</p>
                  <p className="text-center">
                    <a href="tel:+966549851693" className="phone-link">
                      Phone: +966549851693
                    </a>
                  </p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff2} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD HASIBUL BASHAR</h2>
                  <p className="text-center">ACCOUNTANT</p>
                  <p className="text-center">
                    <a
                      href="tel:+966578209137
"
                      className="phone-link"
                    >
                      Phone: +966578209137
                    </a>
                  </p>
                </div>
              </article>

              <article className="card__article">
                <img src={Staff3} alt="Maintenance" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD RASEL SHEIK</h2>
                  <p className="text-center">SUPERVISOR</p>
                  <p className="text-center">
                    <a
                      href="tel:+966543076308

"
                      className="phone-link"
                    >
                      Phone: +966543076308
                    </a>
                  </p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff4} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">KHALED MOSHAROF</h2>
                  <p className="text-center">SUPERVISOR</p>
                  <p className="text-center">
                    <a
                      href="tel:+966581139829

"
                      className="phone-link"
                    >
                      Phone: +966581139829
                    </a>
                  </p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff5} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD TURJOY HOSSAIN</h2>
                  <p className="text-center">TEAM LEADER</p>
                  <p className="text-center">
                    <a
                      href="tel:+966578224965

"
                      className="phone-link"
                    >
                      Phone: +966578224965
                    </a>
                  </p>
                </div>
              </article>

              <article className="card__article">
                <img src={Staff6} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD ARIF</h2>
                  <p className="text-center">TEAM LEADER</p>
                  <p className="text-center">
                    <a
                      href="tel:+966571262598

"
                      className="phone-link"
                    >
                      Phone: +966571262598
                    </a>
                  </p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff7} alt="Maintenance" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">MD HRYDOY</h2>
                  <p className="text-center">TEAM LEADER</p>
                  <p className="text-center">
                    <a href="tel:+966543379023" className="phone-link">
                      Phone: +966543379023
                    </a>
                  </p>
                </div>
              </article>
              <article className="card__article">
                <img src={Staff8} alt="Pest Control" className="card__img" />
                <div className="card__data">
                  <h2 className="card__title">JABEDUL PAVEL</h2>
                  <p className="text-center">DRIVER</p>
                  <p className="text-center">
                    <a
                      href="tel:+966562202761


"
                      className="phone-link"
                    >
                      Phone: +966562202761
                    </a>
                  </p>
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
          <h2 className="section-title">AL-SHAMS AL-AMNA Est. INFIGURES</h2>
          <Row>
            {[
              {
                img: Inf1,
                label: "AL-SHAMS AL-AMNA Est.",
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
          <h2 className="section-title">SA Est. ACCOMMODATION GALLERY</h2>
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

        <Container className="accommodation-gallery my-5">
          <h2 className="section-title">OUR SA AGRO FARM</h2>
          <Row>
            {[
              Agro1,
              Agro2,
              Agro3,
              Agro4,
              Agro5,
              Agro6,
              Agro7,
              Agro8,
              Agro9,
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
              Imp3,
              Imp1,
              Imp2,
              Gal9,
              Gal10,
              Gal11,
              Gal12,
              Gal13,
              Gal14,
              Gal15,
              Gal16,
              Gal17,
              Gal18,
              Gal19,
              Gal20,
              Gal21,
              Gal1,
              Gal2,
              Gal3,
              Gal4,
              Gal5,
              Gal33,
              Gal34,
              Gal35,
              Gal36,
              Gal37,
              Gal38,
              Gal39,
              Gal40,
              Gal41,
              Gal42,
              Imp4,
              Gal6,
              Gal7,
              Gal8,
              Gal22,
              Gal23,
              Gal24,
              Gal25,
              Gal26,
              Gal27,
              Gal28,
              Gal29,
              Gal30,
              Gal31,
              Gal32,

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
