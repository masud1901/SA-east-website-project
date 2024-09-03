import { Link } from "react-router-dom";
import "../css/notice.css";
import abuImage from "../../public/assets/abu.PNG";
import aliImage from "../../public/assets/ali.PNG";
import kabirImage from "../../public/assets/kabir.PNG";

const Notice = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                        src={abuImage}
                        alt="Ali Bin Abu Talib Al-Ghubaishi"
                      />
                    </div>
                    <div className="team-content">
                      <h4 className="name">
                        Ali Bin Abu <br />
                        Talib Al-Ghubaishi
                      </h4>
                      <h4 className="title">General Manager</h4>
                      <h4 className="title">
                        <a href="tel:+966502711132" className="hotline-text">
                          Phone: +966502711132
                        </a>
                      </h4>
                      <h4>
                        <a
                          href="mailto:Sacompanymakkah@gmail.com"
                          className="hotline-text"
                        >
                          Email: Sacompanymakkah@gmail.com
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src={aliImage}
                        alt="Mohammad Anowarr Hossain"
                      />
                    </div>
                    <div className="team-content">
                      <h4 className="name">
                        Mohammad Anowar <br /> Hossain
                      </h4>
                      <h4 className="title">Employment Management Manager</h4>
                      <h4 className="title">
                        <a
                          href="tel:+966568315773"
                          className="hotline-text text-light"
                        >
                          Phone: +966568315773
                        </a>
                      </h4>
                      <h4>
                        <a
                          href="mailto:Sacompanymakkah@gmail.com"
                          className="hotline-text"
                        >
                          Email: Sacompanymakkah@gmail.com
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-4">
                  <div className="our-team">
                    <div className="picture">
                      <img
                        className="img-fluid"
                        src={kabirImage}
                        alt="Humayun Kabir"
                      />
                    </div>
                    <div className="team-content">
                      <h4 className="name">
                        Humayun <br /> Kabir
                      </h4>
                      <h4 className="title">Marketing Manager</h4>
                      <h4 className="title">
                        <a
                          href="tel:+966545666218
"
                          className="hotline-text"
                        >
                          Phone: +966545666218
                        </a>
                      </h4>
                      <h4>
                        <a
                          href="mailto:Sacompanymakkah@gmail.com"
                          className="hotline-text"
                        >
                          Email: Sacompanymakkah@gmail.com
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>

              {/* View All Button */}
              <div className="custom-button-projects-container">
                <Link to="/about">
                  <button
                    className="custom-view-all-button"
                    onClick={scrollToTop}
                  >
                    View All Details
                  </button>
                </Link>
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
                        Urgent cleaner jobs required inside Saudi Arabia.
                        <span className="notice-date">Aug 07, 2024</span>
                      </li>
                    </a>
                    <a href="">
                      <li>
                        <span className="important-notice">*</span>
                        Urgent cleaner jobs required inside Saudi Arabia.
                        <span className="notice-date">Aug 07, 2024</span>
                      </li>
                    </a>
                    <a href="">
                      {" "}
                      <li>
                        <span className="important-notice">*</span>
                        Urgent cleaner jobs required inside Saudi Arabia.
                        <span className="notice-date">Jul 25, 2024</span>
                      </li>
                    </a>
                    <a href="">
                      <li>
                        <span className="important-notice">*</span>
                        Urgent cleaner jobs required inside Saudi Arabia.
                        <span className="notice-date">Jul 17, 2024</span>
                      </li>
                    </a>
                    <a href="">
                      <li>
                        <span className="important-notice">*</span>
                        Urgent cleaner jobs required inside Saudi Arabia.
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
