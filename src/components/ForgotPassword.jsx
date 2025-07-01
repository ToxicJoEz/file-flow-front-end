import React, { useState } from "react";
import axios from "axios";
import PageWrapper from "./PageWrapper";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // State for loader

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3001/forgot-password",
        {
          email,
        }
      );

      setMessage("We'll send a link to this email to reset your password shortly. please allow a few minutes for the email to arrive.");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageWrapper>
      <div className="mt-64 flex flex-col items-center reset mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Forgot Password</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <input
            type="email"
            placeholder="Enter your email"
            className="border p-2 w-full mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {/* Conditionally render the submit button or the loader div */}
          {!loading ? (
            <button type="submit" className="fancy-button-alt w-full">
              Send Reset Link
            </button>
          ) : (
            <div className="loading-indicator">
              <div className="loader" />
            </div>
          )}
        </form>

        {message && <p className="text-green-600 mt-4">{message}</p>}
        {error && <p className="text-red-600 mt-4">{error}</p>}
      </div>
    </PageWrapper>
  );
}
