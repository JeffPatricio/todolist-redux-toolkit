import { createSlice } from "@reduxjs/toolkit";
import { loadUser } from "../services/storage";

const userStorage = loadUser();

export const user = createSlice({
  name: "user",
  initialState: {
    name: userStorage?.name ? userStorage.name : "",
    authenticated: !!userStorage,
  },
  reducers: {
    signIn(state, { payload }) {
      return { ...state, authenticated: true, name: payload };
    },

    signOut(state) {
      return { ...state, authenticated: false, name: "" };
    },
  },
});

export const { signIn, signOut } = user.actions;

export default user.reducer;
