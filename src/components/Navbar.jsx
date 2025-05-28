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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full bg-black shadow-md fixed top-0 left-0 right-0 z-50 transition-colors duration-200 p-2 ${
        scrolled ? "bg-black/100" : "bg-black/40"
      }`}
    >
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
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white ">
            File Flow
          </span>
        </Link>

        {/* Hamburger for Mobile */}
        <div className="md:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-white  focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Center Links (Desktop only) */}
        <div className="hidden md:flex space-x-8 text-white  text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "ActiveLink p-2"
                : "text-white  hover:text-[#f5bd1f] transition p-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/Services"
            className={({ isActive }) =>
              isActive
                ? "ActiveLink p-2"
                : "text-white  hover:text-[#f5bd1f] transition p-2"
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/Plans"
            className={({ isActive }) =>
              isActive
                ? "ActiveLink p-2"
                : "text-white  hover:text-[#f5bd1f] transition p-2"
            }
          >
            Plans
          </NavLink>
          <NavLink
            to="/Contact"
            className={({ isActive }) =>
              isActive
                ? "ActiveLink p-2"
                : "text-white  hover:text-[#f5bd1f] transition p-2"
            }
          >
            Contact us
          </NavLink>
          {isLoggedIn && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive
                  ? "ActiveLink p-2"
                  : "text-white  hover:text-[#f5bd1f] transition p-2"
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
              <Link to="/login" className="custom-login-link">
                Login
              </Link>
              <Link to="/register" className="custom-register-link">
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
                  className="w-12 h-12 rounded-full"
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
                      to="dashboard/EditProfile"
                      className="block px-4 py-2 hover:bg-gray-100"
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
        className={`md:hidden transition-all duration-300 ease-in-out absolute top-full left-0 right-0 bg-[#47297b] shadow-lg px-4 pb-4 space-y-2 ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } flex flex-col items-center text-center`}
        style={{ zIndex: 40 }}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "ActiveLink block p-2"
              : "text-white  hover:text-[#f5bd1f] transition block p-2"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/Services"
          className={({ isActive }) =>
            isActive
              ? "ActiveLink block p-2"
              : "text-white  hover:text-[#f5bd1f] transition block p-2"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/Plans"
          className={({ isActive }) =>
            isActive
              ? "ActiveLink block p-2"
              : "text-white  hover:text-[#f5bd1f] transition block p-2"
          }
        >
          Plans
        </NavLink>
        <NavLink
          to="/Contact"
          className={({ isActive }) =>
            isActive
              ? "ActiveLink block p-2"
              : "text-white  hover:text-[#f5bd1f] transition block p-2"
          }
        >
          Contact us
        </NavLink>
        {isLoggedIn && (
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              isActive
                ? "ActiveLink block p-2"
                : "text-white  hover:text-[#f5bd1f] transition block p-2"
            }
          >
            Dashboard
          </NavLink>
        )}

        {!isLoggedIn ? (
          <div className="pt-2 border-t mt-2 flex items-center space-x-4">
            <Link to="/login" className="custom-login-link">
              Login
            </Link>
            <Link to="/register" className="custom-register-link">
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
