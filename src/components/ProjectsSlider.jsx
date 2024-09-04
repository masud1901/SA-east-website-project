import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase"; // Update this path
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../css/ProjectsSlider.css";

const TrendingSlider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, "projects");
      const projectsQuery = query(
        projectsCollection,
        orderBy("createdAt", "desc"),
        limit(4)
      );
      const querySnapshot = await getDocs(projectsQuery);
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setSlides(projectsList);
    };

    fetchProjects();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

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
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="custom-projects-slide">
              <div className="custom-projects-slide-img">
                <img src={slide.imgURL} alt={slide.title} />
              </div>
              <div className="custom-projects-slide-content">
                <h2>{slide.title}</h2>
                <p>{slide.details || ""}</p>
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
