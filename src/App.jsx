import React, { useEffect } from "react";
import "./App.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "./authSlice";  // Import the setToken action
import Home from "./pages/Home";
import Register from "./components/Register";
import Error from "./pages/Error";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./components/EditProfile";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Get the token from localStorage when the app is initialized
    const tokenFromStorage = localStorage.getItem("auth");
    if (tokenFromStorage) {
      // Dispatch action to store the token in Redux state
      dispatch(setToken(tokenFromStorage));
    }
  }, [dispatch]);

  return (
    <>
      {/* Common components like Navbar can be included here */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/EditProfile" element={<EditProfile />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Common components like Footer can be included here */}
    </>
  );
}

export default App;
