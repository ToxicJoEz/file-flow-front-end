import React, { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"; // <-- Added useLocation
import { useDispatch } from "react-redux";
import { setToken } from "./authSlice";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Register from "./components/Register";
import Login from "./components/Login";
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
import Services from "./pages/Services";
import DashboardLayout from "./pages/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";
import FilesUnlocked from "./components/FilesUnlocked";
import KeywordsSearched from "./components/KeywordsSearched";
import MyFiles from "./components/MyFiles";
import BillingInformation from "./components/BillingInformation";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/ResetPassword";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation(); // <-- Get current route location for AnimatePresence
  const isDashboard = location.pathname.startsWith("/dashboard"); //<– Added isDashboard check

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
          <Routes
            location={location}
            key={(() => {
              // pull out the first path segment (or “home” if none):
              const seg = location.pathname.split("/")[1];
              return seg || "home";
            })()}
          >
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
            <Route path="/plans" element={<Plans />} />

            {/* Public services Route */}
            <Route path="/services" element={<Services />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />

            {/* Protected Dashboard Route */}
            <Route
              path="/dashboard"
              element={
                <ProtectedRoute>
                  <DashboardLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<DashboardHome />} />
              <Route path="EditProfile" element={<EditProfile />} />
              <Route path="files-unlocked" element={<FilesUnlocked />} />
              <Route path="keywords-searched" element={<KeywordsSearched />} />
              <Route path="my-files" element={<MyFiles />} />
              <Route
                path="billing-information"
                element={<BillingInformation />}
              />
            </Route>

            {/* Catch-All Error Route */}
            <Route path="*" element={<Error />} />
          </Routes>
        </AnimatePresence>
      </main>

      {/* Persistent Footer at the bottom */}
      {!isDashboard && <Footer />}
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
