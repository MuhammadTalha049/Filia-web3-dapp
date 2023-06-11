import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaBitcoin,
  FaLink,
  FaRainbow,
  FaCircle,
} from "react-icons/fa";
import "./hero.css";
import { CSSTransition } from "react-transition-group";

function HeroHome() {
  const [showWalletOptions, setShowWalletOptions] = useState(false);
  const navigate = useNavigate();

  const connectWallet = async (selectedWallet) => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      console.log("Connected", accounts[0]);
      localStorage.setItem("walletAddress", accounts[0]);
      navigate("/app");
    } catch (error) {
      console.log(error);
    }
  };

  const continueAsGuest = () => {
    localStorage.setItem(
      "walletAddress",
      "0x0000000000000000000000000000000000000000"
    );
    navigate("/app");
  };

  return (
    <section
      className="w-full dark relative bg-black flex flex-col justify-center items-center md:flex-row overflow-hidden"
      style={{ height: "100vh", width: "100vw" }}
    >
      {/* Illustration behind hero content */}
     

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-8 pb-16 md:pt-20 md:pb-32">
          {/* Section header */}
          <div className="text-center pb-8 md:pb-12 section-content">
            <h1
              className="text-4xl md:text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
              data-aos="zoom-y-out"
            >
              Filia
            </h1>
            <div className="max-w-3xl mx-auto">
              <p
                className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8"
                data-aos="zoom-y-out"
                data-aos-delay="150"
              >
                Filia is built on top of the Ethereum network, allowing users
                to create, share, and watch videos without worrying about their
                privacy.
              </p>
              {/* Connect wallet button */}
              <div className="flex justify-center">
                <button
                  className="flex items-center bg-white rounded-full font-medium p-3 md:p-4 shadow-lg wallet-button"
                  onClick={() => setShowWalletOptions(true)}
                >
                  <FaWallet className="mr-2" size={18} />
                  <span className="text-sm md:text-base">
                    Connect your wallet to continue
                  </span>
                </button>
              </div>
              {/* Continue as guest link */}
              <p
                onClick={continueAsGuest}
                className="text-gray-400 mt-4 md:mt-5 guest-link text-center text-xs md:text-sm"
              >
                Continue as a guest
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Wallet options pop-up modal */}
      <CSSTransition
        in={showWalletOptions}
        timeout={300}
        classNames="wallet-options"
        unmountOnExit
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">
              Select a Wallet
            </h2>
            <button
              className="block w-full py-2 px-4 mb-4 rounded bg-blue-500 text-white font-semibold flex items-center"
              onClick={() => connectWallet("wallet1")}
            >
              <FaBitcoin className="mr-2" size={16} />
              Metamask
            </button>
            <button
              className="block w-full py-2 px-4 mb-4 rounded bg-blue-500 text-white font-semibold flex items-center"
              onClick={() => connectWallet("wallet2")}
            >
              <FaLink className="mr-2" size={16} />
              Coinbase
            </button>
            <button
              className="block w-full py-2 px-4 mb-4 rounded bg-blue-500 text-white font-semibold flex items-center"
              onClick={() => connectWallet("wallet3")}
            >
              <FaCircle className="mr-2" size={16} />
              WalletConnect
            </button>
            <button
              className="block w-full py-2 px-4 mb-4 rounded bg-blue-500 text-white font-semibold flex items-center"
              onClick={() => connectWallet("wallet4")}
            >
              <FaRainbow className="mr-2" size={16} />
              Rainbow
            </button>
            {/* Add more wallet options as needed */}
            <button
              className="block w-full py-2 px-4 rounded bg-gray-300 font-semibold"
              onClick={() => setShowWalletOptions(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </CSSTransition>
    </section>
  );
}

export default HeroHome;
