import React, { useEffect, useState } from "react";
import { useApolloClient, gql } from "@apollo/client";
import { Header } from "../components/Header";
import Sidebar from "../components/Sidebar";
import VideoComponent from "../components/VideoComponent";
import Video from "../components/Video";
import getContract from "../utils/getContract";
import { Link } from "react-router-dom";

export default function VideoPage() {
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");

  const client = useApolloClient();
  const getUrlVars = () => {
    var vars = {};
    var parts = window.location.href.replace(
      /[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      }
    );
    return vars;
  };

  const GET_VIDEOS = gql`
    query videos(
      $first: Int
      $skip: Int
      $orderBy: Video_orderBy
      $orderDirection: OrderDirection
      $where: Video_filter
    ) {
      videos(
        first: $first
        skip: $skip
        orderBy: $orderBy
        orderDirection: $orderDirection
        where: $where
      ) {
        id
        hash
        title
        description
        location
        category
        thumbnailHash
        isAudio
        date
        author
        createdAt
      }
    }
  `;

  const getRelatedVideos = () => {
    client
      .query({
        query: GET_VIDEOS,
        variables: {
          first: 20,
          skip: 0,
          orderBy: "createdAt",
          orderDirection: "desc",
          where: {}
        },
        fetchPolicy: "network-only"
      })
      .then(({ data }) => {
        setRelatedVideos(data.videos);
        const video = data?.videos?.find((video) => video.id === getUrlVars().id);
        setVideo(video);
      })
      .catch((err) => {
        alert("Something went wrong. Please try again!", err.message);
      });
  };

  // Load comments for the specific video from local storage on component mount
  useEffect(() => {
    const storedComments = localStorage.getItem("comments");
    if (storedComments) {
      setComments(JSON.parse(storedComments));
    }
  }, []);

  // Save comments to local storage whenever there's a change
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();

    // Generate a unique ID for the comment
    const commentId = new Date().getTime().toString();

    // Create a new comment object
    const newCommentObj = {
      id: commentId,
      content: newComment,
      createdAt: new Date(),
    };

    // Update the comments for the specific video
    setComments((prevComments) => ({
      ...prevComments,
      [video.id]: [...(prevComments[video.id] || []), newCommentObj],
    }));

    // Clear the comment input field
    setNewComment("");
  };

  useEffect(() => {
    getRelatedVideos();
  }, []);

  return (
    <div className="w-full  flex flex-row">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        {video && (
          <div className="flex flex-col m-10 justify-between	  lg:flex-row">
            <div className="lg:w-4/6 w-6/6">
              <VideoComponent video={video} />
              <div className="mt-5">
                <h4 className="text-md font-bold dark:text-white mb-3 text-black">
                  Comments
                </h4>
                <div>
                  {comments[video.id]?.map((comment) => (
                    <div key={comment.id} className="mb-3">
                      <p className="text-sm text-gray-600">{comment.content}</p>
                      <p className="text-xs text-gray-400">{comment.createdAt.toLocaleString()}</p>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleSubmitComment}>
                  <input
                    type="text"
                    value={newComment}
                    onChange={handleCommentChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    placeholder="Write a comment..."
                  />
                  <button
                    type="submit"
                    className="bg-blue-500 text-white rounded px-4 py-2 mt-3"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
            <div className="w-2/6">
              <h4 className="text-md font-bold dark:text-white ml-5 mb-3 text-black">
                Related Videos
              </h4>
              {relatedVideos.map((relatedVideo) => (
                <Link
                  onClick={() => {
                    setVideo(relatedVideo);
                  }}
                  to={`/video?id=${relatedVideo.id}`}
                  key={relatedVideo.id}
                >
                  <Video video={relatedVideo} horizontal={true} />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
