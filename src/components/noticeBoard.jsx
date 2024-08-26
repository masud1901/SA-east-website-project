import "../css/notice.css";

const Notice = () => {
  return (
    <>
      <div className="notice-body">
        <div className="container">
          <div className="row">
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=1027"
                    alt="Ali Bin Abu Talib Al-Ghubaishi"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Ali Bin Abu Talib Al-Ghubaishi</h3>
                  <h4 className="title">General Manager</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=839"
                    alt="Mohammad Anowarr Hossain"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Mohammad Anowarr Hossain</h3>
                  <h4 className="title">Manpower Management</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=856"
                    alt="Humayun Kabir"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    Humayun <br /> Kabir
                  </h3>
                  <h4 className="title">Marketing Manager</h4>
                </div>
              </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src="https://picsum.photos/130/130?image=836"
                    alt="Mary Huntley"
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">Mary Huntley</h3>
                  <h4 className="title">Web Developer</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notice;
