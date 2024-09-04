import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase"; // Make sure to import your Firebase configuration
import "../css/projectpage.css";

const ProjectPage = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projectsCollection = collection(db, "projects");
      const projectsQuery = query(
        projectsCollection,
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(projectsQuery);
      const projectsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsList);
    };

    fetchProjects();
  }, []);

  const createProjectCard = (project, index) => {
    const isEven = index % 2 === 0;

    return (
      <div
        key={project.id}
        className={`project-card ${isEven ? "even" : "odd"}`}
      >
        {isEven ? (
          <>
            <div className="project-image">
              <img src={project.imgURL} alt={project.title} />
            </div>
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
          </>
        ) : (
          <>
            <div className="project-info">
              <h3>{project.title}</h3>
            </div>
            <div className="project-image">
              <img src={project.imgURL} alt={project.title} />
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
    <div className="project-page">
      <div className="container">
        <div className="project-list">
          {projects.map((project, index) => createProjectCard(project, index))}
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
