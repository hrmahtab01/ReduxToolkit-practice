import { configureStore } from "@reduxjs/toolkit";
import UserSlice, { UserDatainfo } from "./Slices/UserSlice";

export const store = configureStore({
  reducer: {
    UserData: UserSlice,
    dataone: UserSlice,
  },
});
