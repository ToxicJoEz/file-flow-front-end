import React, { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const token = useSelector((state) => state.auth.token); // Assuming token is stored here

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.patch(
        "https://main-fileflow-backend-production.up.railway.app/profile",
        { username },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Username updated successfully!");
      setUsername("");
    } catch (error) {
      setMessage("Error updating username.");
      console.error(error);
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Edit Profile</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={username}
          placeholder="Enter new username"
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Update Username
        </button>
      </form>
      {message && <p className="text-sm text-gray-600">{message}</p>}
    </div>
  );
};

export default EditProfile;
