import React from "react";
import { useSelector } from "react-redux";
import PageWrapper from "../components/PageWrapper";
import heroImg from "../assets/hero-img.jpg";
import mainBgImage from "../assets/mainBackground.png";
import aboutUsImg1 from "../assets/AboutUs1.png";
import aboutUsImg2 from "../assets/AboutUs2.png";
import background2 from "../assets/background2.png";

function Home() {
  const token = useSelector((state) => state.auth.token);

  return (
    <PageWrapper>
      <div>
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

        {/* About us Section) */}
        <div
          className="w-[75%] mx-auto py-16 grid gap-12 text-white"
          style={{
            backgroundImage: `url(${background2})`,
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Top Full Width Section */}
          <div className="text-center w-[50%] mx-auto">
            <h2 className="text-4xl font-bold text-yellow-400">About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla.
            </p>
          </div>

          {/* Section 1: Left Title, Right Text */}
          <div className="grid md:grid-cols-2 gap-6 items-center text-left">
            <div className="text-center md:text-left">
              <img src={aboutUsImg2} alt="" />
            </div>
            <div>
              <p className="text-yellow-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          </div>

          {/* Section 2: Left Text, Right Title */}
          <div className="grid md:grid-cols-2 gap-6 items-center text-left">
            <div>
              <p className="text-yellow-400">
                Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis
                sagittis ipsum. Praesent mauris.
              </p>
            </div>
            <div className="text-center md:text-right">
              <img src={aboutUsImg1} alt="" />
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
