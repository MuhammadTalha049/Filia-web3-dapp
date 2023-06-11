import React from "react";
import { useState, useEffect, useContext } from "react";
import { IoIosArrowUp } from "react-icons/io";
import { BsFillPersonFill } from "react-icons/bs";

import { ThemeContext } from "../utils/ThemeContext";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Sidebar from "../components/Sidebar";

const VotingPage = () => {
  const [leaders, setLeaders] = useState([
    { id: 1, name: "John", votes: 0 },
    { id: 2, name: "Jane", votes: 0 },
    { id: 3, name: "Mike", votes: 0 },
  ]);

  const [votedAddresses, setVotedAddresses] = useState([]);
  const aboutStyles = {
    ard: {
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.25)",
        marginBottom: "20px",
        padding: "20px",
        cursor: "pointer",
        transition: "background 0.3s ease", // Add transition for background color change
      },
      cardBackground: {
        light: {
          background: "#FFFFFF",
          color: "#000000",
        },
        dark: {
          background: "#000000",
          color: "#FFFFFF",
        },
      },
  teamMembers: [
    {
      name: "Zohair Khan",
      role: "Software Engineer",
      github: "https://github.com/zohairalamkhan",
      linkedin: "https://www.linkedin.com/in/zohair-khan",
    },
    {
      name: "Muhammad Talha",
      role: "Frontend Developer",
      github: "https://github.com/talhaabbasi",
      linkedin: "https://www.linkedin.com/in/muhammad-talha-abbasi",
    },
    {
      name: "Laiba Zulfiqar",
      role: "UI/UX Designer",
      github: "https://github.com/laibazulfiqar",
      linkedin: "https://www.linkedin.com/in/laiba-zulfiqar",
    },
  ],
};
  useEffect(() => {
    const storedLeaders = localStorage.getItem("leaders");
    const storedVotedAddresses = localStorage.getItem("votedAddresses");

    if (storedLeaders) {
      setLeaders(JSON.parse(storedLeaders));
    }

    if (storedVotedAddresses) {
      setVotedAddresses(JSON.parse(storedVotedAddresses));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("leaders", JSON.stringify(leaders));
  }, [leaders]);

  useEffect(() => {
    localStorage.setItem("votedAddresses", JSON.stringify(votedAddresses));
  }, [votedAddresses]);

  const handleVote = (id, address) => {
    if (!votedAddresses.includes(address)) {
      setLeaders((prevLeaders) =>
        prevLeaders.map((leader) => {
          if (leader.id === id) {
            return {
              ...leader,
              votes: leader.votes + 1,
            };
          }
          return leader;
        })
      );
      setVotedAddresses((prevAddresses) => [...prevAddresses, address]);
    }
  };

  const { theme } = useContext(ThemeContext);
  const pictionBlueColor = "#241f4e";

  return (
    <div
      className={`container mx-auto ${
        theme === "dark" ? "text-white" : "text-black"
      } pb-0`}
      style={{ paddingTop: 0 , height: "100vh"}}
    >
      <Header search={null} className="mt-0 mb-0" />

      <div className="flex">
        <Sidebar />

        <div className="flex-grow">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-6">
              <BsFillPersonFill className="inline-block text-blue-500 mr-2" />
              Elect Filia Leaders
            </h1>
            <p className="text-lg mb-4">
              Filia is a self-governed platform, where a limited number of
              leaders (currently 1) is elected and are in charge of securing the
              infrastructure. You can vote for them on this page. You can vote
              for up to 1 leader.
            </p>
          </div>

          <div
            className={`rounded-lg p-6 ${
              theme === "dark" ? "bg-gray-900" : "bg-gray-100"
            }`}
            style={{ ...aboutStyles.card, width: "80%" }}
          >
            <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
            <table
            className={`w-full ${
              theme === "dark"
                ? "bg-blue-900 text-white"
                : `border border-blue-500`
            }`}
          >
            <thead>
              <tr>
                <th
                  className={`text-left px-4 py-2 border-b ${
                    theme === "dark"
                      ? "border-gray-800"
                      : `border-blue-500 bg-${pictionBlueColor}`
                  }`}
                >
                  #
                </th>
                <th
                  className={`text-left px-4 py-2 border-b ${
                    theme === "dark"
                      ? "border-gray-800"
                      : `border-blue-500 bg-${pictionBlueColor}`
                  }`}
                >
                  Name
                </th>
                <th
                  className={`text-center px-4 py-2 border-b ${
                    theme === "dark"
                      ? "border-gray-800"
                      : `border-blue-500 bg-${pictionBlueColor}`
                  }`}
                >
                  Vote
                </th>
                <th
                  className={`text-right px-4 py-2 border-b ${
                    theme === "dark"
                      ? "border-gray-800"
                      : `border-blue-500 bg-${pictionBlueColor}`
                  }`}
                >
                  Votes
                </th>
              </tr>
            </thead>
            <tbody>
  {leaders.map((leader, index) => (
    <tr
      key={leader.id}
      className={`${index % 2 === 0 ? "bg-blue-100" : "bg-white"}`}
    >
      <td className={`text-left px-4 py-2 ${theme === "dark" ? "text-black" : "text-black"}`}>
        {index + 1}
      </td>
      <td className={`text-left px-4 py-2 ${theme === "dark" ? "text-black" : "text-black"}`}>
        {leader.name}
      </td>
      <td className="text-center px-4 py-2">
        <button
          className={`leader__vote-btn bg-${pictionBlueColor} hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full`}
          onClick={() => handleVote(leader.id, "walletAddress")}
          disabled={votedAddresses.includes("walletAddress")}
        >
          Vote
        </button>
      </td>
      <td className={`text-right px-4 py-2 ${theme === "dark" ? "text-black" : "text-black"}`}>
        {leader.votes}
      </td>
    </tr>
  ))}
</tbody>
          </table>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default VotingPage;




