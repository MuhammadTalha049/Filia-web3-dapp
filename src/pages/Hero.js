import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaWallet,
  FaBitcoin,
  FaLink,
  FaRainbow,
  FaCircle
} from "react-icons/fa";
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
    localStorage.setItem("walletAddress", "0x0000000000000000000000000000000000000000");
    navigate("/app");
  };

  return (
    <>
      <section
        className="w-full dark relative bg-black flex flex-col h-screen justify-center items-center md:flex-row"
        style={{
          overflow: "hidden",
          paddingTop: "8rem",
          paddingBottom: "16rem",
        }}
      >
        {/* Illustration behind hero content */}
        <div
          className="absolute animate-float transform -translate-x-1/2 pointer-events-none"
          style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "auto" }}
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#3B84F5" offset="0%" />
                <stop stopColor="#34A9DC" offset="77.402%" />
                <stop stopColor="#2DD3BF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle className="left-20" cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div
            className="pt-8 pb-16 md:pt-20 md:pb-32"
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              maxWidth: "42rem",
              margin: "0 auto",
            }}
          >
            {/* Section header */}
            <div className="text-center pb-8 md:pb-12 section-content">
              <h1
                className="text-4xl md:text-5xl text-white md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
                style={{
                  fontSize: "2.5rem",
                  lineHeight: "1.1",
                  fontWeight: "800",
                  letterSpacing: "-0.025em",
                  marginTop: 0,
                  marginBottom: "1rem",
                }}
              >
                Filia
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-sm md:text-lg text-gray-400 mb-6 md:mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: "1.6",
                    marginTop: 0,
                    marginBottom: "1rem",
                    color: "#a1a1aa",
                  }}
                >
                  Filia is built on top of the Ethereum network, allowing users
                  to create, share, and watch videos without worrying about
                  their privacy.
                </p>
                {/* Connect wallet button */}
                <div className="flex justify-center">
                  <button
                    className="flex items-center bg-white rounded-full font-medium p-3 md:p-4 shadow-lg wallet-button"
                    onClick={() => setShowWalletOptions(true)}
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.25",
                      fontWeight: "500",
                      padding: "0.75rem 1rem",
                      marginTop: 0,
                      marginBottom: "1rem",
                      boxShadow:
                        "rgba(0, 0, 0, 0.16) 0px 1px 4px, rgba(0, 0, 0, 0.12) 0px 2px 16px",
                    }}
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
                  style={{
                    fontSize: "0.75rem",
                    lineHeight: "1.4",
                    marginTop: "1rem",
                    marginBottom: 0,
                    cursor: "pointer",
                    color: "#a1a1aa",
                  }}
                >
                  Continue as a guest
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Wallet options pop-up modal */}
      <CSSTransition
        in={showWalletOptions}
        timeout={300}
        classNames="wallet-options"
        unmountOnExit
      >
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75"
          style={{ zIndex: 999 }}
        >
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
              className="block w-full py-2 px-4 rounded bg-blue-500 text-white font-semibold"
              onClick={() => setShowWalletOptions(false)}
            >
              Cancel
            </button>
          </div>
        </div>
      </CSSTransition>
    </>
  );
}

export default HeroHome;
