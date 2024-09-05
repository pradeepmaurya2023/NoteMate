import React, { useState } from "react";
import SearchBar from "./SearchBar";
import VideoPlayer from "./VideoPlayer";
import { useSelector } from "react-redux";
import AddNoteForm from "./AddNoteForm";
import ListNotes from "./ListNotes";
import { useParams } from "react-router-dom";

const AddNote = () => {
  const {id : passedVideoId} = useParams();
  
  // fetching videoId to see whether it has some value or not
  const videoId = useSelector((state) => state.videoInfo.videoId);

  // console.log(videoNotes.notes)

  return (
    <div className="min-h-screen my-5 w-full">
      <SearchBar passedVideoId = {passedVideoId}/>
      <div className="media-note-container py-5 flex flex-col md:flex-row gap-3 justify-around w-full">
        {videoId && <VideoPlayer />}
        {videoId && <AddNoteForm />}
      </div>
      {videoId && <ListNotes />}
    </div>
  );
};

export default AddNote;
