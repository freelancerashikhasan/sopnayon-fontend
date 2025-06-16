import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import { FaUserEdit } from "react-icons/fa";
import AuthContext from "../Context/AuthContext";

function UserProfile() {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const { url } = useContext(AuthContext);
  
  const [user, setUser] = useState({
    image: userData?.image || "",
    name: userData?.name || "",
    username: userData?.username || "",
    phone: userData?.phone || "",
    email: userData?.email || "",
  });

  const [isEditMode, setIsEditMode] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [previewImage, setPreviewImage] = useState(user.image);

  // Update preview image when userData changes
  useEffect(() => {
    if (userData?.image) {
      setPreviewImage(userData.image);
    }
  }, [userData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle image file input
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setPreviewImage(URL.createObjectURL(file));
    } else {
      setFormData((prev) => ({ ...prev, image: null }));
      setPreviewImage(null);
    }
  };

  const handleSave = async () => {
    if (!formData.name || !formData.username || !formData.phone || !formData.email) {
      setError("Please fill in all fields.");
      return;
    }
  
    setLoading(true);
    setError("");
  
    const authToken = localStorage.getItem("authToken");
    if (!authToken) {
      setError("Authentication token is missing. Please log in again.");
      setLoading(false);
      return;
    }
  
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("username", formData.username);
    formDataToSend.append("phone", formData.phone);
    formDataToSend.append("email", formData.email);
  
    if (formData.image instanceof File) {
      formDataToSend.append("image", formData.image);
    }
  
    try {
      const response = await axios.post(`${url}/user/profile/edit`, formDataToSend, {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "multipart/form-data",
        },
      });
  
      if (response.status === 200) {
        localStorage.removeItem('userData');
        setUser(response.data.user);
        localStorage.setItem('userData', JSON.stringify(response.data.user));
  
        // Update preview image after successful save
        setPreviewImage(response.data.user.image);
  
        setIsEditMode(false);
      } else {
        setError("Failed to update profile. Please try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || "An error occurred while updating your profile.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };
  const styles = {
    container: {
      maxWidth: "700px",
      margin: "30px auto",
      padding: "20px",
      borderRadius: "15px",
      backgroundColor: "#085830",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
      fontFamily: "'Poppins', sans-serif",
      textAlign: "center",
    },
    imageContainer: {
      position: "relative",
    },
    image: {
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      objectFit: "cover",
      margin: "0 auto",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
      border: "4px solid #007bff",
    },
    header: {
      marginTop: "20px",
      fontSize: "26px",
      fontWeight: "600",
      color: "#fff",
    },
    subHeader: {
      fontSize: "16px",
      fontWeight: "500",
      color: "#fff",
    },
    card: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      marginTop: "30px",
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
    row: {
      display: "flex",
      justifyContent: "space-between",
      width: "100%",
      fontSize: "16px",
      color: "#444",
      padding: "10px 0",
      borderBottom: "1px solid #eee",
    },
    rowLast: {
      borderBottom: "none",
    },
    label: {
      fontWeight: "600",
      color: "#333",
    },
    value: {
      color: "#666",
    },
    editButton: {
      marginTop: "20px",
      backgroundColor: "#007bff",
      color: "#fff",
      border: "none",
      padding: "12px 25px",
      borderRadius: "25px",
      fontSize: "16px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      transition: "0.3s ease",
    },
    modalOverlay: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: "1000",
    },
    modal: {
      backgroundColor: "#fff",
      padding: "20px",
      borderRadius: "10px",
      width: "400px",
      boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
    },
    input: {
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      fontSize: "16px",
    },
    modalButtons: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: "20px",
    },
    cancelButton: {
      backgroundColor: "#f44336",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    saveButton: {
      backgroundColor: "#4caf50",
      color: "#fff",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.imageContainer}>
        <img src={previewImage || "/default-avatar.png"} alt="User Profile" style={styles.image} />
      </div>

      <h1 style={styles.header}>{user.name}</h1>
      <p style={styles.subHeader}>{user.username}</p>

      <div style={styles.card}>
        <div style={styles.row}>
          <span style={styles.label}>Phone:</span>
          <span style={styles.value}>{user.phone}</span>
        </div>
        <div style={{ ...styles.row, ...styles.rowLast }}>
          <span style={styles.label}>Email:</span>
          <span style={styles.value}>{user.email}</span>
        </div>
      </div>

      <button style={styles.editButton} onClick={() => setIsEditMode(true)}>
        <FaUserEdit />
        Edit Profile
      </button>

      {isEditMode && (
        <div style={styles.modalOverlay}>
          <div style={styles.modal}>
            <h2>Edit Profile</h2>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <img
                src={previewImage || "/default-avatar.png"}
                alt="Preview"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "50%",
                  marginBottom: "10px",
                }}
              />
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "block", margin: "10px auto" }}
              />
            </div>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />

            {error && (
              <p style={{ color: "red", textAlign: "center" }}>{error}</p>
            )}

            <div style={styles.modalButtons}>
              <button
                style={styles.cancelButton}
                onClick={() => setIsEditMode(false)}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                style={styles.saveButton}
                onClick={handleSave}
                disabled={loading}
              >
                {loading ? "Saving..." : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
