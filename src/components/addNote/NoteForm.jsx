import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAdd } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const NoteForm = (prop) => {
  // destructuring props
  const { watchedDuration, videoInfo } = prop;

  // Fetching all notes stored in Local Storage
  const [notes, setNotes] = useState(() => {
    // Initialize notes state with data from localStorage or with an empty array if there is no data
    const storedNotes = localStorage.getItem("videoNote");
    return storedNotes ? JSON.parse(storedNotes) : [];
  });

  // saving data to LocalStorage
  const saveToLS = () => {
    localStorage.setItem("videoNote", JSON.stringify(notes));
  };

  //   will be called when notes array gets updated
  useEffect(() => {
    saveToLS();
    console.log(notes)
  }, [notes]);

  // react hook from
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const videoTitle = videoInfo().title;
    const url = `https://www.youtube.com/${videoInfo().video_id}`;
    const timeStamp = watchedDuration();
    const { title: noteTitle, note: noteData } = data;

    const newNote = {
      videoTitle: videoTitle,
      url: url,
      note: {
        noteData: noteData,
        noteTitle: noteTitle,
        timeStamp: timeStamp,
      },
    };
    // updating notes state
    setNotes([...notes, newNote]);
    // Show a success notification
    toast.success("Note submitted successfully!");
  };
  return (
    <>
      <div className="note-form w-4/12 bg-slate-100 bg-opacity-20 rounded-lg flex flex-col items-center py-10 text-white">
        <h1 className="font-bold text-3xl">Add Notes</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="my-5 text-black flex flex-col items-center gap-5 w-full"
        >
          {/* register your input into the hook by invoking the "register" function */}
          <input
            type="text"
            placeholder="Title"
            {...register("title", {
              required: true,
              minLength: {
                value: 5,
                message: "Minimum 5 letters are required in `Title` field",
              },
            })}
            className="w-8/12 h-12 outline-none border-2 border-gray-950 rounded-md px-3 text-xl"
          />
          {/* errors will return when field validation fails  */}
          {errors.title && (
            <span className="font-bold text-red-600">
              {errors.title.message}
            </span>
          )}

          {/* include validation with required or other standard HTML validation rules */}
          <textarea
            type="text"
            placeholder="Note"
            {...register("note", {
              required: true,
              minLength: {
                value: 5,
                message: "Minimum 5 letters are required in `Note` field",
              },
            })}
            className="w-8/12 h-36 outline-none border-2 border-gray-950 rounded-md px-3 text-xl"
          ></textarea>
          {/* errors will return when field validation fails  */}
          {errors.note && (
            <span className="font-bold text-red-600">
              {errors.note.message}
            </span>
          )}

          <button
            type="submit"
            className="bg-orange-700 p-2 flex items-center outline-none text-2xl rounded-md hover:shadow-lg hover:scale-110 duration-200 transition-all text-white"
          >
            <MdOutlineAdd />
            Add Note
          </button>
        </form>
        {/* to show notification when note is added to Local Storage */}
        <ToastContainer />
      </div>
    </>
  );
};

export default NoteForm;
