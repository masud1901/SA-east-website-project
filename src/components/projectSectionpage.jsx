import { useEffect } from "react";
import "../css/projectpage.css";
import project1Image from "../../public/assets/project_images/project1.PNG";
import project2Image from "../../public/assets/project_images/project2.PNG";
import project3Image from "../../public/assets/hero_section/heroSection5.jpeg";
import project4Image from "../../public/assets/project_images/project4.PNG";

const ProjectPage = () => {
  const projects = [
    {
      title: "PROJECT :RITE AND OUR WORK WITH THE CRCC, MAKKAH METRO ",
      details: "",
      imageSrc: project3Image,
      imageAlt: "Project Three Image",
    },
    {
      title:
        "PROJECT: Our Experienced Cleaners are working Various kind of Showroom such as Sephora, Dior, Nice Store, Extra, Guess etc. With RITE GROUP,KSA ",
      details: "",
      imageSrc: project4Image,
      imageAlt: "Project Four Image",
    },
    {
      title: "PROJECT: KCH, SHAPOORJI PALLONJI, JEDDAH, KSA",
      details: "",
      imageSrc: project1Image,
      imageAlt: "Project One Image",
    },
    {
      title: "PROJECT: SWCC, LIMAK, JUBAIL,KSA",
      details: "",
      imageSrc: project2Image,
      imageAlt: "Project Two Image",
    },
  ];

  const createProjectCard = (project, index) => {
    const isEven = index % 2 === 0;

    return (
      <div className="project-card row mb-5" key={index}>
        {isEven ? (
          <>
            <div className="col-md-6 mb-3 mb-md-0">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="img-fluid project-image"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center">
              <h2 className="mb-3 project-title">{project.title}</h2>
              <p className="text-justify">{project.details}</p>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-6 mb-3 mb-md-0 order-md-2">
              <img
                src={project.imageSrc}
                alt={project.imageAlt}
                className="img-fluid project-image"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center order-md-1 mb-3 mb-md-0">
              <h2 className="mb-3 project-title">{project.title}</h2>
              <p className="text-justify">{project.details}</p>
            </div>
          </>
        )}
      </div>
    );
  };

  const checkVisibility = () => {
    const cards = document.querySelectorAll(".project-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const isVisible =
        rect.top <= window.innerHeight * 0.75 && rect.bottom >= 0;
      if (isVisible) {
        card.classList.add("visible");
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkVisibility);
    checkVisibility();

    return () => {
      window.removeEventListener("scroll", checkVisibility);
    };
  }, []);

  return (
    <div className="projectContainer">
      <div className="container my-5">
        <div id="projectContainer">
          {projects.map((project, index) => createProjectCard(project, index))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
