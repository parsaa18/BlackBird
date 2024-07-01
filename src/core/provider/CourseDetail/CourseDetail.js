import { createSlice } from "@reduxjs/toolkit";

const courseDetial = createSlice({
  name: "courseDetial",
  initialState: {
    setArchive: null,
  },
  reducers: {
    setArchive: (state, action) => {
      state.courseDetial = action.payload;
    },
  },
});

export const { setArchive } = courseDetial.actions;
export default courseDetial.reducer;
