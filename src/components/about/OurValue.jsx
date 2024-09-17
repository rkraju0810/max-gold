"use client";
import React from "react";

// Define the card data as JSON
const cardData = [
  {
    title: "TRUST",
    description: "Backed by the most trusted people in the industry & in partnership with RBI approved institutions.",
    imageSrc: "/ourValueIcons/diamond.png",
    backgroundColor: "bg-gray-200",
    roundedClass: "rounded-tr-[42px] rounded-b-xl"
  },
  {
    title: "CONVENIENCE",
    description: "Our services are tech driven & designed to make your experience a tension-free one.",
    imageSrc: "/ourValueIcons/gold-key.png",
    backgroundColor: "bg-yellow-200",
    roundedClass: "rounded-tl-[42px] rounded-b-xl"
  },
  {
    title: "TRANSPARENCY",
    description: "What you see is what you get. Quite literally, no hidden charges and fees!",
    imageSrc: "/ourValueIcons/pay.png",
    backgroundColor: "bg-yellow-200",
    roundedClass: "rounded-br-[42px] rounded-t-xl"
  },
  {
    title: "SECURITY",
    description: "ISO certified, all your details and loan information is completely confidential.",
    imageSrc: "/ourValueIcons/shield.png",
    backgroundColor: "bg-gray-200",
    roundedClass: "rounded-bl-[42px] rounded-t-xl"
  }
];

const OurValue = () => {
  return (
    <section className="px-4 py-8 md:py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <p className="text-lg sm:text-xl md:text-2xl mb-10 md:mb-14 text-black text-center font-medium mx-auto md:mx-20 lg:mx-60">
          At <span className="font-bold">Max Gold</span>, our values are the bedrock of our business, shaping every
          aspect of our operations. Your search for a gold buyer near me comes to an end with us. We pride ourselves
          on these fundamental principles:
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 md:px-10">
          {/* Left side - Our Value Text */}
          <div className="flex flex-col justify-start items-center mb-0 lg:mb-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-5">
              <span className="text-red-500">Our</span> Value
            </h2>
            <img src="/ourValueIcons/arrows.png" alt="Arrows" className=" lg:block hidden" /> 
          </div>

          {/* Right side - Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8 lg:gap-10">
            {/* Map through the card data */}
            {cardData.map((card, index) => (
              <div key={index} className={`${card.backgroundColor} p-6 md:p-8 rounded-lg ${card.roundedClass} flex flex-col text-left`}>
                <img src={card.imageSrc} alt={card.title} className="mb-4 w-12 h-12" />
                <h3 className="text-lg md:text-xl font-bold mb-2 text-black">{card.title}</h3>
                <p className="text-gray-700 text-sm md:text-base">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValue;