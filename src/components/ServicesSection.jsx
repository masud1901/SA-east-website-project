const ServicesSection = () => {
  return (
    <section id="services" className="services-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Our Services</h2>
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Service 1"
              className="img-fluid mb-3"
            />
            <h4>Service Title 1</h4>
            <p>Brief description of the service.</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Service 2"
              className="img-fluid mb-3"
            />
            <h4>Service Title 2</h4>
            <p>Brief description of the service.</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://via.placeholder.com/350x200"
              alt="Service 3"
              className="img-fluid mb-3"
            />
            <h4>Service Title 3</h4>
            <p>Brief description of the service.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
