import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LogoutButton from "../components/LogoutButton"; // Import the reusable component
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { token } = useSelector((state) => state.auth);
  const isLoggedIn = Boolean(token);
  const toggleMenu = () => setIsOpen(!isOpen);
  const avatar = useSelector((state) => state.auth.avatar);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      setTimeout(() => {
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 1000);
    } else {
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" });
    }
  };

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

          {/* <NavLink
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
          </NavLink> */}
          <a
            href="#"
            onClick={scrollToContact}
            className="text-white  hover:text-[#f5bd1f] transition p-2"
          >
            Contact us
          </a>
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
              <Link to="/beta-signup">
                <button class="bubbles">
                  <span class="text"> Signup for beta!</span>
                </button>
              </Link>
              <button className="star-button">
                <Link to="/login" className="custom-login-link">
                  Login
                </Link>
                <div className="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
              </button>

              {/* <button className="star-button custom-register-link">
                <Link to="/register">Register</Link>
                <div className="star-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
                <div className="star-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    version="1.1"
                    style={{
                      shapeRendering: "geometricPrecision",
                      textRendering: "geometricPrecision",
                      imageRendering: "optimizeQuality",
                      fillRule: "evenodd",
                      clipRule: "evenodd",
                    }}
                    viewBox="0 0 784.11 815.53"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <g id="Layer_x0020_1">
                      <metadata id="CorelCorpID_0Corel-Layer" />
                      <path
                        className="fil0"
                        d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                      />
                    </g>
                  </svg>
                </div>
              </button> */}
            </>
          ) : (
            <Link to="/dashboard">
              <img
                src={avatar}
                alt="User Avatar"
                className="w-12 h-12 rounded-full cursor-pointer"
              />
            </Link>
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
        {/* <NavLink
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
        </NavLink> */}
        <a
          href="#"
          onClick={scrollToContact}
          className="text-white  hover:text-[#f5bd1f] transition block p-2"
        >
          Contact us
        </a>
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
            <button className="star-button">
              <Link to="/login" className="custom-login-link">
                Login
              </Link>
              <div className="star-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
            </button>

            <button className="star-button custom-register-link">
              <Link to="/register">Register</Link>
              <div className="star-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
              <div className="star-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  version="1.1"
                  style={{
                    shapeRendering: "geometricPrecision",
                    textRendering: "geometricPrecision",
                    imageRendering: "optimizeQuality",
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                  }}
                  viewBox="0 0 784.11 815.53"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <defs />
                  <g id="Layer_x0020_1">
                    <metadata id="CorelCorpID_0Corel-Layer" />
                    <path
                      className="fil0"
                      d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                    />
                  </g>
                </svg>
              </div>
            </button>
          </div>
        ) : (
          <Link to="/dashboard">
            <img
              src={avatar}
              alt="User Avatar"
              className="w-12 h-12 rounded-full"
            />
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
