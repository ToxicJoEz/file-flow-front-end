import { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Start with false

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true); // Show loader

    try {
      const response = await axios.post(
        "https://main-fileflow-backend-production.up.railway.app/beta-signup",
        formData
      );

      setMessage({
        type: "success",
        text: "Signup successful!",
      });
      setFormData({ name: "", email: "" });
    } catch (error) {
      let errorMessage = "Error signing up!";

      if (error.response) {
        if (
          error.response.status === 400 &&
          error.response.data.message === "Email already exists"
        ) {
          errorMessage = "Email already used. Please use a different email.";
        } else if (error.response.status === 429) {
          errorMessage = "Too many signups. Try again later.";
        } else if (error.response.data && error.response.data.message) {
          errorMessage = error.response.data.message;
        }
      }

      setMessage({
        type: "error",
        text: errorMessage,
      });
    } finally {
      setIsLoading(false); // Hide loader and show button again
    }
  };

  return (
    <div className="flex items-center justify-end mx-12">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 shadow-xl shadow-black">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Join The File Flow Beta!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {message?.type === "success" ? (
            <div className="flex flex-col gap-2 w-full text-[12px] sm:text-xs z-50">
              <div className="succsess-alert cursor-default flex items-center justify-between w-full h-auto rounded-lg bg-[#232531] px-[10px] py-3">
                <div className="flex gap-2">
                  <div className="text-[#2b9875] bg-white/5 backdrop-blur-xl p-1 rounded-lg h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white text-xs">{message.text}</p>
                    <p className="text-gray-500 text-xs">
                      We have received your information. You will be contacted
                      shortly with details on how to access the closed beta
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              <div>
                <label
                  htmlFor="name-icon"
                  className="block mb-2 mt-6 text-sm font-medium text-gray-900"
                >
                  Name:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    id="name-icon"
                    className="bg-gray-200 border border-gray-300 text-white-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder="Name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email-address-icon"
                  className="block mb-2 mt-6 text-sm font-medium text-gray-900"
                >
                  Your Email:
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 16"
                    >
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    id="email-address-icon"
                    className="bg-gray-200 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                    placeholder="name@flowbite.com"
                  />
                </div>
              </div>
              {message && message.type === "error" && (
                <div className="flex flex-col gap-2 w-full sm:w-72 text-[10px] sm:text-xs z-50">
                  <div className="error-alert cursor-default flex items-center justify-between w-full h-12 sm:h-14 rounded-lg bg-[#232531] px-[10px]">
                    <div className="flex gap-2">
                      <div className="text-[#d65563] bg-white/5 backdrop-blur-xl p-1 rounded-lg">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-white text-xs">Error signing up!</p>
                        <p className="text-gray-500 text-xs">{message.text}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="loading-indicator">
                    <div className="loader" />
                  </div>{" "}
                </div>
              ) : (
                <button
                  type="submit"
                  className="w-full beta-button py-2 rounded-lg mt-6"
                >
                  Sign Up
                </button>
              )}
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
