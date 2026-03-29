import React from "react";
import SignupForm from "../components/SignupForm";
import Featured from "../components/Featured";
import PageWrapper from "../components/PageWrapper";
import { Link } from "react-router-dom";

export default function BetaSignup() {
  return (
    <PageWrapper>
      <div className="flex flex-col lg:flex-row bg-[url('/assets/background1.png')] bg-no-repeat bg-center bg-cover pt-20 lg:pt-64 pb-12 lg:pb-32 px-4 lg:px-12 gap-12">
        {/* Main Content Area */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <div className="text-white text-center lg:text-left">
            {/* 1. The Hook (Top on both) */}
            <div className="order-1">
              <h1 className="home-title text-4xl lg:text-5xl font-bold mb-4">
                Stop opening every file, <span>Search Deeply</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl font-extrabold mb-4 leading-tight">
                Find one sentence in 5,000 files instantly.
              </h2>
              <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto lg:mx-0">
                Deep-search every folder, extract text with OCR, and unlock
                restricted documents instantly. Join the exclusive beta to
                transform your workflow.
              </p>
              <span className="inline-block text-xl font-medium text-yellow-400 mb-8 lg:mb-0">
                🚀 Closed Beta Launching Soon!
              </span>
            </div>

            {/* 2. MOBILE ONLY: Form appears here between text and "Learn More" */}
            <div className="block lg:hidden order-2 my-8">
              <SignupForm />
            </div>

            {/* 3. Learn More (Bottom on mobile, stays on left for desktop) */}
            <div className="order-3 mt-10 p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 max-w-md mx-auto lg:mx-0">
              <p className="text-sm mb-4 opacity-80">
                Want to see the full list of tools and features we're building?
              </p>
              <Link
                to="/"
                className="inline-block w-full text-center py-3 px-6 rounded-xl border border-white/30 hover:bg-white/10 transition-all font-semibold uppercase tracking-wider text-sm"
              >
                Visit Home Page
              </Link>
            </div>
          </div>
        </div>

        {/* 4. DESKTOP ONLY: Form stays on the right sidebar */}
        <div className="hidden lg:block lg:w-2/5">
          <SignupForm />
        </div>
      </div>

      <Featured />
    </PageWrapper>
  );
}
