// src/pages/Home.jsx
import React from "react";
import { useSelector } from "react-redux";
import PageWrapper from "../components/PageWrapper";

function Home() {
  const token = useSelector((state) => state.auth.token);

  return (
    <PageWrapper>
      <div>
        <h2 className="bg-black text-white p-8 font-bold test">
          Home
        </h2>
      </div>
    </PageWrapper>
  );
}

export default Home;
