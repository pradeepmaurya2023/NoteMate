import React from "react";
import { MdOutlineDeleteForever } from "react-icons/md";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteVideo } from "../../features/notes/noteSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const VideoBox = (prop) => {
  // destructuring values
  const { videoData, index } = prop;

  const dispatch = useDispatch();

  const handleDelete = (videoId) => {
    dispatch(deleteVideo({ videoId }));
    toast.warning("Note has been deleted");
  };
  return (
    <div className="outer-box border-4 border-gray-600 bg-gray-200 rounded-md text-black my-2 w-full">
      <div className="action-box flex flex-col gap-3 md:flex-row justify-between items-center p-5">
        <div className="flex items-center gap-3 ">
          <p className="serial-no text-2xl">{index + 1}.&nbsp;</p>
          <div className="text-2xl w-full break-words">{videoData.videoTitle}</div>
        </div>
        <div className="buttons flex gap-5 text-white">
          <Link
            to={"addNotes/".concat(videoData.videoId)}
            className="bg-blue-600 px-2 flex gap-1 items-center rounded-md h-7 hover:scale-110 transition-all duration-400"
          >
            <FaExternalLinkAlt />
            View
          </Link>
          <button
            className="bg-red-600 px-2 flex gap-1 items-center rounded-md h-7 hover:scale-110 transition-all duration-400"
            type="button"
            onClick={() => handleDelete(videoData.videoId)}
          >
            <MdOutlineDeleteForever />
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default VideoBox;
