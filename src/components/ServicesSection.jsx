import "../css/service.css";

const Services = () => {
  return (
    <div className="container-cards reveal">
      <div className="section_of_services">
        <h1 id="main-title">SERVICES</h1>
        <hr />
        {/* Subtitle */}
        <p className="text-center fs-6">How Our Agency Can Help</p>
      </div>
      <div className="card__container">
        <article className="card__article">
          <img
            src="/src/assets/service1.PNG"
            alt="Maintenance"
            className="card__img"
          />
          <div className="card__data">
            <h2 className="card__title">Maintenance</h2>
          </div>
        </article>
        <article className="card__article">
          <img
            src="/src/assets/service2.jpg"
            alt="Pest Control"
            className="card__img"
          />
          <div className="card__data">
            <h2 className="card__title">Food Catering</h2>
          </div>
        </article>

        <article className="card__article">
          <img
            src="/src/assets/service3.PNG"
            alt="Pest Control"
            className="card__img"
          />
          <div className="card__data">
            <h2 className="card__title">Pest Control</h2>
          </div>
        </article>

        <article className="card__article">
          <img
            src="/src/assets/service4.PNG"
            alt="Contracting Service"
            className="card__img"
          />
          <div className="card__data">
            <h2 className="card__title">Contracting Service</h2>
          </div>
        </article>

        <article className="card__article">
          <img
            src="/src/assets/service5.PNG"
            alt="Pool Service"
            className="card__img"
          />
          <div className="card__data">
            <h2 className="card__title">Pool Service</h2>
          </div>
        </article>

        <article className="card__article">
          <img
            src="/src/assets/service6.PNG"
            alt="Renovation"
            className="card__img"
          />
          <div className="card__data">
            <h2 className="card__title">Renovation</h2>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Services;
