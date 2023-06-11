import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Main from "./pages/main";
import Upload from "./pages/Upload";
import Hero from "./pages/Hero";
import VideoPage from "./pages/Video";
import AboutPage from "./pages/About";
import VotingPage from "./pages/Voting";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const [UserWallet, setUserWallet] = useState(null);
  const navigate = useNavigate();

  const checkedWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      // Request access to user's Ethereum accounts
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: `0x${Number(80001).toString(16)}` }],
      });

      //console.log("Connected", accounts[0]);
      localStorage.setItem("walletAddress", accounts[0]);

      navigate("/app");
    } catch (error) {
      //console.log(error);
    }
  };

  useEffect(() => {
    checkedWallet();
    if (window.ethereum) {
      window.ethereum.on("chainChanged", () => {
        window.location.reload();
      });
      window.ethereum.on("accountsChanged", () => {
        checkedWallet();
      });
    }
  }, []);

  return (
    <React.Fragment>
      <AnimatePresence exitBeforeEnter>
        <Routes>
          <Route
            path="/app"
            element={
              <motion.div
                key="app"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Main userWallet={UserWallet} />
              </motion.div>
            }
          />
          <Route
            path="/"
            exact
            element={
              <motion.div
                key="hero"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Hero />
              </motion.div>
            }
          />
          <Route
            path="/voting"
            element={
              <motion.div
                key="voting"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <VotingPage />
              </motion.div>
            }
          />
          <Route
            path="/upload"
            element={
              <motion.div
                key="upload"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Upload />
              </motion.div>
            }
          />
          <Route
            path="/video"
            element={
              <motion.div
                key="video"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <VideoPage />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                key="about"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <AboutPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </React.Fragment>
  );
}
