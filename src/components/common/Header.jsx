import React, { useState } from "react";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const titleStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#fffff",
    fontFamily: "'Poppins', sans-serif",
    textTransform: "uppercase",
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    letterSpacing: "3px",
    transition: "color 0.3s ease-in-out",
  };

  const underlineStyle = {
    content: '""',
    position: "absolute",
    bottom: "-5px",
    left: "0",
    width: "100%",
    height: "4px",
    background: "linear-gradient(90deg,rgb(52, 61, 62), #2193b0)",
    transition: "transform 0.3s ease-in-out",
    transform: isHovered ? "scaleX(1)" : "scaleX(0)",
    transformOrigin: "center",
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-600 shadow-lg">
      <div className="px-6 py-8 flex items-center justify-center">
        <h1
          style={titleStyle}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          Calendar Application for Communication Tracking
          <div style={underlineStyle}></div>
        </h1>
      </div>
    </header>
  );
};

export default Header;
