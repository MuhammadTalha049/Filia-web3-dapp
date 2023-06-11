import React, { useContext } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { ThemeContext } from "../utils/ThemeContext";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import metamaskIcon from "../assets/metamask.png";

const AboutPage = () => {
  const { theme } = useContext(ThemeContext);

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <motion.div
        className="container"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "0",
          borderRadius: "10px",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme === "dark" ? "#111827" : "#f3f4f6",
          color: theme === "dark" ? "#ffffff" : "#374151",
        }}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <h1 className="title" style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "10px" }}>
          About
        </h1>
        <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", marginTop: "20px", flex: "1" }}>
          <div
            className="card"
            style={{
              padding: "20px",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
              color: theme === "dark" ? "#ffffff" : "#374151",
            }}
          >
            <h2 className="text-style" style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
              Filia
            </h2>
            <p>
              Filia is a decentralized video platform that aims to revolutionize the way we consume and share content. With Filia, users have full control over their data and can directly engage with content creators.
            </p>
            <ul className="list-style" style={{ listStyleType: "disc", paddingLeft: "20px", marginBottom: "10px" }}>
              <li>Upload and share videos</li>
              <li>Discover new content</li>
              <li>Engage with creators</li>
              <li>Support your favorite creators</li>
            </ul>
          </div>
          {/* Add more custom cards or components here */}
        </div>
        <h2 className="text-style" style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
          Team
        </h2>
        <div className="grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "20px", marginTop: "20px", flex: "1" }}>
          <div
            className="card"
            style={{
              padding: "20px",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
              color: theme === "dark" ? "#ffffff" : "#374151",
            }}
          >
            <div className="team-member" style={{ marginBottom: "10px", display: "flex" }}>
              <div className="avatar" style={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden", marginRight: "10px" }}>
                <img src={metamaskIcon} alt="Zohair" className="avatar-image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <div className="member-name" style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "5px" }}>
                  Zohair
                </div>
                <div className="member-role" style={{ color: "#888" }}>
                  Backend/Integration
                </div>
              </div>
            </div>
            <div className="social-links" style={{ marginTop: "5px" }}>
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link" style={{ marginRight: "5px", padding: "5px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s", backgroundColor: theme === "dark" ? "#4b5563" : "#edf2f7", color: theme === "dark" ? "#ffffff" : "#374151" }}>
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="social-link" style={{ marginRight: "5px", padding: "5px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s", backgroundColor: theme === "dark" ? "#4b5563" : "#edf2f7", color: theme === "dark" ? "#ffffff" : "#374151" }}>
                <FiLinkedin />
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{
              padding: "20px",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
              color: theme === "dark" ? "#ffffff" : "#374151",
            }}
          >
            <div className="team-member" style={{ marginBottom: "10px", display: "flex" }}>
              <div className="avatar" style={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden", marginRight: "10px" }}>
                <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png" alt="Muhammad Talha" className="avatar-image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <div className="member-name" style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "5px" }}>
                  Muhammad Talha
                </div>
                <div className="member-role" style={{ color: "#888" }}>
                  Smart Contract Developer
                </div>
              </div>
            </div>
            <div className="social-links" style={{ marginTop: "5px" }}>
              <a href="https://github.com/janesmith" target="_blank" rel="noopener noreferrer" className="social-link" style={{ marginRight: "5px", padding: "5px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s", backgroundColor: theme === "dark" ? "#4b5563" : "#edf2f7", color: theme === "dark" ? "#ffffff" : "#374151" }}>
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer" className="social-link" style={{ marginRight: "5px", padding: "5px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s", backgroundColor: theme === "dark" ? "#4b5563" : "#edf2f7", color: theme === "dark" ? "#ffffff" : "#374151" }}>
                <FiLinkedin />
              </a>
            </div>
          </div>
          <div
            className="card"
            style={{
              padding: "20px",
              borderRadius: "10px",
              position: "relative",
              overflow: "hidden",
              cursor: "pointer",
              backgroundColor: theme === "dark" ? "#374151" : "#ffffff",
              color: theme === "dark" ? "#ffffff" : "#374151",
            }}
          >
            <div className="team-member" style={{ marginBottom: "10px", display: "flex" }}>
              <div className="avatar" style={{ width: "50px", height: "50px", borderRadius: "50%", overflow: "hidden", marginRight: "10px" }}>
                <img src="https://example.com/david-johnson-avatar.jpg" alt="Laiba Zulfiqar" className="avatar-image" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div>
                <div className="member-name" style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "5px" }}>
                  Laiba Zulfiqar
                </div>
                <div className="member-role" style={{ color: "#888" }}>
                  UI / UX
                </div>
              </div>
            </div>
            <div className="social-links" style={{ marginTop: "5px" }}>
              <a href="https://github.com/MuhammadTalha049" target="_blank" rel="noopener noreferrer" className="social-link" style={{ marginRight: "5px", padding: "5px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s", backgroundColor: theme === "dark" ? "#4b5563" : "#edf2f7", color: theme === "dark" ? "#ffffff" : "#374151" }}>
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/davidjohnson" target="_blank" rel="noopener noreferrer" className="social-link" style={{ marginRight: "5px", padding: "5px", borderRadius: "50%", display: "inline-flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s", backgroundColor: theme === "dark" ? "#4b5563" : "#edf2f7", color: theme === "dark" ? "#ffffff" : "#374151" }}>
                <FiLinkedin />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default AboutPage;
