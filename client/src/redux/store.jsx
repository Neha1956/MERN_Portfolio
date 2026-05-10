import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./projectSlice";
import authReducer from "./authSlice";
import ProfileReducer from "./ProfileSlice";

export const store = configureStore({
   reducer: {
      auth: authReducer,
    projects: projectReducer,
     profile: ProfileReducer,

  },
});