import { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  Timestamp,
  query,
  orderBy,
} from "firebase/firestore";
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../css/admin-dashboard.css";

const AdminDashboard = () => {
  const [notices, setNotices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newItem, setNewItem] = useState({
    title: "",
    imgURL: "",
    type: "notice",
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    fetchNotices();
    fetchProjects();

    return () => unsubscribe();
  }, []);

  const fetchNotices = async () => {
    try {
      const noticesQuery = query(
        collection(db, "notices"),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(noticesQuery);
      setNotices(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (error) {
      console.error("Error fetching notices:", error);
    }
  };

  const fetchProjects = async () => {
    try {
      const projectsQuery = query(
        collection(db, "projects"),
        orderBy("createdAt", "desc")
      );
      const querySnapshot = await getDocs(projectsQuery);
      setProjects(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  const handleInputChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleFileChange = async (e, itemId = null, itemType = null) => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }
    const file = e.target.files[0];
    if (file) {
      try {
        const storageRef = ref(storage, `images/${Date.now()}_${file.name}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);

        if (itemId && itemType) {
          await handleUpdate(itemId, itemType, { imgURL: downloadURL });
        } else {
          setNewItem({ ...newItem, imgURL: downloadURL });
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user) {
      console.error("User not authenticated");
      return;
    }

    try {
      const { type, ...itemData } = newItem;
      itemData.createdAt = Timestamp.now();
      itemData.createdBy = user.uid;

      const docRef = await addDoc(
        collection(db, type === "notice" ? "notices" : "projects"),
        itemData
      );
      console.log("Document written with ID: ", docRef.id);

      alert("Post added");

      setNewItem({ title: "", imgURL: "", type: "notice" });
      type === "notice" ? fetchNotices() : fetchProjects();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handleUpdate = async (id, type, updatedData) => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }
    try {
      const docRef = doc(db, type === "notice" ? "notices" : "projects", id);
      await updateDoc(docRef, updatedData);

      if (updatedData.imgURL) {
        const oldDoc =
          type === "notice"
            ? notices.find((n) => n.id === id)
            : projects.find((p) => p.id === id);
        if (oldDoc && oldDoc.imgURL) {
          const oldImageRef = ref(storage, oldDoc.imgURL);
          await deleteObject(oldImageRef);
        }
      }

      type === "notice" ? fetchNotices() : fetchProjects();
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  const handleDelete = async (id, type, imgURL) => {
    if (!user) {
      console.error("User not authenticated");
      return;
    }
    try {
      await deleteDoc(doc(db, type === "notice" ? "notices" : "projects", id));
      if (imgURL) {
        const imageRef = ref(storage, imgURL);
        await deleteObject(imageRef);
      }
      type === "notice" ? fetchNotices() : fetchProjects();
    } catch (error) {
      console.error("Error deleting document:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login"); // Redirect to login page after logout
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="admin-dashboard">
      <h1 className="admin-dashboard__title">Admin Dashboard</h1>
      {user ? (
        <div className="admin-dashboard__user-info">
          <p>Logged in as: {user.email}</p>
          <button
            onClick={handleLogout}
            className="btn btn-secondary admin-dashboard__logout-button"
          >
            Logout
          </button>
        </div>
      ) : (
        <p className="admin-dashboard__user-info">
          You are not logged in. You can view items but cannot make changes.
        </p>
      )}

      {user && (
        <form className="admin-dashboard__form" onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control admin-dashboard__form-input"
            name="title"
            value={newItem.title}
            onChange={handleInputChange}
            placeholder="Title"
            required
          />
          <input
            type="file"
            className="form-control-file admin-dashboard__form-file-input"
            onChange={handleFileChange}
          />
          <select
            className="form-control admin-dashboard__form-select"
            name="type"
            value={newItem.type}
            onChange={handleInputChange}
          >
            <option value="notice">Notice</option>
            <option value="project">Project</option>
          </select>
          <button
            type="submit"
            className="btn admin-dashboard__form-submit-button"
          >
            Add New Post
          </button>
        </form>
      )}

      <div className="admin-dashboard__section">
        <h2 className="admin-dashboard__section-title">Notices</h2>
        {notices.map((notice) => (
          <div key={notice.id} className="admin-dashboard__notice-card">
            <div className="card-body">
              <h5 className="card-title admin-dashboard__notice-header">
                {notice.title}
              </h5>
              {notice.imgURL && (
                <img
                  src={notice.imgURL}
                  alt={notice.title}
                  className="admin-dashboard__notice-image"
                />
              )}
              <p className="admin-dashboard__notice-date">
                Created at: {notice.createdAt.toDate().toString()}
              </p>
              {user && (
                <div className="admin-dashboard__notice-actions">
                  <input
                    type="text"
                    className="form-control admin-dashboard__notice-title-input"
                    defaultValue={notice.title}
                    onBlur={(e) =>
                      handleUpdate(notice.id, "notice", {
                        title: e.target.value,
                      })
                    }
                  />
                  <input
                    type="file"
                    className="form-control-file admin-dashboard__notice-image-input"
                    onChange={(e) => handleFileChange(e, notice.id, "notice")}
                  />
                  <button
                    className="btn btn-danger btn-sm admin-dashboard__notice-delete-button"
                    onClick={() =>
                      handleDelete(notice.id, "notice", notice.imgURL)
                    }
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="admin-dashboard__section">
        <h2 className="admin-dashboard__section-title">Projects</h2>
        {projects.map((project) => (
          <div key={project.id} className="admin-dashboard__project-card">
            <div className="card-body">
              <h5 className="card-title admin-dashboard__project-header">
                {project.title}
              </h5>
              {project.imgURL && (
                <img
                  src={project.imgURL}
                  alt={project.title}
                  className="admin-dashboard__project-image"
                />
              )}
              <p className="admin-dashboard__project-date">
                Created at: {project.createdAt.toDate().toString()}
              </p>
              {user && (
                <div className="admin-dashboard__project-actions">
                  <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo fugit aut harum labore facere, eveniet pariatur, earum aliquam debitis error non unde sapiente tempora minus impedit repellat itaque saepe? Perspiciatis quos sit temporibus veniam libero reiciendis quia commodi vero sed quaerat rerum fuga nisi, alias expedita optio atque quae cupiditate minima dignissimos consequatur labore officia. Ea doloribus ipsum tempore vero doloremque officiis, reprehenderit itaque delectus autem voluptate ullam consequuntur culpa labore ipsa id corrupti laudantium fuga rem quasi, cupiditate sequi quae voluptates. Ipsam placeat dicta, tenetur temporibus, explicabo qui ullam, eaque fuga rerum illo iste repellat itaque? Sed, ut aliquam!</div>
                  <input
                    type="text"
                    className="form-control admin-dashboard__project-title-input"
                    defaultValue={project.title}
                    onBlur={(e) =>
                      handleUpdate(project.id, "project", {
                        title: e.target.value,
                      })
                    }
                  />
                  <input
                    type="file"
                    className="form-control-file admin-dashboard__project-image-input"
                    onChange={(e) => handleFileChange(e, project.id, "project")}
                  />
                  <button
                    className="btn btn-danger btn-sm admin-dashboard__project-delete-button"
                    onClick={() =>
                      handleDelete(project.id, "project", project.imgURL)
                    }
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
