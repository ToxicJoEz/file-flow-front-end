import React, { useEffect, useState } from "react";
import NewsImage from "../assets/newsImage.png";
import NewsImage2 from "../assets/newsImage2.png";
import NewsImage3 from "../assets/newsImage3.png";

export default function NewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  function goToSlide(idx) {
    setActiveIndex(idx);
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % 3);
    }, 10000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-full p-6 w-full">
      {/* 1) Carousel viewport: fixed height, hides overflow */}
      <div className="relative overflow-hidden h-full">
        {/* 2) Track: a flex container that slides left/right */}
        <div
          className="flex h-full transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {/* 3) Slide 1 */}
          <div className="flex-shrink-0 w-full px-4">
            <h2 className="text-lg font-semibold mb-2">Headline One</h2>
            <img
              src={NewsImage}
              alt="News illustration"
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <p className="text-sm text-gray-600">
              Here is the first news snippet. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
          </div>

          {/* 3) Slide 2 */}
          <div className="flex-shrink-0 w-full px-4">
            <h2 className="text-lg font-semibold mb-2">Headline Two</h2>
            <img
              src={NewsImage2}
              alt="News illustration"
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <p className="text-sm text-gray-600">
              This is the second news snippet. Vivamus luctus urna sed urna
              ultricies ac tempor dui sagittis.
            </p>
          </div>

          {/* 3) Slide 3 */}
          <div className="flex-shrink-0 w-full px-4">
            <h2 className="text-lg font-semibold mb-2">Headline Three</h2>
            <img
              src={NewsImage3}
              alt="News illustration"
              className="w-full h-32 object-cover mb-2 rounded"
            />
            <p className="text-sm text-gray-600">
              And the third snippet goes here. In condimentum facilisis porta.
              Sed nec diam eu diam mattis viverra.
            </p>
          </div>
        </div>

        {/* 4) Dot navigation: absolute bottom-center */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {[0, 1, 2].map((idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={
                (activeIndex === idx ? "bg-gray-800" : "bg-gray-400") +
                " h-2 w-2 rounded-full"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
