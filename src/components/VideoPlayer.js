import React from "react";
import Plyr from "plyr-react";
import "plyr-react/dist/plyr.css";

const gatewayUrl = "https://fyp123.infura-ipfs.io/ipfs/";

export default function App({ hash }) {
  //console.log(gatewayUrl + hash);
  let url = gatewayUrl + hash;

  const playerOptions = {
    autoplay: true,
    controls: ["play", "progress", "current-time", "mute", "volume", "fullscreen"],
    settings: ["quality", "speed"],
    captions: {
      active: true,
      language: "en",
    },
    keyboard: {
      global: true,
    },
  };

  return (
    <div className="player-wrapper">
      <Plyr
        source={{
          type: "video",
          title: "Example title",
          sources: [
            {
              src: url,
              type: "video/mp4",
            },
          ],
        }}
        options={playerOptions}
        autoPlay={true}
      />
    </div>
  );
}
