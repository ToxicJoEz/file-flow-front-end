import { useState } from "react";
import axios from "axios";

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://main-fileflow-backend-production.up.railway.app/beta-signup",
        formData
      );

      setMessage({
        type: "success",
        text: "You're on the list!",
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
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center lg:justify-end mx-4 lg:mx-12">
      <div className="bg-white p-8 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full max-w-md border border-gray-100">
        <h2 className="text-2xl font-extrabold text-center text-gray-900 mb-2">
          Join The Beta
        </h2>
        <p className="text-center text-gray-500 text-sm mb-6">
          Be the first to search 5,000+ files instantly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {message?.type === "success" ? (
            <div className="animate-in fade-in zoom-in duration-300">
              <div className="flex flex-col items-center text-center p-6 rounded-xl bg-emerald-50 border border-emerald-100">
                <div className="text-emerald-600 bg-white p-2 rounded-full shadow-sm mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                </div>
                <h3 className="text-emerald-900 font-bold text-lg">{message.text}</h3>
                <p className="text-emerald-700 text-sm mt-1">
                  Check your email soon for access details and next steps.
                </p>
              </div>
            </div>
          ) : (
            <>
              {/* Name Input */}
              <div className="group">
                <label htmlFor="name" className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 ml-1">
                  Full Name
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 block w-full ps-11 p-3 transition-all outline-none"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="group">
                <label htmlFor="email" className="block mb-1.5 text-xs font-bold uppercase tracking-wider text-gray-700 ml-1">
                  Email Address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none text-gray-400 group-focus-within:text-blue-500 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 16">
                      <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                      <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                    </svg>
                  </div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 block w-full ps-11 p-3 transition-all outline-none"
                    placeholder="name@company.com"
                  />
                </div>
              </div>

              {/* Error Message */}
              {message && message.type === "error" && (
                <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 border border-red-100 animate-shake">
                  <div className="text-red-500 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-red-800 text-xs font-bold">Registration Failed</p>
                    <p className="text-red-700 text-[11px] leading-tight">{message.text}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                {isLoading ? (
                  <div className="flex items-center justify-center p-3">
                    <div className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : (
                  <button
                    type="submit"
                    className="w-full beta-button py-3.5 rounded-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
                  >
                    Join the Closed Beta
                  </button>
                )}
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignupForm;