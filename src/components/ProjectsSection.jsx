const ProjectsSection = () => {
  return (
    <section id="projects" className="projects-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Projects</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Project 1"
              className="img-fluid mb-3"
            />
            <h4>Project Title 1</h4>
            <p>Short description of the project.</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Project 2"
              className="img-fluid mb-3"
            />
            <h4>Project Title 2</h4>
            <p>Short description of the project.</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Project 3"
              className="img-fluid mb-3"
            />
            <h4>Project Title 3</h4>
            <p>Short description of the project.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
