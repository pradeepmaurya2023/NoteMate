import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAdd } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addNote } from "../../features/notes/noteSlice";
import { toast } from "react-toastify";

const AddNoteForm = () => {
  // State to handle modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetching current playing video Data
  const video = useSelector((state) => state.videoInfo);

  // setting dispatch
  const dispatch = useDispatch();

  // react hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { title: noteTitle, note: noteText } = data;
    dispatch(
      addNote({
        videoId: video.videoId,
        videoTitle: video.videoData.title,
        timeStamp: video.videoData.currentTime,
        noteTitle: noteTitle,
        noteText: noteText,
      })
    );
    toast.success("Note has been successfully Added");
    reset();
    setIsModalOpen(false); // Close modal after submitting the form
  };

  return (
    <>
      {/* Button to trigger modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="fixed bottom-5 right-5 bg-orange-700 p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 text-white z-50"
      >
        <MdOutlineAdd size={30} />
      </button>

      {/* Modal overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Modal content */}
          <div className="note-form w-11/12 sm:w-8/12 md:w-6/12 lg:w-4/12 bg-gunmetal bg-opacity-95 rounded-lg flex flex-col items-center py-6 px-4 text-white relative">
            <h1 className="font-bold text-2xl sm:text-3xl text-center">Add Notes</h1>
            
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-4 text-xl text-gray-300 hover:text-white"
            >
              &times;
            </button>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="my-5 text-black flex flex-col items-center gap-6 w-full"
            >
              {/* Title input */}
              <input
                type="text"
                placeholder="Title"
                {...register("title", {
                  required: {
                    value: true,
                    message: "`Title` field cannot be Empty",
                  },
                  minLength: {
                    value: 3,
                    message: "Minimum 3 letters are required in `Title` field",
                  },
                })}
                className="w-full h-12 outline-none border-2 border-gray-950 rounded-md px-3 text-lg sm:text-xl"
              />
              {errors.title && (
                <span className="font-bold text-red-600">{errors.title.message}</span>
              )}

              {/* Note textarea */}
              <textarea
                placeholder="Note"
                {...register("note", {
                  required: {
                    value: true,
                    message: "`Note` field cannot be Empty",
                  },
                  minLength: {
                    value: 5,
                    message: "Minimum 5 letters are required in `Note` field",
                  },
                })}
                className="w-full h-32 sm:h-36 outline-none border-2 border-gray-950 rounded-md px-3 text-lg sm:text-xl"
              ></textarea>
              {errors.note && (
                <span className="font-bold text-red-600">{errors.note.message}</span>
              )}

              <button
                type="submit"
                className="bg-orange-700 p-2 flex items-center justify-center outline-none text-xl sm:text-2xl rounded-md hover:shadow-lg hover:scale-110 duration-200 transition-all text-white w-full sm:w-auto"
              >
                <MdOutlineAdd className="mr-1" />
                Add Note
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddNoteForm;
