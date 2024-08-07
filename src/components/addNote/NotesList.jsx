import React, { useState } from "react";
import Note from "./Note";

const NotesList = (prop) => {
  
  
  // destructuring props
  const {notes, setNotes } = prop;

  //

  return (
    <>
      <div className="note-List w-full px-14 py-5 text-white bg-gray-700 flex flex-col gap-5">
        <div className="notes-header flex justify-between items-center w-8/12">
          <h1 className="text-3xl  font-bold">Your Notes</h1>
        </div>
        <div className="notes rounded-md border-4 border-gray-950 w-8/12 flex flex-col gap-1">
          {/* if there is no notes to render */}
          {notes.length == 0 && (
            <div className="">You don't have any notes yet!!!</div>
          )}
          {notes && notes.map((item)=>{
            return <Note key={item.timeStamp} item = {item} />
          })}
        </div>
      </div>
    </>
  );
};

export default NotesList;
