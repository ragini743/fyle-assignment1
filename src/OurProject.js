import React, { useState } from "react";

const OurProject = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      image: "/images/image1.png",
      title: "Genderless Kei-Japan's Hot",
      description: "set to launch on the manufature's new A330neo aircrafft in 2017 .it's offering lots offering.",
    },
    {
      image: "/images/image2.png",
      title: "Better Strategy & Quality ",
      description: "set to launch on the manufature's new A330neo aircrafft in 2017 .it's offering lots offering.",
    },
    {
      image: "/images/image3.png",
      title: "Genderless Kei-Japan's Hot",
      description: "set to launch on the manufature's new A330neo aircrafft in 2017 .it's offering lots offering.",
    },
  ];

  return (
    <div className=" mt-8">
        <div className="text-center">
        <h1 className="text-red-500">OUR PROJECT</h1>
        <p className="font-bold text-2xl">WHY WE ARE BEST</p>
        </div>
        <div className="md:flex mt-8 mx-[10%] ">
        <div className="md:w-[70%] flex-1 mr-8">
        <img
          src={projects[currentIndex].image}
          alt="Project"
          className="w-full h-auto"
        />
      </div>
      <div className="md:w-[30%]  px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`mb-4 p-4 border ${
              currentIndex === index ? "hover:bg-red-600 hover:text-white" : "border-gray-300"
            } cursor-pointer`}
            onClick={() => setCurrentIndex(index)}
          >
            <h3 className="text-xl font-bold">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
        </div>
   
    </div>
  );
};

export default OurProject;
