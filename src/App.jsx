import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setToken } from "./authSlice";
import Navbar from "./components/Navbar"; // Your persistent Navbar
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./components/EditProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Error from "./pages/Error";
import Footer from "./components/Footer"; // Your persistent Footer

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("auth");
    if (tokenFromStorage) {
      dispatch(setToken(tokenFromStorage));
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Persistent Navbar */}
      <Navbar />

      {/* Main content which changes based on route */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/EditProfile"
            element={
              <ProtectedRoute>
                <EditProfile />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>

      {/* Persistent Footer */}
      <Footer />
    </div>
  );
}

export default App;
