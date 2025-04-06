import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import Error from "./pages/Error";
import Login from "./components/Login";


function App() {
  return (
    <>
      {/* Common components like Navbar can be included here */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>

      {/* Common components like Footer can be included here */}
    </>
  );
}

export default App;
