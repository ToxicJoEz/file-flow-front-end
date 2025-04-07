// src/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Get token from localStorage, if available
const tokenFromStorage = localStorage.getItem("auth");

const initialState = {
  token: tokenFromStorage || null, // Default to null if no token is in localStorage
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;  // Set the token in the store
    },
    login: (state, action) => {
      state.token = action.payload;
      // Store the token in localStorage after login
      localStorage.setItem("auth", action.payload);
    },
    logout: (state) => {
      state.token = null;
      // Remove the token from localStorage when logging out
      localStorage.removeItem("auth");
    },
  },
});

export const { setToken, login, logout } = authSlice.actions;
export default authSlice.reducer;
