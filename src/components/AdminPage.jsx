import React, { useState, useEffect } from "react";
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
import { onAuthStateChanged } from "firebase/auth";
import { auth, db, storage } from "../firebase"; // Ensure this path is correct

const Admin = () => {
  const [notices, setNotices] = useState([]);
  const [projects, setProjects] = useState([]);
  const [newItem, setNewItem] = useState({
    title: "",
    imgURL: "",
    type: "notice",
  });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

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
          // This is an update operation
          await handleUpdate(itemId, itemType, { imgURL: downloadURL });
        } else {
          // This is for a new item
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

      // If we're updating the image, delete the old one
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

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {user ? (
        <p>Logged in as: {user.email}</p>
      ) : (
        <p>
          You are not logged in. You can view items but cannot make changes.
        </p>
      )}

      {user && (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            value={newItem.title}
            onChange={handleInputChange}
            placeholder="Title"
            required
          />
          <input type="file" onChange={handleFileChange} />
          <select name="type" value={newItem.type} onChange={handleInputChange}>
            <option value="notice">Notice</option>
            <option value="project">Project</option>
          </select>
          <button type="submit">Add New Item</button>
        </form>
      )}

      <h2>Notices</h2>
      {notices.map((notice) => (
        <div key={notice.id}>
          <h3>{notice.title}</h3>
          {notice.imgURL && (
            <img
              src={notice.imgURL}
              alt={notice.title}
              style={{ width: "100px" }}
            />
          )}
          <p>Created at: {notice.createdAt.toDate().toString()}</p>
          {user && (
            <>
              <input
                type="text"
                defaultValue={notice.title}
                onBlur={(e) =>
                  handleUpdate(notice.id, "notice", { title: e.target.value })
                }
              />
              <input
                type="file"
                onChange={(e) => handleFileChange(e, notice.id, "notice")}
              />
              <button
                onClick={() => handleDelete(notice.id, "notice", notice.imgURL)}
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}

      <h2>Projects</h2>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
          {project.imgURL && (
            <img
              src={project.imgURL}
              alt={project.title}
              style={{ width: "100px" }}
            />
          )}
          <p>Created at: {project.createdAt.toDate().toString()}</p>
          {user && (
            <>
              <input
                type="text"
                defaultValue={project.title}
                onBlur={(e) =>
                  handleUpdate(project.id, "project", { title: e.target.value })
                }
              />
              <input
                type="file"
                onChange={(e) => handleFileChange(e, project.id, "project")}
              />
              <button
                onClick={() =>
                  handleDelete(project.id, "project", project.imgURL)
                }
              >
                Delete
              </button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Admin;
