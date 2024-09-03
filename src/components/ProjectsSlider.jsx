import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/ProjectsSlider.css"; // Updated CSS file name for uniqueness

import project1Image from "../../public/assets/project_images/project1.PNG";
import project2Image from "../../public/assets/project_images/project2.PNG";
import project3Image from "../../public/assets/hero_section/heroSection5.jpeg";
import project4Image from "../../public/assets/project_images/project4.PNG";

const TrendingSlider = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  const slides = [
    {
      img: project1Image,
      header: "PROJECT: KCH, SHAPOORJI PALLONJI",
      description: "JEDDAH, KSA",
    },
    {
      img: project2Image,
      header: "PROJECT: SWCC, LIMAK",
      description: "JUBAIL,KSA",
    },
    {
      img: project3Image,
      header: "PROJECT :RITE AND OUR WORK WITH THE CRCC",
      description: "MAKKAH METRO",
    },
    {
      img: project4Image,
      header: "PROJECT: RITE GROUP,KSA",
      description:
        "Our Experienced Cleaners are working Various kind of Showroom such as Sephora, Dior, Nice Store, Extra, Guess etc",
    },
  ];

  return (
    <section id="CustomProjects">
      <div className="custom-projects-container reveal">
        <h1 className="custom-section-heading">
          Projects
          <hr />
        </h1>
      </div>
      <div className="custom-swiper-container reveal">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: ".custom-swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="custom-projects-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="custom-projects-slide">
              <div className="custom-projects-slide-img">
                <img src={slide.img} alt={slide.header} />
              </div>
              <div className="custom-projects-slide-content">
                <h2>{slide.header}</h2>
                <p>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-projects-slider-control">
            <div className="custom-swiper-button-prev custom-slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="custom-swiper-pagination"></div>
            <div className="custom-swiper-button-next custom-slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
          </div>
        </Swiper>
      </div>
      <div className="custom-button-projects-container">
        <Link
          to="/project"
          onClick={() => {
            scrollToTop();
            handleButtonClick();
          }}
        >
          <button className="custom-view-all-button">View All Projects</button>
        </Link>
      </div>
    </section>
  );
};

export default TrendingSlider;
