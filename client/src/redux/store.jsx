import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
import authReducer from "./authSlice";

export const store = configureStore({
   reducer: {
      auth: authReducer,
    projects: projectReducer,
  },
});