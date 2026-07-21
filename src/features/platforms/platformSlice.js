import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  platforms: [
    "LinkedIn",
    "Instagram",
    "Twitter",
    "Facebook",
  ],
};

const platformSlice = createSlice({
  name: "platforms",

  initialState,

  reducers: {},
});

export default platformSlice.reducer;
