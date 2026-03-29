import React from "react";
import featuredImg1 from "../assets/Featured1.png";
import featuredImg3 from "../assets/Featured3.png";
import featuredImg4 from "../assets/Featured4.png";
import featuredImg5 from "../assets/Featured5.png";
import backgroundMain from "../assets/backgroundMain.png";

export default function Featured() {
  const features = [
    {
      title: "Keyword Searching",
      desc: "Instantly locate critical information within your files with precision.",
      img: featuredImg1,
    },
    {
      title: "AI Driven Creation",
      desc: "Generate high-quality documents tailored to your needs within seconds using AI.",
      img: featuredImg4,
    },
    {
      title: "OCR Technology",
      desc: "Convert scanned documents and images into fully editable, searchable text.",
      img: featuredImg3,
    },
    {
      title: "File Unlocking",
      desc: "Effortlessly regain access to locked or restricted files—fast and hassle-free.",
      img: featuredImg5,
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 shadow-lg border border-white/10"
              style={{
                backgroundImage: `linear-gradient(to bottom, #47297b, #5d2689), url(${backgroundMain})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {/* Card Header Decoration */}
              <div className="flex gap-1.5 mb-6">
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-70" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-40" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 opacity-20" />
              </div>

              <div className="mb-4 relative">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={f.img}
                    alt={f.title}
                    className="w-10 h-10 object-contain FeaturedImg"
                  />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                  {f.title}
                </h3>
              </div>

              <p className="text-white text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer CTA Section */}
        <div className="text-center mt-16 pt-10 border-t border-white/10">
          <h2 className="text-2xl font-semibold">
            Sounds interesting?
          </h2>
          <p className="mt-2 text-lg opacity-90">
            Sign up for our closed beta now and be among the first to
            experience it!
          </p>
        </div>
      </div>
    </section>
  );
}