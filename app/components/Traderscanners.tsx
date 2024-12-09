import React from "react";
import Image from "next/image";
import Trader from "@/assets/avaoptions.png";

const TradeScanners = () => {
  return (
    <section className="bg-[#101223] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between gap-8 items-center">
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src={Trader}
            alt="Trade Scanners"
            className="rounded-lg shadow-lg mt-4"
          />
        </div>

        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Trade Scanners</h2>
          <p className="text-gray-400 mb-6 max-w-[500px] mx-auto lg:mx-0">
            AscendTradex offers its members cutting-edge scanning software, the
            most advanced in its class.
          </p>
          <p className="text-gray-400 mb-6 max-w-[500px] mx-auto lg:mx-0">
            Each of our software solutions is top-rated for Day Traders, Swing
            Trading, and Option Traders alike. Elevate your trading experience
            and witness the ease with which investing unfolds using these
            powerful tools.
          </p>
          <div className="flex justify-center lg:justify-start">
            <button className="px-6 py-2 bg-purple-700 font-poppins text-white rounded-lg shadow hover:bg-blue-600">
              Read More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeScanners;
