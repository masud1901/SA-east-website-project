const GoalsSection = () => {
  return (
    <section id="goals" className="goals-section py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-5">Our Goals</h2>
        <div className="row text-center">
          <div className="col-md-4">
            <h4>Goal Title 1</h4>
            <p>Description of the first goal.</p>
          </div>
          <div className="col-md-4">
            <h4>Goal Title 2</h4>
            <p>Description of the second goal.</p>
          </div>
          <div className="col-md-4">
            <h4>Goal Title 3</h4>
            <p>Description of the third goal.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalsSection;
