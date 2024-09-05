import React, { useRef, useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { LuSave } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { deleteNote, editNote } from "../../features/notes/noteSlice";
import { toast } from "react-toastify";

const NoteBox = (prop) => {
  const { noteData, index, videoId } = prop;
  const [editMode, setEditMode] = useState(false);
  const editRef = useRef(null);
  const dispatch = useDispatch();

  function convertSeconds(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formatTime = (unit) => String(unit).padStart(2, "0");
    return `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(
      remainingSeconds
    )}`;
  }

  const handleUpdate = (noteId) => {
    const noteText = editRef.current.value;
    dispatch(editNote({ videoId, noteId, noteText }));
    setEditMode(!editMode);
    editRef.current.toggleAttribute("readOnly");
    toast.success("Note has been updated");
  };

  const handleEdit = () => {
    editRef.current.toggleAttribute("readOnly");
    setEditMode(!editMode);
  };

  const handleDelete = (noteId) => {
    dispatch(deleteNote({ videoId, noteId }));
    toast.warning("Note has been deleted");
  };

  return (
    <div className="outer-box border-2 border-purple-800 bg-gray-200 rounded-md text-black mb-4 p-3 sm:p-5 flex flex-col items-center sm:items-start sm:flex-row justify-between">
      <div className="left-box w-full sm:w-8/12">
        <div className="note-info flex gap-3 items-center">
          <div className="flex gap-3 items-center truncate">
            <p className="serial-no font-bold">{index + 1}</p>
            <p className="font-mono font-semibold text-lg sm:text-2xl truncate max-w-xs sm:max-w-96">
              {noteData.noteTitle}
            </p>
          </div>
          <p className="text-gray-950 font-semibold">
            {convertSeconds(noteData.timeStamp)} min
          </p>
        </div>
        <div className="note-text">
          <textarea
            defaultValue={noteData.noteText}
            ref={editRef}
            className="font-medium text-base sm:text-lg bg-gray-200 outline-none w-full resize-none"
            readOnly
          ></textarea>
        </div>
      </div>
      <div className="right-box ">
        <div className="actio-buttons flex gap-2 sm:gap-5 text-white">
          {editMode ? (
            <button
              className="bg-green-600 px-3 py-1 flex gap-1 items-center rounded-md hover:scale-110 transition-all duration-300"
              type="button"
              onClick={() => handleUpdate(noteData.id)}
            >
              <LuSave />
              Save
            </button>
          ) : (
            <button
              className="bg-blue-600 px-3 py-1 flex gap-1 items-center rounded-md hover:scale-110 transition-all duration-300"
              type="button"
              onClick={handleEdit}
            >
              <CiEdit />
              Edit
            </button>
          )}

          <button
            className="bg-red-600 px-3 py-1 flex gap-1 items-center rounded-md hover:scale-110 transition-all duration-300"
            type="button"
            onClick={() => handleDelete(noteData.id)}
          >
            <MdOutlineDeleteForever />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteBox;
