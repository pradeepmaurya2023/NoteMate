import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Note = () => {
  return (
    <>
      <div className="note-info w-full bg-gray-300 text-blue-950 flex gap-2 items-center p-2">
        <div className="time-stamp w-1/12 text-center text-lg cursor-pointer">4.31</div>
        <div className="note w-10/12 text-sm">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          necessitatibus quia incidunt deleniti, tenetur distinctio eos earum
          adipisci iusto fugit voluptatum vero eius voluptate ducimus
          repudiandae dignissimos expedita eligendi. Error!
        </div>
        <div className="buttons flex justify-center text-2xl gap-4 w-1/12">
          <FaRegEdit className="text-gray-800 hover:text-3xl hover:text-teal-700 cursor-pointer transition-all duration-200" />
          <MdDeleteForever className="text-gray-800 hover:text-3xl hover:text-red-800 cursor-pointer transition-all duration-200" />
        </div>
      </div>
    </>
  );
};

export default Note;
