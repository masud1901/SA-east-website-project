import { useEffect } from "react";
import "../css/projectpage.css";

const ProjectPage = () => {
  const projects = [
    {
      title: "PROJECT: KCH, SHAPOORJI PALLONJI, JEDDAH, KSA",
      details:
        "We live in a world where Facility Management is booming out into a big opportunity for business. We at Al-Shams Al-Amana Company provide services in cleaning, maintenance, event management, renovation and development, warehousing. With the continuous experimentation of new products under the supervision of qualified professionals has led us to come up with competitive products to satisfy our clients.",
      imageSrc: "/public/assets/project_images/project1.PNG",
      imageAlt: "Project One Image",
    },
    {
      title: "PROJECT: SWCC, LIMAK, JUBAIL,KSA",
      details:
        "We live in a world where Facility Management is booming out into a big opportunity for business. We at Al-Shams Al-Amana Company provide services in cleaning, maintenance, event management, renovation and development, warehousing. With the continuous experimentation of new products under the supervision of qualified professionals has led us to come up with competitive products to satisfy our clients.",
      imageSrc: "/public/assets/project_images/project2.PNG",
      imageAlt: "Project Two Image",
    },
    {
      title: "PROJECT :RITE AND OUR WORK WITH THE CRCC, MAKKAH METRO ",
      details:
        "We live in a world where Facility Management is booming out into a big opportunity for business. We at Al-Shams Al-Amana Company provide services in cleaning, maintenance, event management, renovation and development, warehousing. With the continuous experimentation of new products under the supervision of qualified professionals has led us to come up with competitive products to satisfy our clients.",
      imageSrc: "/public/assets/project_images/project3.PNG",
      imageAlt: "Project Three Image",
    },
    {
      title:
        "PROJECT: Our Experienced Cleaners are working Various kind of Showroom such as Sephora, Dior, Nice Store, Extra, Guess etc. With RITE GROUP,KSA ",
      details:
        "We live in a world where Facility Management is booming out into a big opportunity for business. We at Al-Shams Al-Amana Company provide services in cleaning, maintenance, event management, renovation and development, warehousing. With the continuous experimentation of new products under the supervision of qualified professionals has led us to come up with competitive products to satisfy our clients.",
      imageSrc: "/public/assets/project_images/project4.PNG",
      imageAlt: "Project Three Image",
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
