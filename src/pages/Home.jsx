import React from "react";
import { useSelector } from "react-redux";
import PageWrapper from "../components/PageWrapper";
import heroImg from "../assets/hero-img.jpg";
import mainBgImage from "../assets/mainBackground.png";
import secondaryBgImg from "../assets/backgroundSecondary.png";
import secondaryBgImg2 from "../assets/backgroundMain.png";
import aboutUsImg1 from "../assets/AboutUs1.png";
import aboutUsImg2 from "../assets/AboutUs2.png";
import background2 from "../assets/background2.png";
import background3 from "../assets/background3.png";
import background4 from "../assets/background4.png";
import logo1 from "../assets/logoipsum1.svg";
import logo2 from "../assets/logoipsum2.svg";
import logo3 from "../assets/logoipsum3.svg";
import logo4 from "../assets/logoipsum4.svg";
import logo5 from "../assets/logoipsum5.svg";
import logo6 from "../assets/logoipsum6.svg";
import featured1 from "../assets/Featured1.png";
import featured2 from "../assets/Featured2.png";
import featured3 from "../assets/Featured3.png";
import featured4 from "../assets/Featured4.png";
import featured5 from "../assets/Featured5.png";
import contactImg from "../assets/contact us.png";

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
          className="w-[75%] mx-auto py-16 p-12 grid gap-12 text-white rounded-b-[6rem] shadow-[16px_16px_16px_rgba(0,0,0,0.6)] 
