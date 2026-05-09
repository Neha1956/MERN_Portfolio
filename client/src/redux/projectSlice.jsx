import { createSlice } from "@reduxjs/toolkit";

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    projects: [],
  },
  reducers: {
    setProjects: (state, action) => {
      state.projects = action.payload;
    },

    addProject: (state, action) => {
      state.projects.push(action.payload);
    },

    removeProject: (state, action) => {
      state.projects = state.projects.filter(
        (project) => project._id !== action.payload
      );
    },

    updateProjectState: (state, action) => {
      state.projects = state.projects.map((project) =>
        project._id === action.payload._id
          ? action.payload
          : project
      );
    },
  },
});

export const {
  setProjects,
  addProject,
  removeProject,
  updateProjectState,
} = projectSlice.actions;

export default projectSlice.reducer;