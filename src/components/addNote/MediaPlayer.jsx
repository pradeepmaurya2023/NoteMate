import React, { useState } from "react";
import YouTube from "react-youtube";
import NoteForm from "./NoteForm";

const MediaPlayer = (props) => {
  // destructuring Props
  const { mediaLink, notes, setNotes } = props;

  // set video Info
  const [player, setPlayer] = useState({});

  // to set Video Title
  const [videoTitle, setVideoTitle] = useState("");

  //
  const onReady = (event) => {
    // scrolling window once video is loaded
    window.scrollTo({
      top: 250,
      behavior: "smooth",
    });

    // setting video info
    const videoPlayer = event.target;
    // console.log(videoPlayer)
    setPlayer(videoPlayer);
    const videoData = videoPlayer.getVideoData();
    // console.log(videoData)
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

  // convert seconds into readable format
  function convertSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    if (hours > 0) {
      return `${hours}:${minutes}:${remainingSeconds}`;
    } else {
      return `${minutes}:${remainingSeconds}`;
    }
  }

  // get watchedDureation
  const watchedDuration = () => {
    // console.log(player.getVideoData())
    if (player) {
      return convertSeconds(player.getCurrentTime());
    }
  };

  // pause handler
  const handlerPause = (e) => {
    // console.log(watchedDuration())
  };

  return (
    <>
      {/* Media Player  */}
      <div className="media-container w-full px-10 py-10 flex flex-col gap-5">
        <div className="media-content w-full flex gap-5">
          <YouTube
            className="rounded-md border-4 border-gray-400 w-8/12 h-128"
            videoId={mediaLink}
            onPause={handlerPause}
            onPlay={() => console.log("Playing")}
            opts={opts}
            onError={onError}
            onReady={onReady}
          />
          <NoteForm
            watchedDuration={watchedDuration}
            videoInfo={() => player.getVideoData()}
            notes={notes}
            setNotes={setNotes}
          />
        </div>
        <h1 className="text-white text-3xl">{videoTitle}</h1>
      </div>
    </>
  );
};

export default MediaPlayer;
