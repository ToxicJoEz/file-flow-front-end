// src/pages/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import Sidebar from "../components/Sidebar";
import { AnimatePresence, motion } from "framer-motion";

export default function DashboardLayout() {
  return (
    <PageWrapper>
      {/* Sidebar: fixed under your header */}
      <aside className="dashboard-sidebar">
        <Sidebar />
      </aside>

      {/* Main content: pushed aside and below header */}
      <section className="dashboard-main min-h-[100vh]">
        <motion.div
          key={location.pathname} // will re-render on each child route
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Outlet />
        </motion.div>
      </section>
    </PageWrapper>
  );
}
