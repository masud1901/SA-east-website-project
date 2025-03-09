import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import { db } from "../firebase"; // Ensure this path is correct
import "../css/notice.css";

const Notice = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const noticesQuery = query(
          collection(db, "notices"),
          orderBy("createdAt", "desc"),
          limit(5)
        );
        const querySnapshot = await getDocs(noticesQuery);
        setNotices(
          querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
        );
        setLoading(false);
      } catch (error) {
        console.error("Error fetching notices:", error);
        setLoading(false);
      }
    };

    fetchNotices();
  }, []);

  const formatDate = (timestamp) => {
    const date = timestamp.toDate();
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
  };

  const closeModal = () => {
    setSelectedNotice(null);
  };

  return (
    <>
      <div className="custom-notice-body" id="notice">
        <div className="custom-container">
          <div className="row">
            {/* Notice Board */}
            <div className="col-12">
              <div className="notice-board">
                <div className="notice-header">
                  <h3 className="notice-title" id="notices">
                    <i className="bi bi-info-circle"></i> Job Notices
                  </h3>
                </div>
                <div className="notice-content">
                  {loading ? (
                    <p>Loading notices...</p>
                  ) : (
                    <ul>
                      {notices.map((notice) => (
                        <li
                          key={notice.id}
                          onClick={() => handleNoticeClick(notice)}
                        >
                          <a
                            href="#notice"
                            className="notice-link text-decoration-none"
                          >
                            <span className="important-notice">*</span>
                            {notice.title}
                          </a>
                          <span className="notice-date">
                            {formatDate(notice.createdAt)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Link to="/all-notices" className="view-all">
                    » View All
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedNotice && (
        <div className="custom-notice-modal">
          <div className="custom-notice-modal-content">
            <span className="custom-close" onClick={closeModal}>
              &times;
            </span>
            <h2 className="mt-5">{selectedNotice.title}</h2>
            <p>{selectedNotice.description}</p>
            {selectedNotice.imgURL && (
              <img
                src={selectedNotice.imgURL}
                alt="Notice"
                className="custom-notice-image"
              />
            )}
            {selectedNotice.link && (
              <a
                href={selectedNotice.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Notice;
