import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left side: Logo or site name */}
        <div className="text-gray-600 font-bold text-sm">
          FileFlow
        </div>
        {/* Right side: Navigation links */}
        <div className="mt-2 md:mt-0 space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-500 text-sm">Home</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-500 text-sm">Services</Link>
          <Link to="/plans" className="text-gray-600 hover:text-blue-500 text-sm">Plans</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500 text-sm">Contact Us</Link>
        </div>
      </div>
    </footer>
  );
}
