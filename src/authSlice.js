// src/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Get token from localStorage, if available
const tokenFromStorage = localStorage.getItem("auth");
const avatarFromStorage = localStorage.getItem("avatar");

const initialState = {
  token: tokenFromStorage || null,
  avatar: avatarFromStorage || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setAvatar: (state, action) => {
      state.avatar = action.payload; // Set the avatar URL in the store
    },
    login: (state, action) => {
      state.token = action.payload.token;
      state.avatar = action.payload.avatar;
      localStorage.setItem("auth", action.payload.token);
      localStorage.setItem("avatar", action.payload.avatar); // persist avatar too
    },

    logout: (state) => {
      state.token = null;
      state.avatar = null; // Clear avatar when logged out
      localStorage.removeItem("auth");
    },
  },
});

export const { setToken, setAvatar, login, logout } = authSlice.actions;
export default authSlice.reducer;
