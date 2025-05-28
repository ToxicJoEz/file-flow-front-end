import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sidebar() {
  return (
    <aside className="sidebar md:min-h-[800px]">
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
        <a href="/dashboard/kanban" className="sidebar-link">
          <FontAwesomeIcon
            icon="fa-solid fa-unlock-keyhole"
            size="lg"
            className="w-[16%]"
          />
          <span className="sidebar-label">Files unlocked</span>
        </a>
        <a href="/dashboard/inbox" className="sidebar-link">
          <FontAwesomeIcon
            icon="fa-solid fa-search"
            size="lg"
            className="w-[16%]"
          />
          <span className="sidebar-label">Keywords Searched</span>
        </a>
        <a href="/dashboard/users" className="sidebar-link">
          <FontAwesomeIcon
            icon="fa-solid fa-file"
            size="lg"
            className="w-[16%]"
          />
          <span className="sidebar-label">My files</span>
        </a>
        <a href="/dashboard/products" className="sidebar-link">
          <FontAwesomeIcon
            icon="fa-solid fa-sack-dollar"
            size="lg"
            className="w-[16%]"
          />
          <span className="sidebar-label">Billing information</span>
        </a>
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
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar-link flex flex-col items-center text-center gap-2 side-link-active" : "sidebar-link flex flex-col items-center text-center gap-2"
          }
        >
          <FontAwesomeIcon
            icon="fa-solid fa-download"
            size="lg"
            className="w-[16%]"
          />
          <span className="sidebar-label">
            Don't have the desktop app ? download it now !
          </span>
        </NavLink>
      </nav>
    </aside>
  );
}
