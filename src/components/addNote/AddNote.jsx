import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MediaPlayer from "./MediaPlayer";
import NotesList from "./NotesList";

const AddNote = () => {
  // to manage input tag value
  const [search, setSearch] = useState("");

  // to setUrl of required video
  const [mediaLink, setMediaLink] = useState("");

  const inputHandler = (e) => {
    let val = e.target.value;
    setSearch(val);
  };

  // checking if provided link is a youtube link or not
  const clickHandler = () => {
    // checking if input has some value
    if (search) {
      // handling error
      try {
        let searchUrl = new URL(search);
        if (
          searchUrl.hostname != "www.youtube.com" &&
          searchUrl.hostname != "youtu.be"
        ) {
          toast.error("Entered URL is not from Youtube");
        } else {
          // filtering Video ID from Youtube URL
          if (searchUrl.hostname == "www.youtube.com") {
            setMediaLink(searchUrl.search.split("=")[1]);
          } else {
            setMediaLink(searchUrl.pathname.substring(1));
          }
          
        }
      } catch (error) {
        toast.error("Please enter a valid Youtube URL");
      }
    } else {
      toast.warn("Input field can't be Empty");
    }
  };

  return (
    <>
    <div className="w-full bg-gray-950">
      <div className="search-bar w-full flex justify-center py-10">
        {/* search bar to paste video link */}
        <input
          type="text"
          value={search}
          onChange={inputHandler}
          placeholder="Enter Youtube Video URL"
          className="h-16 w-1/3 px-4 text-xl border-2 border-gray-600/50 outline-none bg-gray-500 text-white placeholder:text-white"
        />
        <button
          type="button"
          onClick={clickHandler}
          className="bg-sky-600 text-xl h-16 px-10"
        >
          Search
        </button>
      </div>

      
      {/* Media Player  */}
      {mediaLink && <MediaPlayer mediaLink={mediaLink}/>}
      </div>

      {/* NotesList container */}
      {mediaLink && <NotesList />}

      {/* React toastify container */}
      <ToastContainer />
      
    </>
  );
};

export default AddNote;
