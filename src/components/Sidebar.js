import React, { useState, useContext } from "react";
import { AiOutlineBook, AiOutlineBulb, AiOutlineCompass, AiOutlineDribbble, AiOutlineFire, AiOutlineMenu, AiOutlinePlayCircle } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { IoGameControllerOutline, IoNewspaperOutline } from "react-icons/io5";
import { ThemeContext } from "../utils/ThemeContext";
import { Colors } from "../constants/colors";
import { Link } from "react-router-dom";

export default function Sidebar({ updateCategory }) {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("All");
  const { theme } = useContext(ThemeContext);

  const iconColor = theme === "dark" ? Colors.primary : "black";
  const textColor = theme === "dark" ? "white" : "black";

  let categories = [
    {
      name: "All",
      icon: <AiOutlineFire size={25} color={active === "All" ? Colors.primary : iconColor} />,
      onClick: () => {
        setActive("All");
        updateCategory("");
      },
    },
    {
      name: "Travel",
      icon: <AiOutlineCompass size={25} color={active === "Travel" ? Colors.primary : iconColor} />,
      onClick: () => {
        setActive("Travel");
        updateCategory("Travel");
      },
    },
    {
      name: "Sports",
      icon: <AiOutlineDribbble size={25} color={active === "Sports" ? Colors.primary : iconColor} />,
      onClick: () => {
        setActive("Sports");
        updateCategory("Sports");
      },
    },
    {
      name: "Music",
      icon: <AiOutlinePlayCircle size={25} color={active === "Music" ? Colors.primary : iconColor} />,
      onClick: () => {
        setActive("Music");
        updateCategory("Music");
      },
    },
    {
      name: "Technology",
      icon: <AiOutlineBulb size={25} color={active === "Technology" ? Colors.primary : iconColor} />,
      onClick: () => {
        setActive("Technology");
        updateCategory("Technology");
      },
    },
    {
      name: "Gaming",
      icon: <IoGameControllerOutline size={25} color={active === "Gaming" ? Colors.primary : iconColor} />,
      onClick: () => {
        setActive("Gaming");
        updateCategory("Gaming");
      },
    },
    {
      name: "Entertainment",
      icon: <AiOutlineBook size={25} color={active === "Entertainment" ? Colors.primary : iconColor} />,
      onClick: () => {
        setActive("Entertainment");
        updateCategory("Entertainment");
      },
    },
    {
      name: "Education",
      icon: <AiOutlineBook size={25} color={active === "Education" ? Colors.primary : iconColor} />,
      onClick: () => {
        setActive("Education");
        updateCategory("Education");
      },
    },
    {
      name: "News",
      icon: <IoNewspaperOutline size={25} color={active === "News" ? Colors.primary : iconColor} />,
      onClick: () => {
        setActive("News");
        updateCategory("News");
      },
    },
    {
      name: "Other",
      icon: <BiNews size={25} color={active === "Other" ? Colors.primary : iconColor} />,
      onClick: () => {
        setActive("Other");
        updateCategory("Other");
      },
    },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 
  const menuContainerStyle = {
    height: isOpen ? "auto" : "0",
    overflow: "hidden",
    transition: "height 1s ease",
    marginTop: "16px",
  };

  const menuItemsStyle = {
    opacity: isOpen ? "1" : "0",
    transition: "opacity 1s ease",
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  };

  return (
    <div className={`border-r border-borderWhiteGray dark:border-borderGray p-1 ${theme === "dark" ? "bg-darkSidebar" : "bg-lightSidebar"}`}>
      <style>{`
        .menu-items {
          margin-top: 32px;
        }
        .hamburger-icon {
          margin-top: 23px;
          margin-left: 16px;
        }
      `}</style>
      <div onClick={toggleMenu} className="hamburger-icon">
        <AiOutlineMenu size={25} color="#fff" className={`fill-whiteIcons ${theme === "dark" ? "dark:fill-white" : ""}`} />
      </div>
      <div className="menu-container" style={menuContainerStyle}>
        <div className="menu-items" style={menuItemsStyle}>
        <Link to="/voting">
            <div className={`flex items-center cursor-pointer ${textColor} ${active === "VotingPage" ? "font-bold" : ""}`}>
              <span>{<BiNews size={25} color={active === "VotingPage" ? Colors.primary : iconColor} />}</span>
              <span className="ml-2">Voting Page</span>
            </div>
          </Link>
          {categories.map((category, index) => (
            <div className="cursor-pointer flex items-center" onClick={category.onClick} key={index}>
              {category.icon}
              <span className={`ml-2 ${theme === "dark" ? "text-white" : "text-black"}`}>{category.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
