import React from "react";
import { useState } from "react";
import PageWrapper from "../components/PageWrapper";
import featured1 from "../assets/Featured1.png";
import featured2 from "../assets/Featured2.png";
import featured3 from "../assets/Featured3.png";
import featured4 from "../assets/Featured4.png";
import featured5 from "../assets/Featured5.png";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % 4);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + 4) % 4);
  };

  const serviceSlides = [
    {
      title: "PDF Unlock",
      description:
        "Easily remove restrictions from PDFs and regain control of your documents.",
      image: "/images/pdf-unlock.png", // or use import if local
    },
    {
      title: "OCR Scan",
      description:
        "Convert scanned images and PDFs into editable, searchable text.",
      image: "/images/ocr-scan.png",
    },
    {
      title: "AI File Generation",
      description:
        "Generate smart documents using AI templates tailored to your needs.",
      image: "/images/ai-generate.png",
    },
    {
      title: "Keyword Search",
      description:
        "Find the exact info you need in large files using advanced search.",
      image: "/images/search.png",
    },
  ];

  return (
    <PageWrapper>
      <div className="mt-32 px-6 text-center w-[90%] max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#47297B] mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Explore our range of powerful tools designed to help you handle files
          effortlessly.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="service-card">
            <img src={featured1} alt="" className="icon-image" />
            <h3>Keyword Search</h3>
            <p>Find content instantly across all your files.</p>
          </div>
          <div className="service-card">
            <img src={featured5} alt="" className="icon-image" />
            <h3>File Unlock</h3>
            <p>Remove restrictions from protected files.</p>
          </div>
          <div className="service-card">
            <img src={featured3} alt="" className="icon-image" />
            <h3>OCR</h3>
            <p>Extract text from scanned documents with ease.</p>
          </div>
          <div className="service-card">
            <img src={featured4} alt="" className="icon-image" />
            <h3>AI File Creation</h3>
            <p>Generate smart documents powered by AI.</p>
          </div>
        </div>

        {/* Carousel */}
        {/* Carousel Wrapper */}
        <div className="carousel-wrapper service-carousel">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {serviceSlides.map((slide, index) => (
              <div className="carousel-slide" key={index}>
                <div className="slide-content">
                  <h4 className="slide-title">{slide.title}</h4>
                  <p className="slide-description">{slide.description}</p>
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="slide-image"
                  />
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-btn prev" onClick={prevSlide}>
            ‹
          </button>
          <button className="carousel-btn next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </PageWrapper>
  );
}
