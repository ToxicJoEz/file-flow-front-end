import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import PageWrapper from "./PageWrapper";

export default function ResetPassword() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get("token");

  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      const response = await axios.post(
        "http://main-fileflow-backend-production.up.railway.app/reset-password",
        {
          token,
          newPassword,
        }
      );

      setMessage("✅ Password has been reset! Redirecting to login...");

      // Wait 1 second then navigate to login
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    } catch (err) {
      setError("❌ Failed to reset password. Try again or request a new link.");
    }
  };

  return (
    <PageWrapper>
      <div className="mt-64 flex flex-col items-center mx-auto reset">
        <h2 className="text-2xl font-semibold mb-4">Reset Your Password</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input
            type="password"
            placeholder="Enter new password"
            className="border p-2 w-full mb-4"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <button type="submit" className="fancy-button-alt w-full">
            Reset Password
          </button>
        </form>

        {message && <p className="text-green-600 mt-4">{message}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </PageWrapper>
  );
}
