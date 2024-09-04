import { useState, useEffect } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../firebase"; // Ensure this path is correct
import "../css/allNotices.css"; // You'll need to create this CSS file

const AllNotices = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [noticesPerPage] = useState(10);

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

  return (
    <div className="all-notices-container">
      <h1 className="all-notices-title">All Job Notices</h1>
      {loading ? (
        <p>Loading notices...</p>
      ) : (
        <>
          <ul className="notices-list">
            {currentNotices.map((notice) => (
              <li key={notice.id} className="notice-item">
                <span className="notice-date">
                  {formatDate(notice.createdAt)}
                </span>
                <a href={notice.link} className="notice-link">
                  {notice.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="pagination">
            {Array.from(
              { length: Math.ceil(notices.length / noticesPerPage) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => paginate(i + 1)}
                  className={`pagination-button ${
                    currentPage === i + 1 ? "active" : ""
                  }`}
                >
                  {i + 1}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default AllNotices;
