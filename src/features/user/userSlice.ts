import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userName: string;
}


const initialState: UserState = {
  userName: "",
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    updareUsername(state, action: PayloadAction<string>) {
      state.userName = action.payload;
    },
  },
});

export const { updareUsername } = userSlice.actions;

export default userSlice.reducer;
