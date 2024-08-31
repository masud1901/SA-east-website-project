import "../css/notice.css";

const Notice = () => {
  return (
    <>
      <div className="notice-body">
        <div className="container">
          <div className="row">
            {/* Introduction Title */}
            <div className="col-12">
              <h2 className="section-title">
                Introduction to Management
                <hr />
              </h2>
            </div>

            {/* Management Cards */}
            <div className="col-12">
              <div className="row management-cards">
                {/* Card 1 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="/src/assets/abu.PNG"
                        alt="Ali Bin Abu Talib Al-Ghubaishi"
                      />
                    </div>
                    <div className="team-content">
                      <h4 className="name">
                        Ali Bin Abu <br />
                        Talib Al-Ghubaishi
                      </h4>
                      <h4 className="title">General Manager</h4>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="/src/assets/ali.PNG"
                        alt="Mohammad Anowarr Hossain"
                      />
                    </div>
                    <div className="team-content">
                      <h4 className="name">
                        Mohammad Anowarr <br /> Hossain
                      </h4>
                      <h4 className="title">Employment Management Manager</h4>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src="/src/assets/kabir.PNG"
                        alt="Humayun Kabir"
                      />
                    </div>
                    <div className="team-content">
                      <h4 className="name">
                        Humayun <br /> Kabir
                      </h4>
                      <h4 className="title">Marketing Manager</h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* View All Button */}
              <div className="row">
                <div className="col-12 text-center">
                  <a href="#" className="view-all-cards">
                    » View All
                  </a>
                </div>
              </div>
            </div>

            {/* Notice Board */}
            <div className="col-12">
              <div className="notice-board">
                <div className="notice-header">
                  <h3 className="notice-title" id="notices">
                    <i className="bi bi-info-circle"></i> Job Notices
                  </h3>
                </div>
                <div className="notice-content">
                  <ul>
                    <a href="">
                      <li>
                        <span className="important-notice">*</span>
                        সৌদি আরবের ভিতরে জরুরী ক্লিনারের কাজের জন্য লোক প্রয়োজন।
                        <span className="notice-date">Aug 07, 2024</span>
                      </li>
                    </a>
                    <a href="">
                      <li>
                        <span className="important-notice">*</span>
                        সৌদি আরবের ভিতরে জরুরী ক্লিনারের কাজের জন্য লোক প্রয়োজন।
                        <span className="notice-date">Aug 07, 2024</span>
                      </li>
                    </a>
                    <a href="">
                      {" "}
                      <li>
                        <span className="important-notice">*</span>
                        সৌদি আরবের ভিতরে জরুরী ক্লিনারের কাজের জন্য লোক প্রয়োজন।
                        <span className="notice-date">Jul 25, 2024</span>
                      </li>
                    </a>
                    <a href="">
                      <li>
                        <span className="important-notice">*</span>
                        সৌদি আরবের ভিতরে জরুরী ক্লিনারের কাজের জন্য লোক প্রয়োজন।
                        <span className="notice-date">Jul 17, 2024</span>
                      </li>
                    </a>
                    <a href="">
                      <li>
                        <span className="important-notice">*</span>
                        সৌদি আরবের ভিতরে জরুরী ক্লিনারের কাজের জন্য লোক প্রয়োজন।
                        <span className="notice-date">Jun 23, 2024</span>
                      </li>
                    </a>
                  </ul>
                  <a href="#" className="view-all">
                    » View All
                  </a>
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
