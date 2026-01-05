import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import PageWrapper from "../components/PageWrapper";
import heroImg from "../assets/hero-img.svg";
import mainBgImage from "../assets/mainBackground.png";
import secondaryBgImg from "../assets/backgroundSecondary.png";
import secondaryBgImg2 from "../assets/backgroundMain.png";
import aboutUsImg1 from "../assets/AboutUs1.svg";
import aboutUsImg2 from "../assets/AboutUs2.svg";
import background2 from "../assets/background2.png";
import background3 from "../assets/background3.png";
import background4 from "../assets/background4.png";
import logo1 from "../assets/logoipsum1.svg";
import logo2 from "../assets/logoipsum2.svg";
import logo3 from "../assets/logoipsum3.svg";
import logo4 from "../assets/logoipsum4.svg";
import logo5 from "../assets/logoipsum5.svg";
import logo6 from "../assets/logoipsum6.svg";
import featured1 from "../assets/FileSearch2.svg";
import featured2 from "../assets/Folder.svg";
import featured3 from "../assets/OCR.svg";
import featured4 from "../assets/FileSorting.svg";
import featured5 from "../assets/FileUnlock.svg";
import contactImg from "../assets/contact us.png";

function Home() {
  const token = useSelector((state) => state.auth.token);
  const [contactData, setContactData] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleContactChange = (e) => {
    const { name, value } = e.target;
    setContactData((prev) => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    try {
      await axios.post(
        "https://main-fileflow-backend-production.up.railway.app/contact",
        contactData
      );
      toast.success("Your message has been sent successfully!");
      setContactData({ name: "", email: "", phone: "", business: "", message: "" });
    } catch (error) {
      toast.error("There was an error sending your message. Please try again.");
      console.error("Contact form error:", error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <PageWrapper>
      <div>
        {/* Hero Section) */}

        <div className="h-screen bg-[url('/assets/background1.png')] bg-no-repeat bg-center bg-cover">
          <div className="pt-24 h-full flex flex-col md:flex-row">
            {/* Left Section (Text) */}
            <div className="w-full md:w-3/6 flex items-center justify-center text-white px-6 py-8 md:py-0">
              <div>
                <h1 className="home-title">
                  Welcome to <span>File Flow !</span>
                </h1>
                <p className="text-xl mt-4  opacity-90">
                  Your all-in-one file management platform. Fast. Smart. Simple.
                </p>
                <p className="text-lg mt-2  opacity-90">
                  Start with our advanced Keyword Search tool to instantly scan
                  your documents and locate the exact information you need. No
                  more opening files one by one—just type your keywords and let
                  FileFlow do the rest.
                </p>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="w-full md:w-4/6 relative flex justify-center items-end md:block">
              <img
                src={heroImg}
                alt="Hero"
                className="w-[95%] md:w-[80%] h-auto relative md:absolute md:bottom-0 md:right-20"
              />
            </div>
          </div>
        </div>

        {/* About us Section) */}
        <div
          className="w-[80%] md:w-[75%] mx-auto py-16 p-12 grid gap-12 text-white rounded-b-[4rem] md:rounded-b-[6rem] shadow-[16px_16px_16px_rgba(0,0,0,0.6)] 
"
          style={{
            backgroundImage: `url(${background3})`,
            backgroundSize: "auto",
            backgroundRepeat: "repeat",
          }}
        >
          {/* Top Full Width Section */}
          <div className="text-center w-[100%] md:w-[50%] md:mx-auto">
            <h2 className="text-4xl font-bold text-yellow-400">About Us</h2>
            <p className="text-white text-base md:text-lg opacity-90 mt-4">
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
                  backgroundImage: `url(${secondaryBgImg2})`,
                  backgroundSize: "50%",
                }}
              ></div>

              <img
                src={aboutUsImg2}
                alt=""
                className="relative z-10 mx-auto md:mr-22 w-[90%] md:w-[80%] p-12"
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
                Our Keyword Search tool is the first of many features we're
                building to help you manage your files. It's designed to save
                you hours of manual checking—instead of opening every file to
                find what you need, simply enter your keywords, and our smart
                search engine will almost instantly locate the exact lines in
                documents containing them.
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
                While we support various file operations, our Launch primary
                focus is on delivering a superior search experience. We've
                streamlined the process so you can cut through the noise and
                find exactly what you're looking for in seconds—without the
                clutter.
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
                className="relative z-10 mx-auto md:ml-22 w-[90%] md:w-[80%] p-12"
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
          <div className="w-[80%] md:w-[75%] mx-auto">
            {/* Title + Description */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#47297B] mb-4">
                What Do We Offer?
              </h2>
              <p className="text-base md:text-lg opacity-90 text-black">
                Instantly search through your documents with our powerful
                keyword detection tool. FileFlow will soon also offers secure
                unlocking, clean previews, and more — built for speed and
                simplicity.
              </p>
            </div>

            {/* Top Row: 3 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
              <div
                className="rounded-2xl shadow-xl bg-center px-12 py-2"
                style={{ backgroundImage: `url(${background4})` }}
              >
                <img src={featured1} alt="Icon 1" className="w-[50%] mx-auto" />
                <h3 className="text-yellow-400 text-xl font-bold mb-3">
                  Keyword search
                </h3>
                <p className="opacity-90 mb-6">
                  Quickly locate the exact information you need with smart
                  keyword detection. Search across your files without opening a
                  single one.
                </p>
                {/* <Link to="/services">
                  <button className="fancy-button-alt learn-more-btn mb-4">
                    Learn more
                  </button>
                </Link> */}
              </div>

              <div
                className="rounded-2xl shadow-xl bg-center px-12 py-2"
                style={{ backgroundImage: `url(${background4})` }}
              >
                <img src={featured2} alt="Icon 2" className="w-[50%] mx-auto" />
                <h3 className="text-yellow-400 text-xl font-bold mb-3">
                  We focus on your file needs!
                </h3>
                <p className="opacity-90 mb-6">
                  FileFlow brings all your tools together in one clean platform.
                  Manage, search, convert, and create — effortlessly.
                </p>
                {/* <Link to="/services">
                  <button className="fancy-button-alt learn-more-btn mb-4">
                    Learn more
                  </button>
                </Link> */}
              </div>

              <div
                className="rounded-2xl shadow-xl bg-center px-12 py-2"
                style={{ backgroundImage: `url(${background4})` }}
              >
                <img src={featured3} alt="Icon 3" className="w-[50%] mx-auto" />
                <h3 className="text-yellow-400 text-xl font-bold mb-3">Optical Character Recognition</h3>
                <p className="opacity-90 mb-6">
                  Convert scanned images and PDFs into editable, searchable
                  text. Our OCR engine is fast, accurate, and built for
                  real-world documents.
                </p>
                {/* <Link to="/services">
                  <button className="fancy-button-alt learn-more-btn mb-4">
                    Learn more
                  </button>
                </Link> */}
              </div>
            </div>

            {/* Bottom Row: 2 Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              <div
                className="rounded-2xl shadow-xl bg-center px-12 py-2"
                style={{ backgroundImage: `url(${background4})` }}
              >
                <img src={featured4} alt="Icon 4" className="w-[40%] mb-4 mt-2 mx-auto" />
                <h3 className="text-yellow-400 text-xl font-bold mb-3">
                  Smart File Sorting
                </h3>
                <p className="opacity-90 mb-6">
                  Automatically sort and organize your files into custom
                  folders. Define your own categories and let our tool handle
                  the rest with precision and ease.
                </p>
                {/* <Link to="/services">
                  <button className="fancy-button-alt learn-more-btn mb-4">
                    Learn more
                  </button>
                </Link> */}
              </div>

              <div
                className="rounded-2xl shadow-xl bg-center px-12 py-2"
                style={{ backgroundImage: `url(${background4})` }}
              >
                <img src={featured5} alt="Icon 5" className="w-[40%] mb-4 mt-2 mx-auto" />
                <h3 className="text-yellow-400 text-xl font-bold mb-3">
                  File unlocking
                </h3>
                <p className="opacity-90 mb-6">
                  Remove passwords and restrictions from locked files in
                  seconds. Regain full control and access without hassle.
                </p>
                {/* <Link to="/services">
                  <button className="fancy-button-alt learn-more-btn mb-4">
                    Learn more
                  </button>
                </Link> */}
              </div>
            </div>

            <div className="text-center max-w-2xl mx-auto mt-12">
              <p className="text-base md:text-lg opacity-90 text-black">
                Want to Signup for our closed beta?
              </p>
              <Link to="/beta-signup">
                <button className="border border-black text-black rounded-md px-4 py-2 bg-transparent hover:bg-black hover:text-white transition-colors duration-300 mt-4">
                  Learn more
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Contact us section */}
        <div className="mx-auto w-[90%] md:w-[75%] py-16 px-4" id="contact">
          <div className="flex flex-col md:flex-row rounded-2xl">
            <div className="w-full md:w-1/3">
              <img
                src={contactImg}
                alt=""
                className="w-full rounded-t-2xl md:rounded-tl-2xl md:rounded-bl-2xl md:rounded-tr-none"
              />
            </div>
            <form
              onSubmit={handleContactSubmit}
              className="contact-form w-full md:w-2/3 rounded-b-2xl md:rounded-none"
            >
              <p className="contact-title">Contact Us</p>
              <p className="contact-message">We’d love to hear from you.</p>

              {/* Name + Email */}
              <div className="contact-flex flex flex-col md:flex-row gap-4">
                <label>
                  <input
                    required
                    type="text"
                    className="contact-input"
                    placeholder=" "
                    name="name"
                    value={contactData.name}
                    onChange={handleContactChange}
                  />
                  <span>Name</span>
                </label>
                <label>
                  <input
                    required
                    type="email"
                    className="contact-input"
                    placeholder=" "
                    name="email"
                    value={contactData.email}
                    onChange={handleContactChange}
                  />
                  <span>Email</span>
                </label>
              </div>

              {/* Phone + Business (optional) */}
              <div className="contact-flex flex flex-col md:flex-row gap-4">
                <label>
                  <input
                    type="text"
                    className="contact-input"
                    placeholder=" "
                    name="phone"
                    value={contactData.phone}
                    onChange={handleContactChange}
                  />
                  <span>Phone (optional)</span>
                </label>
                <label>
                  <input
                    type="text"
                    className="contact-input"
                    placeholder=" "
                    name="business"
                    value={contactData.business}
                    onChange={handleContactChange}
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
                  name="message"
                  value={contactData.message}
                  onChange={handleContactChange}
                />
                <span>Message</span>
              </label>

              <button type="submit" className="contact-submit" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

export default Home;
