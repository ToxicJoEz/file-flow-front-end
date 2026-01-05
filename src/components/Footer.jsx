import React from "react";
import mainBgImage from "../assets/mainBackground.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="p-4 z-20">
      <footer className="bg-white rounded-lg shadow-sm dark:bg-gray-900">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link
              to="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="https://i.imgur.com/fzfxOQl.png"
                className="h-12"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                File Flow
              </span>
            </Link>
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
