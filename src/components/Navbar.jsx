import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full bg-white shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">FileFlow</div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu} className="text-gray-700 focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center Links (Desktop only) */}
        <div className="hidden md:flex space-x-8 text-gray-700 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          <a href="#" className="hover:text-blue-500 transition">Home</a>
          <a href="#" className="hover:text-blue-500 transition">Services</a>
          <a href="#" className="hover:text-blue-500 transition">Plans</a>
          <a href="#" className="hover:text-blue-500 transition">Contact Us</a>
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          <Link to="/login" className="text-sm font-medium text-gray-700 hover:text-blue-500 transition px-4 py-1.5">
            Login
          </Link>
          <Link to="/register" className="text-sm font-medium bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600 transition">
            Register
          </Link>
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out absolute top-full left-0 right-0 bg-white shadow-lg px-4 pb-4 space-y-2 ${
          isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ zIndex: 40 }}
      >
        <a href="#" className="block text-gray-700 hover:text-blue-500">Home</a>
        <a href="#" className="block text-gray-700 hover:text-blue-500">Services</a>
        <a href="#" className="block text-gray-700 hover:text-blue-500">Plans</a>
        <a href="#" className="block text-gray-700 hover:text-blue-500">Contact Us</a>
        <div className="pt-2 border-t mt-2 flex items-center space-x-4">
          <Link to="/login" className="text-gray-700 hover:text-blue-500">Login</Link>
          <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
