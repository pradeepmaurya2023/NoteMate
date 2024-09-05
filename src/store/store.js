import { configureStore } from "@reduxjs/toolkit";
import videoReducer from "../features/currentVideo/videoSlice";
import notesReducer from "../features/notes/noteSlice";
import themeReducer from "../features/theme/themeSlice"
export const store = configureStore({
  reducer: {
    videoInfo: videoReducer,
    notes : notesReducer,
    theme : themeReducer,
  },
});
