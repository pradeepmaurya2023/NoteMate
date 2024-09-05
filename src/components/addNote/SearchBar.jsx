import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setVideoId } from "../../features/currentVideo/videoSlice";

const SearchBar = (prop) => {
  const [search, setSearch] = useState("");

  // if videoId is passed as prop
  const { passedVideoId } = prop;

  // setting video ID
  const [videoUrl, setVideoUrl] = useState(() => {
    return passedVideoId || "";
  });

  // dispatching redux store actions
  const dispatch = useDispatch();

  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  // updating redux store video ID whenever videoUrl gets changed
  useEffect(() => {
    if (videoUrl) {
      dispatch(setVideoId(videoUrl));
    }
  }, [videoUrl]);

  // handling submit and fetching VideoId from the URL passed
  const handleSubmit = () => {
    if (search) {
      try {
        let searchUrl = new URL(search);
        if (
          searchUrl.hostname !== "www.youtube.com" &&
          searchUrl.hostname !== "youtu.be"
        ) {
          toast.error("Entered URL is not from Youtube");
        } else {
          if (searchUrl.hostname === "www.youtube.com") {
            setVideoUrl(searchUrl.search.split("=")[1]);
            toast.success("Link is Correct");
          } else {
            setVideoUrl(searchUrl.pathname.substring(1));
            toast.success("Link is Correct");
          }
          setSearch("");
        }
      } catch (error) {
        toast.error("Please enter a valid Youtube URL");
      }
    } else {
      toast.warn("Input field can't be empty");
    }
  };

  return (
    <div className="search-bar w-full flex flex-col md:flex-row justify-center items-center py-10 px-5">
      {/* search bar to paste video link */}
      <input
        type="text"
        value={search}
        onChange={handleInput}
        placeholder="Enter Youtube Video URL"
        className="h-12 md:h-16 w-full md:w-1/3 px-4 text-base md:text-xl border-2 border-gray-600/50 rounded-t-2xl md:rounded-t-none md:rounded-l-2xl md:rounded-tl-2xl outline-none bg-gray-500 text-white placeholder:text-white"
      />
      <button
        type="button"
        onClick={handleSubmit}
        className="bg-sky-600 text-base md:text-xl h-12 md:h-16 w-full md:w-auto px-5 md:px-10 rounded-b-2xl md:rounded-r-2xl md:rounded-b-none mt-2 md:mt-0"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
