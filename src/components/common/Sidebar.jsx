import React, { useState } from "react";
import { BarChart3, Bell, User } from "lucide-react";
import icon from "../common/icon.jpg";

const Sidebar = () => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const handleNavigation = (path) => {
    setCurrentPath(path);
    window.location.pathname = path;
  };

  const sidebarStyle = {
    height: "100vh",
    width: "280px",
    background: "linear-gradient(135deg,rgb(8, 23, 64),rgb(46, 48, 52))",
    color: "#ffffff",
    padding: "32px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxShadow: "2px 0px 8px rgba(0, 0, 0, 0.1)",
  };

  const logoStyle = {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    marginBottom: "24px",
    border: "3px solid #ffffff",
  };

  const buttonStyle = {
    width: "100%",
    padding: "16px 20px",
    marginBottom: "24px",
    display: "flex",
    alignItems: "center",
    borderRadius: "8px",
    fontWeight: "500",
    fontSize: "16px",
    cursor: "pointer",
    transition: "all 0.3s ease-in-out",
    color: "#ffffff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    border: "none",
  };

  const activeButtonStyle = {
    ...buttonStyle,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    boxShadow: "0 4px 8px rgba(255, 255, 255, 0.2)",
  };

  const iconStyle = {
    marginRight: "16px",
    width: "24px",
    height: "24px",
  };

  const hoverEffect = {
    transform: "scale(1.05)",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={sidebarStyle}>
      {/* Sidebar Logo */}
      <img src={icon} alt="Logo" style={logoStyle} />

      {/* Navigation Buttons */}
      <div style={{ width: "100%", marginTop: "32px" }}>
        <button
          onClick={() => handleNavigation("/admin")}
          style={
            currentPath === "/admin"
              ? activeButtonStyle
              : buttonStyle
          }
          onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverEffect)}
          onMouseOut={(e) =>
            Object.assign(e.currentTarget.style, {
              transform: "scale(1)",
              boxShadow: "none",
            })
          }
        >
          <BarChart3 style={iconStyle} />
          <span>Admin</span>
        </button>

        <button
          onClick={() => handleNavigation("/user")}
          style={
            currentPath === "/user"
              ? activeButtonStyle
              : buttonStyle
          }
          onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverEffect)}
          onMouseOut={(e) =>
            Object.assign(e.currentTarget.style, {
              transform: "scale(1)",
              boxShadow: "none",
            })
          }
        >
          <User style={iconStyle} />
          <span>User</span>
        </button>

        <button
          onClick={() => handleNavigation("/reports")}
          style={
            currentPath === "/reports"
              ? activeButtonStyle
              : buttonStyle
          }
          onMouseOver={(e) => Object.assign(e.currentTarget.style, hoverEffect)}
          onMouseOut={(e) =>
            Object.assign(e.currentTarget.style, {
              transform: "scale(1)",
              boxShadow: "none",
            })
          }
        >
          <Bell style={iconStyle} />
          <span>Reports</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
