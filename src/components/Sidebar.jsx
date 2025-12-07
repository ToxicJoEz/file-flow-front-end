import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <>
      <aside className="sidebar md:min-h-[800px] hidden sm:flex">
        <nav className="space-y-2 p-4 ">
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              isActive ? "sidebar-link side-link-active" : "sidebar-link"
            }
          >
            <FontAwesomeIcon
              icon="fa-solid fa-house-chimney"
              size="lg"
              className="w-[16%]"
            />
            <span className="sidebar-label">Dashboard home</span>
          </NavLink>

          <NavLink
            to="keywords-searched"
            className={({ isActive }) =>
              isActive ? "sidebar-link side-link-active" : "sidebar-link"
            }
          >
            <FontAwesomeIcon
              icon="fa-solid fa-search"
              size="lg"
              className="w-[16%]"
            />
            <span className="sidebar-label">Keywords Searched</span>
          </NavLink>
          {/* <NavLink
          to="files-unlocked"
          className={({ isActive }) =>
            isActive ? "sidebar-link side-link-active" : "sidebar-link"
          }
        > */}
          <div className="sidebar-link opacity-50 cursor-not-allowed">
            <FontAwesomeIcon
              icon="fa-solid fa-unlock-keyhole"
              size="lg"
              className="w-[16%]"
            />
            <span className="sidebar-label">Files unlocked</span>
          </div>
          {/* </NavLink> */}
          <NavLink
            to="billing-information"
            className={({ isActive }) =>
              isActive ? "sidebar-link side-link-active" : "sidebar-link"
            }
          >
            <FontAwesomeIcon
              icon="fa-solid fa-sack-dollar"
              size="lg"
              className="w-[16%]"
            />
            <span className="sidebar-label">Billing information</span>
          </NavLink>
          <NavLink
            to="EditProfile"
            className={({ isActive }) =>
              isActive ? "sidebar-link side-link-active" : "sidebar-link"
            }
          >
            <FontAwesomeIcon
              icon="fa-solid fa-user-gear"
              size="lg"
              className="w-[16%]"
            />
            <span className="sidebar-label">Profile settings</span>
          </NavLink>
          <a
            href="https://github.com/ToxicJoEz/FileFlow-User-App/releases/download/app/FileFlow.User.Application.3.rar"
            download
            className="sidebar-link sidebar-download flex flex-col items-center text-center gap-2"
          >
            <FontAwesomeIcon
              icon="fa-solid fa-download"
              size="lg"
              className="w-[16%] text-white"
            />
            <button className="star-button">
              <span className="sidebar-label">
                Don't have the desktop app ? download it now !
              </span>
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
          </a>
        </nav>
      </aside>
      <nav className="flex sm:hidden mobile_sidebar mx-auto p-4 grid grid-cols-4 gap-4 rounded-lg">
        <NavLink
          to="/dashboard"
          end
          className={({ isActive }) =>
            isActive
              ? "sidebar-link side-link-active col-span-1"
              : "sidebar-link col-span-1"
          }
        >
          <FontAwesomeIcon
            icon="fa-solid fa-house-chimney"
            size="lg"
            className="w-[100%]"
          />
        </NavLink>
        <NavLink
          to="keywords-searched"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link side-link-active col-span-1"
              : "sidebar-link col-span-1"
          }
        >
          <FontAwesomeIcon
            icon="fa-solid fa-search"
            size="lg"
            className="w-[100%]"
          />
        </NavLink>
        <NavLink
          to="billing-information"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link side-link-active col-span-1"
              : "sidebar-link col-span-1"
          }
        >
          <FontAwesomeIcon
            icon="fa-solid fa-sack-dollar"
            size="lg"
            className="w-[100%]"
          />
        </NavLink>
        <NavLink
          to="EditProfile"
          className={({ isActive }) =>
            isActive
              ? "sidebar-link side-link-active col-span-1"
              : "sidebar-link col-span-1"
          }
        >
          <FontAwesomeIcon
            icon="fa-solid fa-user-gear"
            size="lg"
            className="w-[100%]"
          />
        </NavLink>
      </nav>
    </>
  );
}
