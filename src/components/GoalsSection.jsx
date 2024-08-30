import "../css/goals.css";

const Goals = () => {
  return (
    <section className="goals-section reveal">
      <div className="goals-background">
        <h2 className="goals-title">OUR GOALS</h2>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-4">
            <div className="goal-card">
              <h3 className="goal-card-title">Provide The Best Products</h3>
              <p className="goal-card-text">
                Our goals are to provide the best products, services and
                technology in the Kingdom of Saudi Arabia and the other markets
                in which we operate.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="goal-card">
              <h3 className="goal-card-title">
                Maintaining distinguished partnerships
              </h3>
              <p className="goal-card-text">
                Maintaining distinguished partnerships with our customers,
                employees and partners in the Kingdom of Saudi Arabia and other
                markets.
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="goal-card">
              <h3 className="goal-card-title">
                Provide customers with the best products
              </h3>
              <p className="goal-card-text">
                Our vision includes providing customers with the premium
                products and specialized services they need in today{"'"}s world
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goals;
