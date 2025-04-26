import React from "react";
import { useSelector } from "react-redux";
import PageWrapper from "../components/PageWrapper";
import heroImg from "../assets/hero-img.jpg";
import mainBgImage from "../assets/mainBackground.png";

function Home() {
  const token = useSelector((state) => state.auth.token);

  return (
    <PageWrapper>
      <div
        style={{
          backgroundImage: `url(${mainBgImage})`,
          backgroundSize: "auto",
          backgroundRepeat: "repeat",
        }}
      >
        {/* Hero Section) */}

        <div className="h-screen bg-[url('/assets/background1.png')] bg-no-repeat bg-center bg-cover">
          <div className="pt-24 h-full flex flex-col md:flex-row">
            {/* Left Section (Text) */}
            <div className="w-full md:w-2/6 flex items-center justify-center text-white px-6 py-8 md:py-0">
              <div>
                <h1 className="text-4xl font-bold mb-4">
                  Welcome to File Flow
                </h1>
                <p className="text-lg">
                  Your all-in-one file management platform. Fast. Smart. Simple.
                </p>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="w-full md:w-4/6 relative flex justify-center items-end md:block">
              <img
                src={heroImg}
                alt="Hero"
                className="w-[95%] md:w-[85%] h-auto rounded-tl-[20px] md:rounded-tl-[80px] rounded-bl-[20px] md:rounded-bl-[80px] rounded-tr-[20px] md:rounded-tr-[0px] rounded-br-[20px] md:rounded-br-[0px] shadow-lg 
                         relative md:absolute md:bottom-0 md:right-0"
              />
            </div>
          </div>
        </div>

        {/* Services Section) */}

        <div className="">
          <p>Services</p>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
