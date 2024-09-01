import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/servicepage.css";

const ServicesPage = () => {
  return (
    <>
      <section id="services" className="services-section">
        <Container>
          <Row className="support-services-row">
            <Col md={6}>
              <Card className="support-card">
                <Card.Img src="/src/assets/servicepage2.jpg" />
                <Card.Body className="support-card-body">
                  <Card.Text className="support-text">
                    We provide teams, employees, sales, and loading workers for
                    many leading companies and organizations that may need them.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col
              md={6}
              className="d-flex flex-wrap align-items-center justify-content-center support-items-container"
            >
              <h3 className="service-title">MAINTENANCE CONTRACTS</h3>
              <p className="service-description">
                Our maintenance department is committed to providing the highest
                levels of effective and reliable service through a team of
                professional staff and the services we provide.
              </p>
              <ul className="service-list">
                <li>Building Maintenance Contracts</li>
                <li>Cleaning and Maintenance Contracts</li>
                <li>Cleaning of Water Tanks</li>
                <li>Cleaning the Windows of Tall Buildings</li>
                <li>Cleaning Walls and Surfaces</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <div className="container-cards reveal">
        <div className="section_of_services">
          <h1 id="main-title">SERVICES</h1>
          <hr />
          {/* Subtitle */}
          <p className="text-center fs-6">How Our Agency Can Help</p>
        </div>
        <div className="card__container">
          <article className="card__article">
            <img
              src="/src/assets/service/service1.PNG"
              alt="Maintenance"
              className="card__img"
            />
            <div className="card__data">
              <h2 className="card__title">Maintenance</h2>
            </div>
          </article>
          <article className="card__article">
            <img
              src="/src/assets/service/service2.jpg"
              alt="Pest Control"
              className="card__img"
            />
            <div className="card__data">
              <h2 className="card__title">Food Catering</h2>
            </div>
          </article>

          <article className="card__article">
            <img
              src="/src/assets/service/service3.PNG"
              alt="Pest Control"
              className="card__img"
            />
            <div className="card__data">
              <h2 className="card__title">Pest Control</h2>
            </div>
          </article>

          <article className="card__article">
            <img
              src="/src/assets/service/service4.PNG"
              alt="Contracting Service"
              className="card__img"
            />
            <div className="card__data">
              <h2 className="card__title">Contracting Service</h2>
            </div>
          </article>

          <article className="card__article">
            <img
              src="/src/assets/service/service5.PNG"
              alt="Pool Service"
              className="card__img"
            />
            <div className="card__data">
              <h2 className="card__title">Pool Service</h2>
            </div>
          </article>

          <article className="card__article">
            <img
              src="/src/assets/service/service6.PNG"
              alt="Renovation"
              className="card__img"
            />
            <div className="card__data">
              <h2 className="card__title">Renovation</h2>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
