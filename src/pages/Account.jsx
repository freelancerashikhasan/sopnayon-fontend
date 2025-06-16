import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../Context/AuthContext";
import UserDashboard from "../components/UserDashboard";
import { FaArrowLeft, FaBars } from "react-icons/fa";
import UserProfile from "../components/UserProfile";
import Transaction from "../components/Transaction";
import TotalMember from "../components/TotalMember";
import TotalDonorMember from "../components/TotalDonorMember";

const Account = () => {
  const { logout } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [isSidebarVisible, setIsSidebarVisible] = useState(window.innerWidth >= 992);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      setIsSidebarVisible(window.innerWidth >= 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    logout();
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <UserDashboard />;
      case "profile":
        return <UserProfile />;
      case "transaction history":
        return <Transaction />;
      case "total member":
        return <TotalMember />;
      case "donor member":
        return <TotalDonorMember />;
      default:
        return <div>Welcome to the Dashboard!</div>;
    }
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div
        className="sidebar text-white p-4"
        style={{
          display: isSidebarVisible ? "block" : "none", // Completely hide when invisible
          width: "250px",
          backgroundColor: "#348056",
          transition: "all 0.3s ease",
          ...(isMobile
            ? { position: "fixed", top: 0, left: 0, height: "100vh", zIndex: 1050 }
            : {}), // Only fixed for mobile screens
        }}
      >
            {isMobile && (
            <button
              className="btn btn-dark mb-3 text-right"
              onClick={toggleSidebar}
              style={{
                left: "10px",
                zIndex: 1100,
              }}
            >
              {isSidebarVisible ? <FaArrowLeft /> : <FaBars />}
            </button>
          )}
        <button className="btn btn-danger w-100 mb-3" onClick={handleLogout}>
          Log Out
        </button>
        <ul className="list-unstyled">
          {["dashboard", "profile", "transaction history", "total member", "donor member"].map((tab) => (
            <li
              key={tab}
              className={`p-3 sidebar-item ${activeTab === tab ? "bg-secondary" : ""}`}
              onClick={() => {
                setActiveTab(tab);
                if (isMobile) setIsSidebarVisible(false);
              }}
              style={{ cursor: "pointer", borderRadius: "5px" }}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </li>
          ))}
        </ul>
      </div>

      {/* Main Content */}
      <div
        className="main-content p-4"
        style={{
          width: isSidebarVisible && !isMobile ? "calc(100% - 250px)" : "100%",
          transition: "margin-left 0.3s ease, width 0.3s ease",
          minHeight: "100vh",
        }}
      >
        {/* Sidebar Toggle Button (Only Visible on Small Screens) */}
        {isMobile && (
          <button
            className="btn btn-success mb-3"
            onClick={toggleSidebar}
            style={{
              left: "10px",
              zIndex: 1100,
            }}
          >
            {isSidebarVisible ? <FaArrowLeft /> : <FaBars />}
          </button>
        )}

        {/* Page Title */}
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "bold",
            backgroundColor: "#348056",
            color: "white",
            borderRadius: "10px",
            padding: "10px 20px",
            marginBottom: "20px",
            boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
        </h1>

        {/* Dynamic Content */}
        {renderContent()}
      </div>
    </div>
  );
};

export default Account;
