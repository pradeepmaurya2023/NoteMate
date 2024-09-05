import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import VideoBox from "./VideoBox";

const ListExistingVideos = () => {
  const [search, setSearch] = useState("");

  const videoNotes = useSelector((state) => state.notes.videoNotes || null);
  const theme = useSelector((state) => state.theme.value);

  const filteredVideos = useMemo(() => {
    if (!videoNotes) return [];

    const notes = videoNotes.filter((item) => {
      const searchText = search.toLowerCase();
      return item.videoTitle.toLowerCase().includes(searchText);
    });
    return notes;
  }, [videoNotes, search]);

  const handleChange = (e) => setSearch(e.target.value);

  // Pagination Logic
  const [pages, setPages] = useState(1);

  // selecting pages
  const selectPageHandler = (selectedPage) => {
    setPages(selectedPage);
  };

  // move to previous page
  const handlePreviousPage = () => {
    setPages(pages - 1);
  };

  // move to next page
  const handlerNextPage = () => {
    setPages(pages + 1);
  };

  return (
    <div className={`${theme ? "bg-gunmetal bg-opacity-20 text-steelBlue" : "bg-gunmetal text-white"} w-full md:w-8/12 mx-auto p-5 rounded-md my-10`}>
      <div className="flex flex-col md:flex-row justify-between my-3">
        <p className="font-bold text-xl md:text-2xl mb-3 md:mb-0">Your Existing Video Notes</p>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search"
          className="h-10 md:h-11 outline-none border-2 border-purple-700 rounded-md w-full md:w-64 px-2 text-lg md:text-xl text-black"
        />
      </div>

      {!filteredVideos && (
        <p className="font-semibold text-lg md:text-2xl">You don't have any notes yet</p>
      )}

      {filteredVideos.length > 0 &&
        filteredVideos
          .slice(pages * 10 - 10, pages * 10)
          .map((item, index) => (
            <VideoBox
              key={item.videoId}
              videoData={item}
              index={index + (pages - 1) * 10}
            />
          ))}

      {/* Pagination of notes */}
      <div className="text-center my-5">
        {filteredVideos.length > 0 && (
          <div className="flex justify-center items-center space-x-2">
            {pages > 1 && (
              <span
                onClick={handlePreviousPage}
                className="text-lg md:text-2xl cursor-pointer"
              >
                ⬅️
              </span>
            )}

            {[...Array(Math.ceil(filteredVideos.length / 10))].map((_, i) => {
              return (
                <span
                  onClick={() => selectPageHandler(i + 1)}
                  key={i}
                  className={`text-lg md:text-xl border-2 border-gray-400 rounded-md mx-1 px-2 cursor-pointer ${
                    pages === i + 1 ? "font-bold bg-gray-300 text-blue-800" : ""
                  }`}
                >
                  {i + 1}
                </span>
              );
            })}

            {pages < Math.ceil(filteredVideos.length / 10) && (
              <span
                onClick={handlerNextPage}
                className="text-lg md:text-2xl cursor-pointer"
              >
                ➡️
              </span>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListExistingVideos;