"
          style={{
            backgroundImage: `url(${background3})`,
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Top Full Width Section */}
          <div className="text-center w-[50%] mx-auto">
            <h2 className="text-4xl font-bold text-yellow-400">About Us</h2>
            <p className="text-white text-base md:text-lg opacity-90">
              We’re on a mission to make working with files smarter, faster, and
              simpler. FileFlow is built for everyday people who just want their
              tools to work — effortlessly.
            </p>
          </div>

          {/* Section 1: Left Title, Right Text */}
          <div className="grid md:grid-cols-2 gap-6 items-center text-left overflow-visible mt-12">
            <div className="relative z-10">
              {/* Background: default centered on mobile, pushed left on md+ */}
              <div
                className="absolute left-0 md:-left-[calc((170vw-100%)/2)] w-full md:w-screen h-full bg-black rounded-3xl z-0 bg-repeat shadow-[10px_10px_12px_rgba(0,0,0,0.4)]"
                style={{
                  backgroundImage: `url(${secondaryBgImg})`,
                  backgroundSize: "50%",
                }}
              ></div>

              <img
                src={aboutUsImg2}
                alt=""
                className="relative z-10 mx-auto md:mx-0 w-[90%] md:w-[70%] p-4 md:p-0"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                Why FileFlow ?
              </h2>
              <p className="text-white text-base md:text-lg opacity-90">
                FileFlow was created with one goal in mind: to make file
                management effortless. We’re a small team passionate about
                simplifying the way people work with documents.
                <br />
                <br />
                From unlocking protected PDFs to generating smart files with AI,
                we’ve packed powerful tools into one clean platform. Whether
                you're working from your browser or integrating with our desktop
                app, FileFlow adapts to you — not the other way around.
              </p>
            </div>
          </div>

          {/* Section 2: Left Text, Right Title */}
          <div className="grid md:grid-cols-2 gap-6 items-center text-left overflow-visible">
            {/* LEFT SIDE – Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-4">
                Powerful Simplicity
              </h2>
              <p className="text-white text-base md:text-lg opacity-90">
                We believe great tools don’t have to be complicated. That’s why
                FileFlow focuses on delivering powerful file solutions in a way
                that feels easy and intuitive.
                <br />
                <br />
                Whether you’re unlocking documents, converting files, or
                exploring our AI assistant, everything is designed to get you
                results fast — without the clutter.
              </p>
            </div>

            {/* RIGHT SIDE – Image with background */}
            <div className="relative z-10">
              <div
                className="absolute right-0 md:-right-[calc((170vw-100%)/2)] w-full md:w-screen h-full bg-black rounded-l-3xl z-0 bg-repeat shadow-[10px_10px_12px_rgba(0,0,0,0.4)]"
                style={{
                  backgroundImage: `url(${secondaryBgImg2})`,
                  backgroundSize: "50%",
                }}
              ></div>

              <img
                src={aboutUsImg1}
                alt=""
                className="relative z-10 mx-auto md:mx-0 w-[90%] md:w-[70%] p-4 md:p-0"
              />
            </div>
          </div>
        </div>
        {/* Trusted by section */}
        <div className="py-12 relative overflow-hidden w-[75%] mx-auto">
          {/* Title */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#47297B]">
              Trusted by
            </h2>
          </div>

          {/* Scrolling container */}
          <div className="overflow-hidden whitespace-nowrap rounded-lg">
            <div className="flex animate-scroll w-max">
              {[...Array(12)].map((_, idx) => (
                <React.Fragment key={idx}>
                  <img
                    src={logo1}
                    alt="Logo 1"
                    className="h-8 object-contain inline-block px-10"
                  />
                  <img
                    src={logo2}
                    alt="Logo 2"
                    className="h-8 object-contain inline-block px-10"
                  />
                  <img
                    src={logo5}
                    alt="Logo 3"
                    className="h-8 object-contain inline-block px-10"
                  />
                  <img
                    src={logo4}
                    alt="Logo 4"
                    className="h-8 object-contain inline-block px-10"
                  />
                  <img
                    src={logo3}
                    alt="Logo 5"
                    className="h-8 object-contain inline-block px-10"
                  />
                  <img
                    src={logo6}
                    alt="Logo 6"
                    className="h-8 object-contain inline-block px-10"
                  />
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* What do we offer by section */}
        <div className="py-16 px-4 text-white">
          <div className="w-[75%] mx-auto">
            {/* Title + Description */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#47297B] mb-4">
                What Do We Offer?
              </h2>
              <p className="text-base md:text-lg opacity-90 text-black">
                Instantly search through your documents with our powerful
                keyword detection tool. FileFlow also offers secure unlocking,
                clean previews, and more — built for speed and simplicity.
              </p>
            </div>

            {/* Top Row: 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div
                className="rounded-2xl p-6 shadow-xl bg-center py-8 px-12 py-8 px-12"
                style={{ backgroundImage: `url(${background4})` }}
              >
                <img src={featured1} alt="Icon 1" className="w-[25%] mb-4" />
                <h3 className="text-yellow-400 text-xl font-bold mb-3">
                  Keyword search
                </h3>
                <p className="opacity-90 mb-6">
                  Quickly locate the exact information you need with smart
                  keyword detection. Search across your files without opening a
                  single one.
                </p>
                <button className="fancy-button-alt learn-more-btn">
                  Learn more
                </button>
              </div>

              <div
                className="rounded-2xl p-6 shadow-xl bg-center py-8 px-12"
                style={{ backgroundImage: `url(${background4})` }}
              >
                <img src={featured2} alt="Icon 2" className="w-[25%] mb-4" />
                <h3 className="text-yellow-400 text-xl font-bold mb-3">
                  We focus on your file needs!
                </h3>
                <p className="opacity-90 mb-6">
                  FileFlow brings all your tools together in one clean platform.
                  Manage, search, convert, and create — effortlessly.
                </p>
                <button className="fancy-button-alt learn-more-btn">Learn more</button>
              </div>

              <div
                className="rounded-2xl p-6 shadow-xl bg-center py-8 px-12"
                style={{ backgroundImage: `url(${background4})` }}
              >
                <img src={featured3} alt="Icon 3" className="w-[25%] mb-4" />
                <h3 className="text-yellow-400 text-xl font-bold mb-3">OCR</h3>
                <p className="opacity-90 mb-6">
                  Convert scanned images and PDFs into editable, searchable
                  text. Our OCR engine is fast, accurate, and built for
                  real-world documents.
                </p>
                <button className="fancy-button-alt learn-more-btn">Learn more</button>
              </div>
            </div>

            {/* Bottom Row: 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <div
                className="rounded-2xl p-6 shadow-xl bg-center py-8 px-12"
                style={{ backgroundImage: `url(${background4})` }}
              >
                <img src={featured4} alt="Icon 4" className="w-[15%] mb-4" />
                <h3 className="text-yellow-400 text-xl font-bold mb-3">
                  Ai-driven file creation
                </h3>
                <p className="opacity-90 mb-6">
                  Create structured, professional documents with just a few
                  clicks. Our AI understands your input and turns it into clean,
                  usable files instantly.
                </p>
                <button className="fancy-button-alt learn-more-btn">Learn more</button>
              </div>

              <div
                className="rounded-2xl p-6 shadow-xl bg-center py-8 px-12"
                style={{ backgroundImage: `url(${background4})` }}
              >
                <img src={featured5} alt="Icon 5" className="w-[15%] mb-4" />
                <h3 className="text-yellow-400 text-xl font-bold mb-3">
                  File unlocking
                </h3>
                <p className="opacity-90 mb-6">
                  Remove passwords and restrictions from locked files in
                  seconds. Regain full control and access without hassle.
                </p>
                <button className="fancy-button-alt learn-more-btn">Learn more</button>
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto mt-12">
              <p className="text-base md:text-lg opacity-90 text-black">
                Want to check more details about what else we got to offer ?
              </p>
              <button className="border border-black text-black rounded-md px-4 py-2 bg-transparent hover:bg-black hover:text-white transition-colors duration-300 mt-4">
                Learn more
              </button>
            </div>
          </div>
        </div>

        {/* Contact us section */}
        <div className="mx-auto w-[75%] py-16 px-4" id="contact">
          <div className="flex rounded-2xl">
            <div className="w-1/3">
              <img
                src={contactImg}
                alt=""
                className="w-[100%] rounded-tl-2xl rounded-bl-2xl"
              />
            </div>
            <form className="contact-form w-2/3">
              <p className="contact-title">Contact Us</p>
              <p className="contact-message">We’d love to hear from you.</p>

              {/* Name + Email */}
              <div className="contact-flex">
                <label>
                  <input
                    required
                    type="text"
                    className="contact-input"
                    placeholder=" "
                  />
                  <span>Name</span>
                </label>
                <label>
                  <input
                    required
                    type="email"
                    className="contact-input"
                    placeholder=" "
                  />
                  <span>Email</span>
                </label>
              </div>

              {/* Phone + Business (optional) */}
              <div className="contact-flex">
                <label>
                  <input
                    type="text"
                    className="contact-input"
                    placeholder=" "
                  />
                  <span>Phone (optional)</span>
                </label>
                <label>
                  <input
                    type="text"
                    className="contact-input"
                    placeholder=" "
                  />
                  <span>Business Name (optional)</span>
                </label>
              </div>

              {/* Message */}
              <label>
                <textarea
                  className="contact-input"
                  placeholder=" "
                  rows={12}
                  required
                />
                <span>Message</span>
              </label>

              <button className="contact-submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
