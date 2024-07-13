import React from "react";

const Card = ({ item }) => {
  console.log("item", item);
  const { image, total, discription } = item;
  return (
    <div className="mb-12">
      <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 ease-in-out flex flex-col items-center">
        <div className="w-[20%] ">
          <img src={image} alt="" className="w-full object-cover" />
        </div>

        <div className="p-4 text-center ">
          <h3 className="text-2xl font-extrabold">{total}</h3>
          <p className="mt-2 text-gray-600">{discription}</p>
        </div>
        <div className="absolute inset-0 bg-gray-200 opacity-0 hover:opacity-50 transition duration-300 ease-in-out">

        </div>
      </div>
    </div>
  );
};

export default Card;
