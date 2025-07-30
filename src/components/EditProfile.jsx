import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { setAvatar } from "../authSlice";

const EditProfile = () => {
  const [username, setUsername] = useState("");
  const [showAvatars, setShowAvatars] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState("");
  const [message, setMessage] = useState("");
  const [resetLoading, setResetLoading] = useState(false);
  const [resetMessage, setResetMessage] = useState("");
  const [resetError, setResetError] = useState("");

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
    dispatch(setAvatar(img)); // Dispatch avatar to Redux store
    setShowAvatars(false);
  };

  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://main-fileflow-backend-production.up.railway.app/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProfile(response.data.user);
      } catch (err) {
        toast.error("Failed to load profile info.");
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token]);

  const handleSendResetLink = async () => {
    setResetLoading(true);
    setResetMessage("");
    setResetError("");

    try {
      const response = await axios.post(
        "https://main-fileflow-backend-production.up.railway.app/forgot-password",
        {
          email: profile.email,
        }
      );

      setResetMessage("A reset link has been sent to your email.");
    } catch (err) {
      setResetError("Failed to send reset link. Try again.");
      console.error(err);
    } finally {
      setResetLoading(false);
    }
  };

  return (
    <PageWrapper>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-48">
        <div className="reset reset2 col-span-1">
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
              Save
            </button>
          </form>

          {message && <p className="text-sm text-gray-600">{message}</p>}
        </div>
        <div className="flex flex-col items-center reset reset2 col-span-1">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendResetLink(); // you already have this function
            }}
            className="w-full max-w-sm"
          >
            <div className="flex items-center flex-wrap flex-1 gap-4 mt-12">
              <span className="text-gray-700 font-medium whitespace-nowrap">
                Change Password :
              </span>
              <button
                type="submit"
                className="fancy-button-alt"
                disabled={resetLoading}
              >
                {resetLoading ? "Sending..." : "Send Reset Link"}
              </button>
            </div>

            {resetMessage && (
              <p className="text-green-600 text-sm mt-2">{resetMessage}</p>
            )}
            {resetError && (
              <p className="text-red-600 text-sm mt-2">{resetError}</p>
            )}
          </form>
        </div>
      </div>
    </PageWrapper>
  );
};

export default EditProfile;
