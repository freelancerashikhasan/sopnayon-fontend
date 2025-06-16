import React, { useContext, useEffect, useState } from "react";
import {
  FaWallet,
  FaPiggyBank,
  FaDollarSign,
  FaChartLine,
  FaBriefcase,
  FaMoneyBillWave,
} from "react-icons/fa";
import axios from "axios";
import AuthContext from "../Context/AuthContext";

const iconsMap = {
  FaWallet: <FaWallet />,
  FaPiggyBank: <FaPiggyBank />,
  FaDollarSign: <FaDollarSign />,
  FaChartLine: <FaChartLine />,
  FaBriefcase: <FaBriefcase />,
  FaMoneyBillWave: <FaMoneyBillWave />,
};

function UserDashboard() {
  const [cards, setCards] = useState([]);
  const {url, authToken} = useContext(AuthContext);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken"); 
  
    axios
      .get(`${url}/user/dashboard`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response) => {
        setCards(response.data);
      })
      .catch((error) => {
        console.error("Error fetching dashboard data:", error);
      });
  }, []);

  const styles = {
    container: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "20px",
      padding: "20px",
      fontFamily: "'Arial', sans-serif",
    },
    card: {
      background: "linear-gradient(135deg,rgb(126, 206, 172),rgb(17, 90, 45))",
      color: "#fff",
      borderRadius: "15px",
      padding: "30px 20px",
      textAlign: "center",
      boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      cursor: "pointer",
      minWidth: "300px",
    },
    icon: {
      fontSize: "40px",
      marginBottom: "15px",
    },
    title: {
      fontSize: "20px",
      fontWeight: "bold",
      marginBottom: "10px",
    },
    amount: {
      fontSize: "32px",
      fontWeight: "bold",
    },
  };

  return (
    <div style={styles.container}>
      {cards.map((card, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.icon}>{iconsMap[card.icon]}</div>
          <div style={styles.title}>{card.title}</div>
          <div style={styles.amount}>{card.amount}</div>
        </div>
      ))}
    </div>
  );
}

export default UserDashboard;
