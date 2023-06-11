import React, { useContext } from "react";
import { Colors } from "../constants/colors";
import { ThemeContext } from "../utils/ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  const lightBannerStyle = {
    color: Colors.primary,
    fontSize: "16px",
    animation: "marquee 20s linear infinite",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontWeight: "bold"
  };

  const darkBannerStyle = {
    color: theme === "dark" ? Colors.primary : "#fff",
    fontSize: "16px",
    animation: "marquee 20s linear infinite",
    whiteSpace: "nowrap",
    overflow: "hidden",
    fontWeight: "bold"
  };

  const containerStyle = {
    position: "fixed",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme === "dark" ? "#333" : "#f2f2f2",
    padding: "10px",
    textAlign: "center",
    width: "100%"
  };

  const bannerStyle = theme === "dark" ? darkBannerStyle : lightBannerStyle;

  return (
    <div style={containerStyle}>
      <marquee behavior="scroll" direction="left" style={bannerStyle}>
        <strong>Announcement:</strong> Welcome! to Filia DApp - Your gateway to decentralized content streaming.
      </marquee>
    </div>
  );
};

export default Footer;


export { Footer };
