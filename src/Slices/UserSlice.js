import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {batch:"mern2308" , time:"7pm"},
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    UserDatainfo: (state) => {
      state.value ;
    },
  },
});

export const { UserDatainfo } = UserSlice.actions;

export default UserSlice.reducer;
