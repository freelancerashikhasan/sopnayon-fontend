import React, { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";

function TotalMember() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [membersPerPage] = useState(50);
  const { url, authToken } = useContext(AuthContext);

  useEffect(() => {
    // Fetch member data
    const fetchMembers = async () => {
      try {
        const response = await axios.get(`${url}/user/total-member`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setMembers(response.data);
      } catch (err) {
        setError("Failed to load member data.");
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [url, authToken]);

  // Get current members for the current page
  const indexOfLastMember = currentPage * membersPerPage;
  const indexOfFirstMember = indexOfLastMember - membersPerPage;
  const currentMembers = members.slice(indexOfFirstMember, indexOfLastMember);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(members.length / membersPerPage);

  return (
    <div style={{ padding: "20px", margin: "auto" }}>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <>
          <div style={{ overflowX: "auto" }}>
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                backgroundColor: "#fff",
              }}
            >
              <thead
                style={{
                  backgroundColor: "#085830",
                  color: "#fff",
                  textAlign: "left",
                }}
              >
                <tr>
                  <th style={{ padding: "12px 20px" }}>Image</th>
                  <th style={{ padding: "12px 20px" }}>Name</th>
                  <th style={{ padding: "12px 20px" }}>Username</th>
                  <th style={{ padding: "12px 20px" }}>Phone</th>
                  <th style={{ padding: "12px 20px" }}>Email</th>
                </tr>
              </thead>
              <tbody>
                {currentMembers.map((member, index) => {
                  return (
                    <tr
                      key={index}
                      style={{
                        borderBottom: "1px solid #ddd",
                        transition: "background-color 0.3s",
                      }}
                    >
                      <td style={{ padding: "10px 20px" }}>
                        <img
                          src={member.image}
                          alt={member.name}
                          style={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                          }}
                        />
                      </td>
                      <td style={{ padding: "10px 20px" }}>{member.name}</td>
                      <td style={{ padding: "10px 20px" }}>{member.username}</td>
                      <td style={{ padding: "10px 20px" }}>{member.phone}</td>
                      <td style={{ padding: "10px 20px" }}>{member.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              style={{ padding: "10px", margin: "0 5px", cursor: "pointer" }}
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => paginate(index + 1)}
                style={{
                  padding: "10px",
                  margin: "0 5px",
                  cursor: "pointer",
                  backgroundColor: currentPage === index + 1 ? "#085830" : "#fff",
                  color: currentPage === index + 1 ? "#fff" : "#085830",
                  border: "1px solid #085830",
                }}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              style={{ padding: "10px", margin: "0 5px", cursor: "pointer" }}
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TotalMember;
