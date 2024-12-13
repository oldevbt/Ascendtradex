import React from "react";

import Imag from "@/assets/cyrptoCurrencyHeader.png";
import Imag2 from "@/assets/orexHeader.png";
import Imag3 from "@/assets/sharesHeader.png";

import Image from "next/image";

const InvestmentComponent = () => {
  return (
    <div className="bg-[#111828]  text-white py-16 px-6 md:px-20">
      {/* Section Container */}
      <div className="space-y-16">
        {/* Section 1: Invest in Shares */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Invest in <span className="text-[#946CFF]">Shares</span>
            </h1>
            <p className="text-gray-300 text-[15px] font-light leading-relaxed mb-6">
              Buy and Sell shares on over 20,000 equities of the largest
              multinational companies listed on the top stock exchanges in the
              world in market capitalization with margins as low as 5%.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg">
                <p className=" text-[16px] lg:text-xl  font-bold text-[#946CFF]">
                  20,000+
                </p>
                <p className="text-gray-400 text-[12px] lg:text-sm">Shares</p>
              </div>
              <div className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg">
                <p className="text-[16px] lg:text-xl font-bold text-[#946CFF]">
                  20:1
                </p>
                <p className="text-gray-400 text-[12px] lg:text-sm">
                  Level of Leverage
                </p>
              </div>
              <div className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg">
                <p className="text-[16px] lg:text-xl  font-bold text-[#946CFF]">
                  0%
                </p>
                <p className="text-gray-400  text-[12px] lg:text-sm">
                  Commission
                </p>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex justify-center">
            <Image src={Imag3} alt="Shares" className="rounded-lg shadow-lg" />
          </div>
        </div>

        {/* Section 2: Invest in Forex */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Image */}
          <div className="flex justify-center order-2 md:order-1">
            <Image src={Imag} alt="Forex" className="rounded-lg shadow-lg" />
          </div>
          {/* Right Content */}
          <div className="order-1 md:order-2">
            <h1 className="text-4xl font-bold mb-4">
              Invest in <span className="text-[#946CFF]">Forex</span>
            </h1>
            <p className="text-gray-300 text-[15px] font-light leading-relaxed mb-6">
              Trade over 55 major, cross, and exotic Forex pairs, and benefit
              from the tightest spreads in the industry.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg">
                <p className="text-xl font-bold text-[#946CFF]">Up to 500:1</p>
                <p className="text-gray-400 text-sm">
                  Highest levels of leverage
                </p>
              </div>
              <div className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg">
                <p className="text-xl font-bold text-[#946CFF]">0.0*</p>
                <p className="text-gray-400 text-sm">
                  Tightest spreads in the industry
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3: Invest in Shares */}
        <div className="grid md:grid-cols-2 items-center gap-12">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl font-bold mb-4">
              Invest in <span className="text-[#946CFF]">Shares</span>
            </h1>
            <p className="text-gray-300 text-[15px] font-light leading-relaxed mb-6">
              Buy and Sell shares on over 20,000 equities of the largest
              multinational companies listed on the top stock exchanges in the
              world in market capitalization with margins as low as 5%.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg">
                <p className=" text-[16px] lg:text-xl  font-bold text-[#946CFF]">
                  20,000+
                </p>
                <p className="text-gray-400 text-[12px] lg:text-sm">Shares</p>
              </div>
              <div className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg">
                <p className="text-[16px] lg:text-xl font-bold text-[#946CFF]">
                  20:1
                </p>
                <p className="text-gray-400 text-[12px] lg:text-sm">
                  Level of Leverage
                </p>
              </div>
              <div className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg">
                <p className="text-[16px] lg:text-xl  font-bold text-[#946CFF]">
                  0%
                </p>
                <p className="text-gray-400  text-[12px] lg:text-sm">
                  Commission
                </p>
              </div>
            </div>
          </div>
          {/* Right Image */}
          <div className="flex justify-center">
            <Image src={Imag2} alt="Shares" className="rounded-lg shadow-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentComponent;
