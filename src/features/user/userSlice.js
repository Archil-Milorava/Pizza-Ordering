import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updareUsername(state, action) {
      state.userName = action.payload;
    },
  },
});

export const { updareUsername } = userSlice.actions;

export default userSlice.reducer;
