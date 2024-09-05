import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  videoId: "",
  videoData: {
    title: "",
    videoId: "",
    author: "",
    duration: 0,
    currentTime: 0,
  },
};

export const videoSlice = createSlice({
  name: "videoInfo",
  initialState,
  reducers: {
    setVideoId: (state, action) => {
      state.videoId = action.payload;
    },
    setVideoData: (state, action) => {
      state.videoData = action.payload;
    },
    setCurrentTime: (state, action) => {
      state.videoData.currentTime = action.payload;
    },
  },
});

export const { setVideoId, setVideoData, setCurrentTime } = videoSlice.actions;

export default videoSlice.reducer;
