import React, { useState } from "react";
import YouTube from "react-youtube";

const MediaPlayer = (props) => {
  const { mediaLink } = props;

  // to set Video Title
  const [videoTitle, setVideoTitle] = useState("");

  //
  const onReady = (event) => {
    const player = event.target;
    const videoData = player.getVideoData();
    setVideoTitle(videoData.title);
  };
  // Customizations for Youtube media player
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  // Handling error if there is an error in video
  const onError = (event) => {
    // console.log(event);
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
    const player = e.target;
    const watchedDuration = player.getCurrentTime();
    console.log(watchedDuration);
  };

  return (
    <>
      {/* Media Player  */}
      <div className="media-container w-full px-14 py-10 flex flex-col gap-5">
        {mediaLink && (
          <YouTube
            className="rounded-md border-4 border-gray-400 w-8/12 h-132"
            videoId={mediaLink}
            onPause={handlerPause}
            onPlay={() => console.log("Playing")}
            opts={opts}
            onError={onError}
            onReady={onReady}
          />
        )}
        {mediaLink && <h1 className="text-white text-3xl">{videoTitle}</h1>}
      </div>
      
    </>
  );
};

export default MediaPlayer;
