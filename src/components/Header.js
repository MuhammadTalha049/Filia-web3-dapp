import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { Link } from "react-router-dom";
import Toggle from "../utils/ThemeToggle";
import Logo from "../assets/logo.svg";
import { Jazzicon } from "@ukstv/jazzicon-react";
import { ThemeContext } from "../utils/ThemeContext";

export const Header = ({ search , setWalletAddress }) => {
  const { theme } = React.useContext(ThemeContext);
  const [address, setAddress] = React.useState(localStorage.getItem("walletAddress"));
  const [showAddress, setShowAddress] = React.useState(false);
  const searchBarStyles = {
    border: theme === "dark" ? "2px solid black" : "2px solid #006AFF",
  };
  

  React.useEffect(() => {
    setAddress(localStorage.getItem("walletAddress"));
  }, []);

  const getAddressColor = () => {
    return theme === "dark" ? "text-white" : "text-black";
  };

  const handleAccountClick = () => {
    setShowAddress(!showAddress);
  };

  

  return (
    <header
      className="w-full flex justify-between h-20 items-center border-b p-4 border-borderWhiteGray dark:border-borderGray"
    >
      <div className="flex items-center">
        <Link to="/app">
          <img width={30} src={Logo} alt="Logo" />
        </Link>
        <h1 className="text-2xl font-bold ml-2 text-gray-900 dark:text-gray-100">
          Filia
        </h1>
      </div>
      <div className="w-1/3 flex justify-center items-center">
        {search && (
          <input
            type="text"
            onChange={(e) => search(e.target.value)}
            placeholder="Type to search"
            className={`border-0 dark:bg-backgroundBlack text-gray-600 dark:text-white focus:outline-none ${searchBarStyles.border}`}
          />
        )}
      </div>
      <div className="w-1/3 flex justify-end items-center">
        <Link to="/upload">
          <AiOutlinePlusCircle
            size="30px"
            className="mr-8 fill-whiteIcons dark:fill-white cursor-pointer"
          />
        </Link>
        <Toggle />
        <Link to="/about" className="text-md font-bold ml-2 text-gray-900 dark:text-gray-100 cursor-pointer">
          About
        </Link>
        <div className="relative ml-8">
          <div
            onClick={handleAccountClick}
            className="w-[30px] h-[30px] cursor-pointer"
          >
            <Jazzicon address={address} />
          </div>
          {showAddress && (
            <div className="absolute top-[38px] right-0 py-2 px-4 bg-white dark:bg-backgroundBlack shadow-lg rounded text-black dark:text-white">
              <div className={`ml-2 ${getAddressColor()}`}>{address}</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
