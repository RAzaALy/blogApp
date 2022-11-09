import { createSlice } from "@reduxjs/toolkit";
import storage from "../utils/localStorage";

const initialState = {
  user: null,
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state, action) => {
      storage.saveUser(action.payload);
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
      storage.removeUser();
    },
  },
});

export const { login, logout } = loginSlice.actions;

export default loginSlice.reducer;
