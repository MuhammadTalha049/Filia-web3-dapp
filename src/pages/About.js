import React, { useContext } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import { ThemeContext } from "../utils/ThemeContext";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import metamaskIcon from "../assets/metamask.png";
import "../styles/aboutpage.css";

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
        className={`container ${theme === "dark" ? "dark" : "light"}`}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <h1 className="title">About</h1>
        <div className="grid">
          <div className={`card ${theme === "dark" ? "dark" : "light"}`}>
            <h2 className="text-style">Filia</h2>
            <p>
              Filia is a decentralized video platform that aims to revolutionize the way we consume and share content. With Filia, users have full control over their data and can directly engage with content creators.
            </p>
            <ul className="list-style">
              <li>Upload and share videos</li>
              <li>Discover new content</li>
              <li>Engage with creators</li>
              <li>Support your favorite creators</li>
            </ul>
          </div>
          {/* Add more custom cards or components here */}
        </div>
        <h2 className="text-style">Team</h2>
        <div className="grid">
          <div className={`card ${theme === "dark" ? "dark" : "light"}`}>
            <div className="team-member">
              <div className="avatar">
                <img src={metamaskIcon} alt="Zohair" className="avatar-image" />
              </div>
              <div>
                <div className="member-name">Zohair</div>
                <div className="member-role">Backend/Integration</div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/johndoe" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiLinkedin />
              </a>
            </div>
          </div>
          <div className={`card ${theme === "dark" ? "dark" : "light"}`}>
            <div className="team-member">
              <div className="avatar">
                <img src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png" alt="Muhammad Talha" className="avatar-image" />
              </div>
              <div>
                <div className="member-name">Muhammad Talha</div>
                <div className="member-role">Smart Contract Developer</div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/janesmith" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/janesmith" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiLinkedin />
              </a>
            </div>
          </div>
          <div className={`card ${theme === "dark" ? "dark" : "light"}`}>
            <div className="team-member">
              <div className="avatar">
                <img src="https://example.com/david-johnson-avatar.jpg" alt="Laiba Zulfiqar" className="avatar-image" />
              </div>
              <div>
                <div className="member-name">Laiba Zulfiqar</div>
                <div className="member-role">UI / UX</div>
              </div>
            </div>
            <div className="social-links">
              <a href="https://github.com/MuhammadTalha049" target="_blank" rel="noopener noreferrer" className="social-link">
                <FiGithub />
              </a>
              <a href="https://linkedin.com/in/davidjohnson" target="_blank" rel="noopener noreferrer" className="social-link">
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
