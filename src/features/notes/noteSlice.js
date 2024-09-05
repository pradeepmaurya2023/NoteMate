import { createSlice, nanoid } from "@reduxjs/toolkit";

// Step 1: Fetch data from local storage
const savedVideoNotes = localStorage.getItem("videoNotes");
const initialState = savedVideoNotes
  ? { videoNotes: JSON.parse(savedVideoNotes) }
  : {
      videoNotes: [],
    };
const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      const { videoId, timeStamp, noteTitle, noteText, videoTitle } =
        action.payload;

      // Step 2: Find the video by its ID
      const video = state.videoNotes.find((video) => video.videoId === videoId);

      if (video) {
        // If the video exists, add the new note to its notes array
        video.notes.push({ id: nanoid(), timeStamp, noteTitle, noteText });
      } else {
        // If the video doesn't exist, create a new video entry with the note
        state.videoNotes.push({
          videoId,
          videoTitle, // Using destructured videoTitle
          notes: [{ id: nanoid(), timeStamp, noteTitle, noteText }],
        });
      }

      // Step 3: Update local storage
      localStorage.setItem("videoNotes", JSON.stringify(state.videoNotes));
    },
    editNote: (state, action) => {
      const { videoId, noteId, noteText } = action.payload;
      // find video with same videoId
      let requiredVideo = state.videoNotes.find(
        (item) => item.videoId === videoId
      );
      // find that note in notes array of specific videoID than update its value
      let note = requiredVideo.notes.find((item) => item.id == noteId);
      note.noteText = noteText;
      // Step 3: Update local storage
      localStorage.setItem("videoNotes", JSON.stringify(state.videoNotes));
    },
    deleteNote: (state, action) => {
      const { videoId, noteId } = action.payload;
      // find video with same videoId
      let requiredVideo = state.videoNotes.find(
        (item) => item.videoId === videoId
      );
      // delete that specific note with same id
      requiredVideo.notes = requiredVideo.notes.filter(
        (item) => item.id !== noteId
      );
      // Step 3: Update local storage
      localStorage.setItem("videoNotes", JSON.stringify(state.videoNotes));
    },
    deleteVideo: (state, action) => {
      const { videoId } = action.payload;
      // find video with same videoId
      state.videoNotes = state.videoNotes.filter(
        (item) => item.videoId !== videoId
      );

      // Step 3: Update local storage
      localStorage.setItem("videoNotes", JSON.stringify(state.videoNotes));
    },
  },
});

export const { addNote, deleteNote, editNote, deleteVideo } = noteSlice.actions;
export default noteSlice.reducer;
