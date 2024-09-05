import React from "react";
import YouTube from "react-youtube";
import { useSelector, useDispatch } from "react-redux";
import {
  setVideoData,
  setCurrentTime,
} from "../../features/currentVideo/videoSlice";

const VideoPlayer = () => {
  // fetching video Id from redux store
  const video = useSelector((state) => state.videoInfo);

  const dispatch = useDispatch();

  // When our video is ready to play
  const onReady = (event) => {
    window.scrollTo({
      top: 230,
      behavior: "smooth",
    });

    const videoPlayer = event.target;

    const videoData = videoPlayer.getVideoData();

    dispatch(
      setVideoData({
        title: videoData.title,
        videoId: videoData.video_id,
        author: videoData.author,
        duration: videoPlayer.getDuration(),
        currentTime: videoPlayer.getCurrentTime(),
      })
    );
  };

  // Customizations for Youtube media player
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  // Handling error if there is an error in video
  const onError = (event) => {
    switch (event.data) {
      case 2:
        toast.error("Invalid parameter value");
        break;
      case 5:
        toast.error("HTML5 player error");
        break;
      case 100:
        toast.error("Video not found");
        break;
      case 101:
      case 150:
        toast.error("Video not allowed to be played in embedded players");
        break;
      default:
        toast.error("Unknown error");
        break;
    }
  };

  // pause handler
  const handlerPause = (e) => {
    const videoPlayer = e.target;
    const currentTime = Math.floor(videoPlayer.getCurrentTime());
    dispatch(setCurrentTime(currentTime));
  };

  return (
    <>
      {/* Media Player */}
      <div className="flex flex-col gap-5 w-full md:w-10/12 lg:w-8/12 mx-auto p-4">
        <div className="media-content h-60 sm:h-96 md:h-120 lg:h-132">
          <YouTube
            className="rounded-md border-4 border-gray-400 w-full h-full"
            videoId={video.videoId}
            onPause={handlerPause}
            onPlay={() => console.log("Playing")}
            opts={opts}
            onError={onError}
            onReady={onReady}
          />
        </div>
        <p className="text-lg sm:text-2xl md:text-3xl font-bold text-white truncate">
          {video.videoData.title}
        </p>
      </div>
    </>
  );
};

export default VideoPlayer;
