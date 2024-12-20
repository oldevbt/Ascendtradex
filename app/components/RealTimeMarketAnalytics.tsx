import React from "react";
import { BiCheckCircle } from "react-icons/bi";

const GlobalMarkets = () => {
  return (
    <section className=" py-12 px-6  h-[400px] lg:px-16 text-white  ">
      <div className="max-w-5xl mx-auto">
        <div
          className="rounded-lg p-8 shadow-lg"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, #c4a8f4, #9a77e6, #753bd3, #562bb4, #3a1f95)",
            height: "500px",
          }}
        >
          <h2 className="text-3xl font-bold mb-6 text-white">
            Global Markets at Your Fingertips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-lg">
            {/* Items */}
            <div className="flex items-center space-x-4">
              <span className="text-white text-xl">
                <BiCheckCircle />
              </span>
              <div>
                <p className="font-semibold text-white">Forex CFDs</p>
                <p className="text-white text-sm">61 products</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white text-xl">
                <BiCheckCircle />
              </span>
              <div>
                <p className="font-semibold text-white">Index CFDs</p>
                <p className="text-white text-sm">25 products</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white text-xl">
                <BiCheckCircle />
              </span>
              <div>
                <p className="font-semibold text-white">Commodities CFDs</p>
                <p className="text-white text-sm">24 products</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-white text-xl">
                <BiCheckCircle />
              </span>
              <div>
                <p className="font-semibold text-white">Stocks CFDs</p>
                <p className="text-white text-sm">2100+ products</p>
              </div>
            </div>
            <div className=" hidden lg:flex items-center space-x-4">
              <span className="text-white text-xl">
                <BiCheckCircle />
              </span>
              <div>
                <p className="font-semibold text-white">Bond CFDs</p>
                <p className="text-white text-sm">9 products</p>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <span className="text-white text-xl">
                <BiCheckCircle />
              </span>
              <div>
                <p className="font-semibold text-white">Cryptocurrency CFDs</p>
                <p className="text-white text-sm">21 products</p>
              </div>
            </div>
          </div>
          {/* Button */}
          <div className="text-center mt-8">
            <button className="bg-black text-white px-6 py-2 rounded-lg shadow hover:bg-gray-200">
              Range of Markets
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalMarkets;
