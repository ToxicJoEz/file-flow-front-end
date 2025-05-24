import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"; // <-- Added useLocation
import { useDispatch } from "react-redux";
import { setToken } from "./authSlice";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./pages/Dashboard";
import EditProfile from "./components/EditProfile";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import Error from "./pages/Error";
import Plans from "./pages/Plans";
import AppLogin from "./pages/AppLogin"; // <-- Added AppLogin import
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AnimatePresence } from "framer-motion"; // <-- Added for page animations
import useFetchProfile from "./hooks/useFetchProfile";
import mainBgImage from "./assets/mainBackground.png"; // adjust path if needed

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // <-- Get current route location for AnimatePresence

  useFetchProfile(); // Automatically fetch profile (and avatar) if token exists

  // Run this once when the app loads — it fetches the saved token (if any) from localStorage
  useEffect(() => {
    const tokenFromStorage = localStorage.getItem("auth");
    if (tokenFromStorage) {
      dispatch(setToken(tokenFromStorage)); // If found, update the Redux store
    }
  }, [dispatch]);

  return (
    <div
      className="min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${mainBgImage})`,
        backgroundSize: "auto",
        backgroundRepeat: "repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Persistent Navbar at the top */}
      <Navbar />

      {/* Main content area */}
      <main className="flex-grow">
        {/* AnimatePresence allows pages to animate in and out */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            {/* Public Home Route */}
            <Route path="/" element={<Home />} />

            {/* Public Registration Route */}
            <Route
              path="/register"
              element={
                <PublicRoute>
                  <Register />
                </PublicRoute>
              }
            />

            {/* Public Login Route */}
            <Route
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />

            {/* App Public Login Route */}
            <Route
              path="/app-login"
              element={
                <PublicRoute>
                  <AppLogin />
                </PublicRoute>
              }
            />

            {/* Public Plans Route */}
            <Route
              path="/plans"
              element={
                <PublicRoute>
                  <Plans />
                </PublicRoute>
              }
            />

            {/* Protected Dashboard Route */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            {/* Protected Edit Profile Route */}
            <Route
              path="/EditProfile"
              element={
                <ProtectedRoute>
                  <EditProfile />
                </ProtectedRoute>
              }
            />

            {/* Catch-All Error Route */}
            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Persistent Footer at the bottom */}
      <Footer />

      {/* Toast Notifications */}
      <ToastContainer
        toastClassName="my-toast"
        bodyClassName="my-toast-body"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
