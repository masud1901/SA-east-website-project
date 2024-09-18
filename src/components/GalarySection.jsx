import { Container, Row, Col, Card } from "react-bootstrap";
import "../css/aboutuspage.css";

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

const Galary = () => {
  return (
    <>
      <section id="aboutUS">
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

export default Galary;
