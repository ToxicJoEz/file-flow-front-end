// src/pages/Home.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../authSlice'; // Import the logout action

function Home() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token); // Access token from Redux

  const handleLogout = () => {
    dispatch(logout()); // Clear the token from Redux
    localStorage.removeItem("auth"); // Remove token from localStorage
    navigate("/login"); // Redirect to login page
  };

  return (
    <div>
      <h2 className="bg-black text-white p-8 font-bold test">
        Home
        {/* Show the Logout button only if the user is logged in */}
        {token && (
          <button onClick={handleLogout} className="ml-4 bg-red-500 text-white p-2 rounded">
            Logout
          </button>
        )}
      </h2>
      {/* Registration form elements will go here */}
    </div>
  );
}

export default Home;