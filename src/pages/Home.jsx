// src/pages/Home.jsx
import React from "react";
import { useSelector } from "react-redux";
import LogoutButton from "../components/LogoutButton"; // Import the reusable component
import PageWrapper from "../components/PageWrapper";

function Home() {
  const token = useSelector((state) => state.auth.token);

  return (
    <PageWrapper>
      <div>
        <h2 className="bg-black text-white p-8 font-bold test">
          Home
          {/* Show the Logout button only if the user is logged in */}
          {token && <LogoutButton className="ml-4" />}
        </h2>
        {/* Registration form elements will go here */}
      </div>
    </PageWrapper>
  );
}

export default Home;
