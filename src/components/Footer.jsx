import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToContact = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="p-4 z-20">
      <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://i.imgur.com/fzfxOQl.png"
                className="h-12"
                alt="FileFlow Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                FileFlow
              </span>
            </Link>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li><Link to="/" className="hover:underline me-4 md:me-6">Home</Link></li>
                <li><Link to="/policy-and-terms" className="hover:underline me-4 md:me-6">Policy & Terms</Link></li>
                <li><a href="#contact" onClick={scrollToContact} className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025 File Flow. All Rights Reserved.
          </span>
        </div>
      </footer>
    </div>
  );
}
