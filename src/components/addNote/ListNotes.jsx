import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import NoteBox from "./NoteBox";

const ListNotes = () => {
  const [search, setSearch] = useState("");

  const videoId = useSelector((state) => state.videoInfo.videoId);

  const videoNotes = useSelector(
    (state) =>
      state.notes.videoNotes.find((video) => video.videoId === videoId) || null
  );

  const theme = useSelector((state) => state.theme.value);

  const filteredNotes = useMemo(() => {
    if (!videoNotes) return [];

    const notes = videoNotes.notes.filter((item) => {
      const searchText = search.toLowerCase();
      return (
        item.noteTitle.toLowerCase().includes(searchText) ||
        item.noteText.toLowerCase().includes(searchText)
      );
    });

    return notes.sort((a, b) => a.timeStamp - b.timeStamp);
  }, [videoNotes, search]);

  const handleChange = (e) => setSearch(e.target.value);

  // Pagination Logic

  // state to store page numbers
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
  const handleNextPage = () => {
    setPages(pages + 1);
  };

  return (
    <div
      className={`${
        theme
          ? "bg-gunmetal bg-opacity-20 text-steelBlue"
          : "bg-gunmetal text-white"
      } w-full sm:w-10/12 lg:w-8/12 mx-auto p-5 rounded-md my-10`}
    >
      <div className="flex flex-col sm:flex-row justify-between my-3">
        <p className="font-bold text-xl sm:text-2xl">Your Notes</p>
        <input
          type="text"
          value={search}
          onChange={handleChange}
          placeholder="Search"
          className="h-10 sm:h-11 outline-none border-2 border-purple-700 rounded-md w-full sm:w-64 mt-3 sm:mt-0 px-2 text-lg sm:text-xl text-black"
        />
      </div>
      {videoNotes == null && (
        <p className="font-semibold text-lg sm:text-2xl">
          You don't have any notes related to this video
        </p>
      )}
      {filteredNotes.length > 0 &&
        filteredNotes
          .slice(pages * 10 - 10, pages * 10)
          .map((item, index) => (
            <NoteBox
              key={item.id}
              noteData={item}
              index={index + (pages - 1) * 10}
              videoId={videoId}
            />
          ))}
      {/* Pagination of notes */}
      <div className="text-center my-5">
        {filteredNotes.length > 0 && (
          <div className="flex justify-center items-center">
            {pages > 1 && (
              <span
                onClick={() => handlePreviousPage()}
                className="text-xl sm:text-2xl mx-1 cursor-pointer"
              >
                ⬅️
              </span>
            )}
            {[...Array(Math.ceil(filteredNotes.length / 10))].map((_, i) => (
              <span
                onClick={() => selectPageHandler(i + 1)}
                key={i}
                className={
                  pages == i + 1
                    ? "text-base sm:text-xl font-bold bg-gray-300 border-2 border-gray-400 text-blue-800 rounded-md mx-1 px-2 cursor-pointer"
                    : "text-base sm:text-xl border-2 border-gray-400 rounded-md mx-1 px-2 cursor-pointer"
                }
              >
                {i + 1}
              </span>
            ))}
            {pages < Math.ceil(filteredNotes.length / 10) && (
              <span
                onClick={() => handleNextPage()}
                className="text-xl sm:text-2xl mx-1 cursor-pointer"
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

export default ListNotes;
