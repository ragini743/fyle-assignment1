import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import OurProject from "./OurProject";

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      image: "/images/image1.png",
      hoverImage: "/images/image1.png",
    },
    {
      image: "/images/image2.png",
      hoverImage: "/images/image2.png",
    },
    {
      image: "/images/image3.png",
      hoverImage: "/images/image3.png",
    },
  ];

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="block my-8 md:h-[90vh] ">
      <h1 className="text-black mb-4 font-bold text-xl md:text-3xl">Services provide for you</h1>
      <Swiper
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative h-[90%] "  
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={`${hoveredIndex === index ? slide.hoverImage : slide.image}?cache-bust=${Date.now()}`}
                alt="Slide"
                className={`w-full h-full object-cover ${isLoaded ? "block" : "hidden"}`} // use object-cover to maintain aspect ratio
                onLoad={handleImageLoad}
              />
              {!isLoaded && (
                <div className="bg-green-500 w-full h-full flex items-center justify-center">
                  Loading...
                </div>
              )}
              {hoveredIndex === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                  <button
                    className="px-4 py-2 bg-green-500 text-white rounded"
                    onClick={() => window.open("https://fylehq.com", "_blank")}
                  >
                    Read more
                  </button>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <OurProject />

    </div>
  );
};

export default WhatWeDo;
