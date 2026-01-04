import React from "react";
import SignupForm from "../components/SignupForm";
import bgImage from "../assets/background1.png";
import Featured from "../components/Featured";
import PageWrapper from "../components/PageWrapper";

export default function BetaSignup() {
  return (
    <PageWrapper>
      <div className="flex flex-col lg:flex-row bg-[url('/assets/background1.png')] bg-no-repeat bg-center bg-cover pt-64">
        <div className="left w-full lg:w-3/4 pb-32">
          <div className="text-white  px-4 lg:px-12 pb-32">
            <h1 className="home-title">
              <span> File Flow </span>- For all your file needs !
            </h1>
            <h2 className="text-2xl font-semibold mb-2">
              Search, unlock, Edit & Transform Files with Ease
            </h2>
            <p className="text-lg mb-4">
              File Flow is designed to simplify the way you handle documents.
              Whether it's searching files, extracting text, or unlocking PDFs
              efficiently, we've got you covered.
            </p>
            <span className="block text-xl font-medium">
              🚀 Stay tuned for our official launch & join the
              <strong>closed beta</strong> Launching very soon!
            </span>
            <p></p>
          </div>
        </div>
        <div className="right w-full lg:w-1/4">
          <SignupForm />
        </div>
      </div>
      <Featured></Featured>
    </PageWrapper>
  );
}
