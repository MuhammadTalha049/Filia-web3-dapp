import React from "react";
import VideoPlayer from "./VideoPlayer";
import ChannelInfoInVideo from "./ChannelInfoInVideo";
export default function VIdeoComponent({ video }) {
  //console.log("Main VIdeo", video.title);
  return (
    <div>
      <VideoPlayer hash={video.hash} />
      <div className="flex justify-between flex-row py-4 border-borderWhiteGray dark:border-borderGray border-b-2">
        <div>
          <h3 className="text-2xl dark:text-white">{video.title}</h3>
          <p className="text-gray-500 mt-1">
            {video.category} • {new Date(video.createdAt * 1000).toLocaleString("en-IN")}
          </p>
        </div>
      </div>
      <ChannelInfoInVideo video={video} />
    </div>
  );
}
