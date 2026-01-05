import React from "react";
import mainBgImage from "../assets/mainBackground.png";
import featuredImg1 from "../assets/Featured1.png";
import featuredImg2 from "../assets/Featured2.png";
import featuredImg3 from "../assets/Featured3.png";
import featuredImg4 from "../assets/Featured4.png";
import featuredImg5 from "../assets/Featured5.png";
import backgroundMain from "../assets/backgroundMain.png";

export default function Featured() {
  return (
    <div>
      <div className="container featured_styles w-full mx-auto min-h-50vh">
        <div className="container mx-auto">
          <div className="grid grid-cols-4 gap-4 min-h-72">
            {/* Card 1 */}
            <div
              className="card"
              style={{
                backgroundImage: `url(${backgroundMain})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="align">
                <span className="yellow" />
                <span className="yellow" />
                <span className="yellow" />
              </div>
              <div>
                <img
                  src={featuredImg1}
                  alt="featuredImg1"
                  className="FeaturedImg"
                />
                <h1>Keyword Searching</h1>
              </div>
              <p className="p-2">
                Instantly locate critical information within your files with
                precision.
              </p>
            </div>

            {/* Card 2 */}
            <div
              className="card"
              style={{
                backgroundImage: `url(${backgroundMain})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="align">
                <span className="yellow" />
                <span className="yellow" />
                <span className="yellow" />
              </div>
              <div>
                <img
                  src={featuredImg4}
                  alt="featuredImg4"
                  className="FeaturedImg"
                />
                <h1>Ai Driven File Creation</h1>
              </div>{" "}
              <p>
                Generate high-quality, intelligent documents tailored to your
                needs within seconds using AI.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="card"
              style={{
                backgroundImage: `url(${backgroundMain})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="align">
                <span className="yellow" />
                <span className="yellow" />
                <span className="yellow" />
              </div>
              <div>
                <img
                  src={featuredImg3}
                  alt="featuredImg3"
                  className="FeaturedImg"
                />
                <h1>OCR (Optical Character Regognition)</h1>
              </div>{" "}
              <p>
                Convert scanned documents and images into fully editable,
                searchable text.
              </p>
            </div>

            {/* Card 4 */}
            <div
              className="card"
              style={{
                backgroundImage: `url(${backgroundMain})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="align">
                <span className="yellow" />
                <span className="yellow" />
                <span className="yellow" />
              </div>
              <div>
                <img
                  src={featuredImg5}
                  alt="featuredImg5"
                  className="FeaturedImg"
                />
                <h1>File Unlocking</h1>
              </div>{" "}
              <p>
                Effortlessly regain access to locked or restricted files—fast
                and hassle-free.
              </p>
            </div>
          </div>
          <div className="text-center mt-10 p-6">
            <h2 className="text-2xl font-semibold">Sounds interesting?</h2>
            <p className="mt-2 text-lg">
              Sign up for our closed beta now and be among the first to
              experience it!
            </p>
          
          </div>
        </div>
      </div>
    </div>
  );
}
