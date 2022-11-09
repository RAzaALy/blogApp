import { configureStore } from "@reduxjs/toolkit";
import loginReducer from "./loginSlice";
import { finsApi } from "../services/finsApi";

export default configureStore({
  reducer: {
    [finsApi.reducerPath]: finsApi.reducer,
    login: loginReducer,
  },
});
