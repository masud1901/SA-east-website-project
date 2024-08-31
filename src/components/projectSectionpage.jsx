import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/ProjectsSlider.css"; // Updated CSS file name for uniqueness

const TrendingSlider = () => {
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  const slides = [
    {
      img: "src/assets/project_images/project1.PNG",
      header: "PROJECT: KCH, SHAPOORJI PALLONJI",
      description: "JEDDAH, KSA",
    },
    {
      img: "src/assets/project_images/project2.PNG",
      header: "PROJECT: SWCC, LIMAK",
      description: "JUBAIL,KSA",
    },
    {
      img: "src/assets/project_images/project3.PNG",
      header: "ROJECT :RITE AND OUR WORK WITH THE CRCC",
      description: "MAKKAH METRO",
    },
    {
      img: "src/assets/project_images/project4.PNG",
      header: "PROJECT: RITE GROUP,KSA  ",
      description:
        " Our Experienced Cleaners are working Various kind of Showroom such as Sephora, Dior, Nice Store, Extra, Guess etc",
    },
  ];

  return (
    <section id="CustomProjects">
      <div className="custom-projects-container">
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
        <button className="custom-view-all-button" onClick={handleButtonClick}>
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default TrendingSlider;
