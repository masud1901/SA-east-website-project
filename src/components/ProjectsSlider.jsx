import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/ProjectsSlider.css";

const TrendingSlider = () => {
  const handleButtonClick = () => {
    // Add your button click logic here
    console.log("Button clicked!");
  };
  const slides = [
    {
      img: "src/assets/heroSection1.jpeg",
      price: "$20",
      name: "Special Pizza",
      rating: 4.5,
    },
    {
      img: "src/assets/heroSection2.jpeg",
      price: "$20",
      name: "A Guy Working",
      rating: 4.5,
    },
    {
      img: "src/assets/heroSection3.jpeg",
      price: "$40",
      name: "A Guy Welding",
      rating: 4.5,
    },
    {
      img: "src/assets/heroSection1.jpeg",
      price: "$20",
      name: "A Guy",
      rating: 4.5,
    },
    {
      img: "src/assets/heroSection2.jpeg",
      price: "$20",
      name: "Meat Ball",
      rating: 4.5,
    },
    {
      img: "src/assets/heroSection3.jpeg",
      price: "$40",
      name: "Burger",
      rating: 4.5,
    },
  ];

  return (
    <section id="Projects">
      <div className="container">
        {/* <h3 className="text-center section-subheading">- popular Delivery -</h3> */}
        <h1 className="text-center section-heading">Projects</h1>
      </div>
      <div className="container">
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
          pagination={{ el: ".swiper-pagination", clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="projects-slider"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className="projects-slide">
              <div className="projects-slide-img">
                <img src={slide.img} alt="projects" />
              </div>
              <div className="projects-slide-content">
                {/* <h1 className="food-price">{slide.price}</h1> */}
                <div className="projects-slide-content-bottom">
                  <h2 className="food-name">{slide.name}</h2>
                  <h3 className="food-rating">
                    <span>{slide.rating}</span>
                    <div className="rating">
                      {[...Array(5)].map((_, i) => (
                        <ion-icon key={i} name="star"></ion-icon>
                      ))}
                    </div>
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="projects-slider-control">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
      <div className="button-container">
        <button className="view-all-button" onClick={handleButtonClick}>
          View All Projects
        </button>
      </div>
    </section>
  );
};

export default TrendingSlider;
