import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../authSlice"; // adjust path if needed
import { toast } from 'react-toastify';

const LogoutButton = ({ className = "" }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch(logout()); // resets the Redux auth state
    navigate("/login"); // or "/" depending on your flow
    toast.success("Logout successful!");
  };

  return (
    <button onClick={handleLogout} className={`bg-red-500 text-white px-4 py-2 rounded ${className}`}>
      Logout
    </button>
  );
};

export default LogoutButton;
