import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

const Banner = () => {
  const images = [
    {
      src: "/images/banner1.png",
      alt: "Ảnh 1",
    },
    {
      src: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2940&q=80",
      alt: "Ảnh 2",
    },
    {
      src: "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=2762&q=80",
      alt: "Ảnh 3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {/* Layer các ảnh */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img.src}
          alt={img.alt}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}

      {/* Nút chuyển ảnh */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800/60 hover:bg-gray-800 text-white p-2 rounded-full z-20"
        onClick={() =>
          setCurrentIndex(
            currentIndex === 0 ? images.length - 1 : currentIndex - 1
          )
        }
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800/60 hover:bg-gray-800 text-white p-2 rounded-full z-20"
        onClick={() =>
          setCurrentIndex(
            currentIndex === images.length - 1 ? 0 : currentIndex + 1
          )
        }
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Chấm tròn điều hướng */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            } hover:scale-110 transition-transform`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
