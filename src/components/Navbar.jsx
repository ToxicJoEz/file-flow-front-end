import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../components/LogoutButton"; // Import the reusable component
import { useNavigate } from "react-router-dom"; // For Edit Profile link
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const isLoggedIn = Boolean(token);
  const toggleMenu = () => setIsOpen(!isOpen);
  const avatar = useSelector((state) => state.auth.avatar);
  const [avatarDropdownOpen, setAvatarDropdownOpen] = useState(false);

  return (
    <nav className="w-full bg-black shadow-md relative">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
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

        {/* Hamburger for Mobile */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-gray-700 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center Links (Desktop only) */}
        <div className="hidden md:flex space-x-8 text-gray-700 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "ActiveLink"
                : "text-gray-700 hover:text-blue-500 transition"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              isActive
                ? "ActiveLink"
                : "text-gray-700 hover:text-blue-500 transition"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/Plans"
            className={({ isActive }) =>
              isActive
                ? "ActiveLink"
                : "text-gray-700 hover:text-blue-500 transition"
            }
          >
            Plans
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive
                ? "ActiveLink"
                : "text-gray-700 hover:text-blue-500 transition"
            }
          >
            Contact us
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "ActiveLink"
                  : "text-gray-700 hover:text-blue-500 transition"
              }
            >
              Dashboard
            </NavLink>
          )}
        </div>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden md:flex space-x-4">
          {!isLoggedIn ? (
            <>
              <Link
                to="/login"
                className="text-sm font-medium text-gray-700 hover:text-blue-500 transition px-4 py-1.5"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="text-sm font-medium bg-blue-500 text-white px-4 py-1.5 rounded hover:bg-blue-600 transition"
              >
                Register
              </Link>
            </>
          ) : (
            <div className="flex items-center relative">
              <button
                onClick={() => setAvatarDropdownOpen((prev) => !prev)}
                className="focus:outline-none"
              >
                <img
                  src={avatar}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full border border-white"
                />
              </button>

              <AnimatePresence>
                {avatarDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-14 bg-white border border-gray-200 rounded shadow-lg w-40 z-50"
                  >
                    <Link
                      to="/EditProfile"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      onClick={() => setAvatarDropdownOpen(false)}
                    >
                      Edit Profile
                    </Link>
                    <div className="border-t" />
                    <LogoutButton className="w-full text-left px-4 py-2 hover:bg-gray-100 text-red-600" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu with Smooth Transition */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out absolute top-full left-0 right-0 bg-white shadow-lg px-4 pb-4 space-y-2 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
        style={{ zIndex: 40 }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "ActiveLink block"
              : "text-gray-700 hover:text-blue-500 transition block"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Services"
          className={({ isActive }) =>
            isActive
              ? "ActiveLink block"
              : "text-gray-700 hover:text-blue-500 transition block"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/Plans"
          className={({ isActive }) =>
            isActive
              ? "ActiveLink block"
              : "text-gray-700 hover:text-blue-500 transition block"
          }
        >
          Plans
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "ActiveLink block"
              : "text-gray-700 hover:text-blue-500 transition block"
          }
        >
          Contact us
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "ActiveLink block"
                : "text-gray-700 hover:text-blue-500 transition block"
            }
          >
            Dashboard
          </NavLink>
        )}

        {!isLoggedIn ? (
          <div className="pt-2 border-t mt-2 flex items-center space-x-4">
            <Link to="/login" className="text-gray-700 hover:text-blue-500">
              Login
            </Link>
            <Link
              to="/register"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Register
            </Link>
          </div>
        ) : (
          <div className="flex">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
            <LogoutButton className="ml-4" />
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
