import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: null,
};

export const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {
    UserDatainfo: (state, action) => {
      state.value = action.payload;
    },
   Usertimedata: (mahtab,action) => {
      mahtab.value =action.payload
    },
  },
});

export const { UserDatainfo ,Usertimedata } = UserSlice.actions;

export default UserSlice.reducer;
