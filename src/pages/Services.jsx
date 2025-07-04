import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import featured1 from "../assets/Featured1.png";
import featured2 from "../assets/Featured2.png";
import featured3 from "../assets/Featured3.png";
import featured4 from "../assets/Featured4.png";
import featured5 from "../assets/Featured5.png";

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <PageWrapper>
      <div className="mt-32 px-6 text-center w-[90%] max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-[#47297B] mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          Explore our range of powerful tools designed to help you handle files
          effortlessly.
        </p>

        {/* Service Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div
            className={`service-card ${activeIndex === 0 ? "active" : ""}`}
            onClick={() => setActiveIndex(0)}
          >
            <img src={featured1} alt="" className="icon-image" />
            <h3>Keyword Search</h3>
            <p className="hidden sm:block">
              Find content instantly across all your files.
            </p>
          </div>
          <div
            className={`service-card ${activeIndex === 1 ? "active" : ""}`}
            onClick={() => setActiveIndex(1)}
          >
            <img src={featured5} alt="" className="icon-image" />
            <h3>File Unlock</h3>
            <p className="hidden sm:block">Remove restrictions from protected files.</p>
          </div>
          <div
            className={`service-card ${activeIndex === 2 ? "active" : ""}`}
            onClick={() => setActiveIndex(2)}
          >
            <img src={featured3} alt="" className="icon-image" />
            <h3>OCR</h3>
            <p className="hidden sm:block">Extract text from scanned documents with ease.</p>
          </div>
          <div
            className={`service-card ${activeIndex === 3 ? "active" : ""}`}
            onClick={() => setActiveIndex(3)}
          >
            <img src={featured4} alt="" className="icon-image" />
            <h3>Smart Sorting</h3>
            <p className="hidden sm:block">Organize your files into custom folders — automatically.</p>
          </div>
        </div>

        {/* Carousel */}
        {/* Carousel Wrapper */}

        <div className="carousel-wrapper service-carousel">
          <AnimatePresence mode="wait">
            {[0, 1, 2, 3].map((index) =>
              index === activeIndex ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="detail-section active"
                >
                  {index === 0 && (
                    <div className="flex">
                      <div className="services-details-1">
                        <h1>Find Exactly What You Need, Instantly !</h1>
                        <hr />
                        <p>
                          Our powerful Keyword Search tool goes beyond simple
                          matching. It supports fuzzy search, so even if you
                          mistype or use similar words, you still get accurate
                          results. Whether you're searching for exact phrases,
                          partial matches, or synonyms, the tool adapts to find
                          what matters most.
                        </p>
                        <p>
                          It handles multiple file formats — from PDFs and Word
                          docs to spreadsheets — scanning through large volumes
                          of data quickly and efficiently. Advanced filtering
                          and ranking ensure you get the most relevant hits
                          right at the top.
                        </p>
                        <p>
                          With support for boolean operators and proximity
                          searches, you have full control to customize your
                          search queries, making your document retrieval smarter
                          and more intuitive than ever.
                        </p>
                        <button className="cta-button-wrapper fancy-button-alt">
                          <Link to="/plans">See Pricing & Plans</Link>
                        </button>
                      </div>
                      <div className="services-details-2 hidden sm:block">
                        <img src={featured1} alt="" />
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="flex">
                      <div className="services-details-1">
                        <h1>
                          Effortlessly Remove Restrictions and Regain Control !
                        </h1>
                        <hr />
                        <p>
                          Our File Unlock service empowers you to swiftly remove
                          passwords, editing restrictions, and other security
                          locks from various file types — including PDFs, Word
                          documents, and Excel spreadsheets. Whether you’ve
                          forgotten a password or received a file with limited
                          permissions, we help you unlock and access your
                          content without hassle.
                        </p>
                        <p>
                          We support both encrypted and restricted files, using
                          advanced algorithms that ensure data integrity while
                          removing locks safely. The process is fast, secure,
                          and respects your privacy.
                        </p>
                        <p>
                          Additionally, our tool can batch unlock multiple files
                          at once, saving you time when handling large sets of
                          documents. Unlock your files with confidence and
                          regain full editing, copying, and printing
                          capabilities instantly.
                        </p>
                        <button className="cta-button-wrapper fancy-button-alt">
                          <Link to="/plans">See Pricing & Plans</Link>
                        </button>
                      </div>
                      <div className="services-details-2 hidden sm:block">
                        <img src={featured5} alt="" />
                      </div>
                    </div>
                  )}
                  {index === 2 && (
                    <div className="flex">
                      <div className="services-details-1">
                        <h1>
                          Transform Scanned Documents into Editable, Searchable
                          Text !
                        </h1>
                        <hr />
                        <p>
                          Our OCR service converts your scanned images, PDFs,
                          and photos into fully editable and searchable
                          documents with remarkable accuracy. Whether it’s
                          printed text, handwriting, or complex layouts, our OCR
                          engine intelligently recognizes characters and
                          preserves formatting.
                        </p>
                        <p>
                          It supports multiple languages and fonts, allowing you
                          to digitize diverse documents quickly. With features
                          like automatic image correction and noise reduction,
                          even low-quality scans are processed efficiently.
                        </p>
                        <p>
                          Once converted, you can easily edit, copy, or search
                          text within your documents — boosting productivity and
                          making information retrieval effortless.
                        </p>
                        <p>
                          Ideal for digitizing archives, invoices, contracts,
                          and more, our OCR tool transforms static images into
                          dynamic, usable content with minimal effort.
                        </p>
                        <button className="cta-button-wrapper fancy-button-alt">
                          <Link to="/plans">See Pricing & Plans</Link>
                        </button>
                      </div>
                      <div className="services-details-2 hidden sm:block">
                        <img src={featured3} alt="" />
                      </div>
                    </div>
                  )}
                  {index === 3 && (
                    <div className="flex">
                      <div className="services-details-1">
                        <h1>
                          Automatically Organize Your Files with Smart Sorting!
                        </h1>
                        <hr />
                        <p>
                          Our Smart Sorting service intelligently organizes your
                          documents into custom categories that you define.
                          Whether you're managing work files, academic
                          materials, or personal data, the system groups files
                          into relevant folders — like Engineering, Programming,
                          Accounting, and more — all based on your preferences.
                        </p>
                        <p>
                          Using advanced algorithms, it scans file names,
                          content, and metadata to sort with accuracy and
                          consistency. You can set the number of categories,
                          naming conventions, and folder structure, and Smart
                          Sorting does the heavy lifting for you.
                        </p>
                        <p>
                          Ideal for teams, students, and professionals who deal
                          with cluttered file systems, this feature helps save
                          time, reduce manual work, and ensure everything is
                          right where it should be — neatly sorted and ready to
                          use.
                        </p>
                        <button className="cta-button-wrapper fancy-button-alt">
                          <Link to="/plans">See Pricing & Plans</Link>
                        </button>
                      </div>

                      <div className="services-details-2 hidden sm:block">
                        <img src={featured4} alt="" />
                      </div>
                    </div>
                  )}
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  );
}
