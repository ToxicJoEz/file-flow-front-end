// src/hooks/useFetchProfile.js
import { useDispatch, useSelector } from "react-redux";
import { setAvatar } from "../authSlice";
import { useEffect } from "react";
import axios from "axios";

export default function useFetchProfile() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3001/profile",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const avatarUrl = response.data.user.avatar;
        dispatch(setAvatar(avatarUrl));
      } catch (err) {
        console.error("Failed to fetch profile data:", err);
      }
    };

    if (token) {
      fetchProfile();
    }
  }, [token, dispatch]);
}
