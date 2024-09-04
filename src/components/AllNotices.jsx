import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase"; // Ensure this path is correct
import "../css/allNotices.css"; // You'll need to create this CSS file

const AllNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesPerPage] = useState(10);
  const [selectedNotice, setSelectedNotice] = useState(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const noticesQuery = query(
          collection(db, "notices"),
          orderBy("createdAt", "desc")
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

  // Get current notices
  const indexOfLastNotice = currentPage * noticesPerPage;
  const indexOfFirstNotice = indexOfLastNotice - noticesPerPage;
  const currentNotices = notices.slice(indexOfFirstNotice, indexOfLastNotice);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleNoticeClick = (notice) => {
    setSelectedNotice(notice);
  };

  const closeModal = () => {
    setSelectedNotice(null);
  };

  return (
    <div className="container mt-4" id="notices">
      <h1 className="all-notices-title text-center mb-4">All Job Notices</h1>
      {loading ? (
        <p className="text-center">Loading notices...</p>
      ) : (
        <>
          <ul className="list-group">
            {currentNotices.map((notice) => (
              <li
                key={notice.id}
                className="list-group-item d-flex justify-content-between align-items-center"
                onClick={() => handleNoticeClick(notice)}
              >
                <a href="#notices" className="notice-link text-decoration-none">
                  <span className="important-notice">*</span>
                  {notice.title}
                </a>
                <span className="notice-datee">
                  {formatDate(notice.createdAt)}
                </span>
              </li>
            ))}
          </ul>
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              {Array.from(
                { length: Math.ceil(notices.length / noticesPerPage) },
                (_, i) => (
                  <li
                    key={i}
                    className={`page-item ${
                      currentPage === i + 1 ? "active" : ""
                    }`}
                  >
                    <button
                      onClick={() => paginate(i + 1)}
                      className="page-link"
                    >
                      {i + 1}
                    </button>
                  </li>
                )
              )}
            </ul>
          </nav>
        </>
      )}

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
                className="btn btn-primary"
              >
                Read more
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllNotices;
