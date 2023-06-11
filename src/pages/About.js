import React, { useContext } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { ThemeContext } from "../utils/ThemeContext";
import { Header } from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import metamaskIcon from "../assets/metamask.png";

const AboutPage = () => {
  const { theme } = useContext(ThemeContext);
  const cardVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
  };

  const containerVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  };

  const containerStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "0",
    backgroundColor: theme === "dark" ? "#111827" : "#F3F4F6",
    color: theme === "dark" ? "#FFFFFF" : "#374151",
    minHeight: "100vh", // Set the minimum height of the container to occupy the full viewport height
    display: "flex",
    flexDirection: "column",
    position: "relative",
  };

  const titleStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const gridStyle = {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "20px",
    marginTop: "20px",
    flex: 1,
  };

  const cardStyle = {
    padding: "20px",
    backgroundColor: theme === "dark" ? "#374151" : "#FFFFFF",
    color: theme === "dark" ? "#FFFFFF" : "#374151",
    borderRadius: "10px",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
  };

  const textStyle = {
    fontSize: "20px",
    fontWeight: "bold",
    marginBottom: "10px",
  };

  const listStyle = {
    listStyleType: "disc",
    paddingLeft: "20px",
    marginBottom: "10px",
  };

  const teamMemberStyle = {
    marginBottom: "10px",
    display: "flex", // Added display flex to align avatar and member details horizontally
  };

  const avatarStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    overflow: "hidden",
    marginRight: "10px",
  };

  const avatarImageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover", // Ensure the avatar image maintains its aspect ratio
  };

  const memberNameStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const memberRoleStyle = {
    color: "#888",
  };

  const socialLinksStyle = {
    marginTop: "5px",
  };

  const socialLinkStyle = {
    marginRight: "5px",
    padding: "5px",
    borderRadius: "50%",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme === "dark" ? "#4B5563" : "#EDF2F7",
    color: theme === "dark" ? "#FFFFFF" : "#374151",
    transition: "background-color 0.3s",
  };

  const FiliaCard = () => {
    const filiaCardStyle = {
      ...cardStyle,
      background: theme === "dark" ? "#374151" : "#FFFFFF",
      color: theme === "dark" ? "#FFFFFF" : "#374151",
    };

    return (
      <motion.div
        style={filiaCardStyle}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
      >
        <h2 style={textStyle}>Filia</h2>
        <p>
          Filia is a decentralized video platform that aims to revolutionize the way we consume and share content. With Filia, users have full control over their data and can directly engage with content creators.
        </p>
        <ul style={listStyle}>
          <li>Upload and share videos</li>
          <li>Discover new content</li>
          <li>Engage with creators</li>
          <li>Support your favorite creators</li>
        </ul>
      </motion.div>
    );
  };

  const TeamMemberCard = ({ name, role, avatar, github, linkedin }) => {
    const memberCardStyle = {
      ...cardStyle,
      background: theme === "dark" ? "#374151" : "#FFFFFF",
      color: theme === "dark" ? "#FFFFFF" : "#374151",
    };

    return (
      <motion.div
        style={memberCardStyle}
        variants={cardVariants}
        initial="initial"
        whileHover="hover"
      >
        <div style={teamMemberStyle}>
          <div style={avatarStyle}>
            <img src={avatar} alt={name} style={avatarImageStyle} />
          </div>
          <div>
            <div style={memberNameStyle}>{name}</div>
            <div style={memberRoleStyle}>{role}</div>
          </div>
        </div>
        <div style={socialLinksStyle}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <FiGithub />
            </a>
          )}
          {linkedin && (
            <a href={linkedin} target="_blank" rel="noopener noreferrer" style={socialLinkStyle}>
              <FiLinkedin />
            </a>
          )}
        </div>
      </motion.div>
    );
  };

  const MetamaskIcon = () => {
    const iconStyle = {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      opacity: 0.5,
    };

    const iconVariants = {
      animate: {
        scale: [1, 1.2, 1],
        rotate: [0, 0, 360],
        transition: {
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        },
      },
    };

    return (
      <motion.img
        src={metamaskIcon}
        alt="Metamask Icon"
        style={iconStyle}
        variants={iconVariants}
        animate="animate"
      />
    );
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
      <Header />
      <motion.div
        style={containerStyle}
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <MetamaskIcon />
        <h1 style={titleStyle}>About</h1>
        <div style={gridStyle}>
          <FiliaCard />
          {/* Add more custom cards or components here */}
        </div>
        <h2 style={textStyle}>Team</h2>
        <div style={gridStyle}>
          <TeamMemberCard
            name="Zohair"
            role="Backend/Integration"
            avatar="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/MetaMask_Fox.svg/1200px-MetaMask_Fox.svg.png"
            github="https://github.com/johndoe"
            linkedin="https://linkedin.com/in/johndoe"
          />
          <TeamMemberCard
            name="Muhammad Talha"
            role="Smart Contract Developer"
            avatar="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/512/Ethereum-ETH-icon.png"
            github="https://github.com/janesmith"
            linkedin="https://linkedin.com/in/janesmith"
          />
          <TeamMemberCard
            name="Laiba Zulfiqar"
            role="UI / UX"
            avatar="https://example.com/david-johnson-avatar.jpg"
            github="https://github.com/MuhammadTalha049"
            linkedin="https://linkedin.com/in/davidjohnson"
          />
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default AboutPage;
