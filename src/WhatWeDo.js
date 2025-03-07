import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import OurProject from "./OurProject";
import Card from "./Card";

const WhatWeDo = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [cardItem, setCardItem] = useState([]);

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
  const cards = [
    {
      image: "/images/heart.png",
      total: "199 +",
      discription: "Statisfied Customers",
    },
    {
      image: "/images/watch.png",
      total: "1591 +",
      discription: " Days Of Operation",
    },
    {
      image: "/images/completed.png",
      total: "283 +",
      discription: "COmplete Project",
    },
    {
      image: "/images/trophy.png",
      total: "75 +",
      discription: "Win Awards",
    },
  ];
  useEffect(() => setCardItem(cards), []);

  const handleImageLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className="block my-8 md:h-[90vh] ">
      <h1 className="text-black mb-4 font-bold text-xl md:text-3xl">
        Services provide for you
      </h1>
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
                src={`${
                  hoveredIndex === index ? slide.hoverImage : slide.image
                }?cache-bust=${Date.now()}`}
                alt="Slide"
                className={`w-full h-full object-cover ${
                  isLoaded ? "block" : "hidden"
                }`} // use object-cover to maintain aspect ratio
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
      <div className="text-center my-10">
        <h1 className="text-red-500 mb-4">EXPERT GROWTS</h1>
        <p className="text-3xl font-bold">OUR COMPANY GROWTH </p>
       </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 my-10 gap-8 md:w-[60%] mx-auto ">
        {cardItem.map((item) => (
          <Card item={item} />
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
