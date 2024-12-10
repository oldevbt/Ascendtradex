import React from "react";
import Image from "next/image";
import phoneImage from "@/assets/phones/funded-trading.png"; // Replace with your image path

const Sectrions = () => {
  return (
    <div className="bg-[#0A0E25] text-white relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-16 lg:py-24">
        {/* Left Section */}
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-3xl sm:text-4xl lg:text-7xl  lg:w-[500px] font-bold leading-tight">
            MAKE PROFIT <br />
            AS <span className="text-[#946CFF]">EXPERTS</span> TRADE
          </h1>
          <p className="text-sm lg:text-lg sm:text-base text-gray-300 max-w-lg mx-auto lg:mx-0">
            Simply select the trader you wish to Autocopy, deposit your desired
            funds on the platform, and once approved, Autocopy begins. Instantly
            mirror the Lead Trader’s positions in real-time.
          </p>
          <button className="bg-[#946CFF] hover:bg-[#7A5FE3] text-white text-sm sm:text-base py-3 px-6 rounded-lg font-medium transition">
            Create an account — It’s free
          </button>
        </div>

        {/* Right Section */}
        <div className="mt-10 lg:mt-0">
          <Image
            src={phoneImage}
            alt="Phone displaying trading app"
            className="w-full max-w-md mx-auto lg:mx-0"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Sectrions;
