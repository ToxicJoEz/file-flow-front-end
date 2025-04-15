import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { setAvatar } from "../authSlice"; // Import the setAvatar action

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [showAvatars, setShowAvatars] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch(); // Initialize dispatch

  const avatarOptions = [
    "https://i.imgur.com/4OfYHou.png",
    "https://i.imgur.com/bzXGHtT.png",
    "https://i.imgur.com/2rR3nOV.png",
    "https://i.imgur.com/Q1POrfV.png",
    "https://i.imgur.com/9fnzY7n.png",
    "https://i.imgur.com/oNPjN0D.png",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {};
    if (username.trim() !== "") {
      payload.username = username;
    }
    if (selectedAvatar.trim() !== "") {
      payload.avatar = selectedAvatar;
    }

    if (Object.keys(payload).length === 0) {
      toast.error("Please provide a new username or avatar to update.");
      return;
    }

    try {
      const response = await axios.patch(
        "https://main-fileflow-backend-production.up.railway.app/profile",
        payload,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setMessage("Profile updated successfully!");
      toast.success("Profile Updated!");
      setUsername("");
      setSelectedAvatar("");
      navigate("/dashboard");
    } catch (error) {
      setMessage("Error updating profile.");
      toast.error("Profile update error, please try again.");
      console.error(error);
    }
  };

  const handleAvatarSelect = (img) => {
    setSelectedAvatar(img);
    dispatch(setAvatar(img));  // Dispatch avatar to Redux store
    setShowAvatars(false);
  };

  return (
    <PageWrapper>
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h2 className="text-xl font-bold text-gray-800">Edit Profile</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            placeholder="Enter new username (optional)"
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
          />

          <button
            type="button"
            onClick={() => setShowAvatars(!showAvatars)}
            className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 w-full"
          >
            Change Avatar
          </button>

          {/* Avatar Gallery */}
          <AnimatePresence>
            {showAvatars && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-3 sm:grid-cols-3 gap-4 mt-4"
              >
                {avatarOptions.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Avatar ${index + 1}`}
                    onClick={() => handleAvatarSelect(img)}
                    className="w-20 h-20 sm:w-32 sm:h-32 object-cover rounded cursor-pointer hover:opacity-75 transition-all"
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Show selected avatar */}
          {selectedAvatar && (
            <div className="flex justify-center mt-4">
              <img
                src={selectedAvatar}
                alt="Selected Avatar"
                className="w-24 h-24 object-cover rounded-full"
              />
            </div>
          )}

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
          >
            Update Profile
          </button>
        </form>

        {message && <p className="text-sm text-gray-600">{message}</p>}
      </div>
    </PageWrapper>
  );
};

export default EditProfile;
