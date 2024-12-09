import React from "react";
import fund from "@/assets/options/wee.png";
import Image from "next/image";
import { CgArrowRight } from "react-icons/cg";

const FundYourAccount = () => {
  return (
    <section className="bg-[#0B0E21] py-16 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between gap-8">
        {/* Left Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold">
            <span className="text-purple-500">Fund</span> Your Account
          </h2>
          <p className="text-gray-300 mt-4">
            AscendTradex offers a wide range of instant, simple, and secure
            funding methods to suit your needs.
          </p>
          <button className="mt-8 px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg shadow-lg text-white text-lg font-semibold flex items-center justify-center gap-2">
            Start Trading Now
            <span className="material-icons">
              <CgArrowRight />
            </span>
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image src={fund} alt="" className="w-[250px] h-[250px]" />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#1A1D34"
            fillOpacity="1"
            d="M0,256L48,213.3C96,171,192,85,288,80C384,75,480,149,576,192C672,235,768,245,864,245.3C960,245,1056,235,1152,213.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default FundYourAccount;
