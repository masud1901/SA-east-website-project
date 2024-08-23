import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/AboutSection.css";

const About = () => {
  return (
    <section className="about-section" id="About">
      <Container fluid>
        <Card className="border-0 shadow">
          <Card.Body>
            <Row className="align-items-center">
              <Col lg={6} className="mb-4 mb-lg-0">
                <div className="image-grid">
                  <img
                    src="src/assets/heroSection1.jpeg"
                    alt="Worker cutting bricks"
                  />
                  <img
                    src="src/assets/heroSection2.jpeg"
                    alt="Worker welding"
                  />
                  <img
                    src="src/assets/heroSection3.jpeg"
                    alt="Workers at construction site"
                  />
                </div>
              </Col>
              <Col lg={6}>
                <h2 className="text-primary mb-4">ABOUT</h2>
                <p>
                  We live in a world where Facility Management is booming out
                  into a big opportunity for business. We at{" "}
                  <span className="highlight-text">
                    Al-Shams Al-Amana Company
                  </span>{" "}
                  provide services in cleaning, maintenance, event management,
                  renovation and development, warehousing. With the continuous
                  experimentation of new products under the supervision of
                  qualified professionals has led us to come up with competitive
                  products to satisfy our clients.
                </p>
                <Button variant="outline-primary">
                  READ MORE <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    </section>
  );
};

export default About;
