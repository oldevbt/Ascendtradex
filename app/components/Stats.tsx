import React from "react";
import icon1 from "@/assets/icon-1.svg";
import icon2 from "@/assets/icon-2.svg";
import icon3 from "@/assets/icon-3.svg";
import Image from "next/image";

const Features = () => {
  const features = [
    {
      imgSrc: icon1, // Replace with your image path
      title: "Copy",
      description: "traders who trade Real Stocks, Forex, CFDs & more",
      color: "text-[#FF497C]",
    },
    {
      imgSrc: icon2, // Replace with your image path
      title: "Competitive",
      description: "trading fees. Completely free account",
      color: "text-[#946CFF]",
    },
    {
      imgSrc: icon3, // Replace with your image path
      title: "Trust",
      description: "a regulated company",
      color: "text-[#47E3CA]",
    },
  ];

  return (
    <div className=" text-white py-8">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-12 space-y-8 lg:space-y-0">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1D36]">
              <Image
                src={feature.imgSrc}
                alt={feature.title}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <p className="text-[18.75px] text-[#D1D4DC] max-w-[300px]">
                <span className={`text-lg font-semibold ${feature.color}`}>
                  {feature.title}
                </span>
                &nbsp; {/* Adds a space */}
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
