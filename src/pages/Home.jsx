// src/pages/Home.jsx
import React from "react";
import { useSelector } from "react-redux";
import PageWrapper from "../components/PageWrapper";

function Home() {
  const token = useSelector((state) => state.auth.token);

  return (
    <PageWrapper>
      <div className="h-screen bg-[url('/assets/background1.png')] bg-no-repeat bg-center bg-cover">
        <div className="pt-24">
          <h1 className="text-white">Home</h1>
          <h1 className="text-white">Home</h1>
          <h1 className="text-white">Home</h1>
          <h1 className="text-white">Home</h1>
          <h1 className="text-white">Home</h1>
          <h1 className="text-white">Home</h1>
          <h1 className="text-white">Home</h1>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
