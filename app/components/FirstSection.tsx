import React from "react";
import img1 from "@/assets/first/best-price.png";
import img2 from "@/assets/first/customer-service.png";
import img3 from "@/assets/first/heavily-regulated.png";
import img4 from "@/assets/first/img-leverage-up.png";
import Image from "next/image";
import Link from "next/link";

const FirstSection = () => {
  return (
    <div className=" text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-8 sm:py-16 mt-6 sm:mt-10 px-4 sm:px-6">
        <h2 className="text-[#946CFF] text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
          Discover the advantages of choosing AscendTradex
        </h2>
        <h1 className="text-3xl text-[#D1D4DC] sm:text-4xl lg:text-5xl font-bold  mb-4 sm:mb-6">
          The world's leading online financial derivatives broker
        </h1>
        <p className="text-white text-[17px] font-light max-w-lg sm:max-w-3xl mx-auto mb-8 sm:mb-12">
          With over 1 million satisfied clients, our track record speaks for
          itself. Benefit from our extensive experience in delivering profitable
          trading experiences, offering bespoke trading accounts, instant
          execution, state-of-the-art platforms, and competitive pricing and
          liquidity.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16 pb-16">
        {/* Feature 1 */}
        <div className="bg-[#101630] custom-shadow border-[#467BFF] border-b-[2px] rounded-xl p-6 flex flex-col justify-center">
          <div className="text-left">
            <Image src={img3} alt="" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-bold max-w-[200px]">
              Heavily Regulated By 14 Financial Regulators
            </h3>
            <p className="text-white text-[15px] font-light mt-1">
              Subsidiaries regulated by ASIC, AUSTRAC, BAFIN, CIMA, ESCA, CySEC,
              FSC, FMA, MAS, TFG, and VFSC.
            </p>
          </div>
        </div>
        {/* Feature 2 */}
        <div className="bg-[#101630] custom-shadow border-[#22CB7F] border-b-[2px] rounded-lg p-6 flex flex-col justify-center">
          <div className="text-left">
            <Image src={img1} alt="" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-bold">Daily Turnover US$4.3Million</h3>
            <p className="text-white text-[15px] font-light mt-1">
              Record Breaking Financial performance in 2022.
            </p>
          </div>
        </div>
        {/* Feature 3 */}
        <div className="bg-[#101630] custom-shadow border-[#F49B47] border-b-[2px] rounded-lg p-6 flex flex-col justify-center">
          <div className="text-left">
            <Image src={img4} alt="" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-bold">Leverage Up To 500:1</h3>
            <p className="text-white text-[15px] font-light mt-1">
              We provide one of the highest levels of leverage in the market,
              helping traders to multiply their potential profits.
            </p>
          </div>
        </div>
        {/* Feature 4 */}
        <div className="bg-[#101630] custom-shadow border-[#CEFF44] border-b-[2px] rounded-lg p-6 flex flex-col justify-center">
          <div className="text-left">
            <Image src={img2} alt="" className="w-10 h-10 mb-4" />
            <h3 className="text-lg font-bold">Customer Service</h3>
            <p className="text-white text-[15px] font-light mt-1">
              Enjoy assistance from our 24/7/365 customer service desk.
            </p>
          </div>
        </div>
      </section>
      <section className=" text-white py-16 px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-around gap-8">
        {/* Left Side */}
        <div className="relative bg-transparent w-ful border-[0.5px] border-[#946CFF] rounded-lg p-8 flex flex-col items-center text-center">
          <div className="absolute top-0 left-4 w-full rotate-12 px-10 h-full rounded-xl border-2 border-[#946CFF] transform scale-110 -translate-x-2 -translate-y-2"></div>
          <h2 className="text-xl uppercase text-[#946CFF] px-24">Up to</h2>
          <h1 className="text-7xl font-bold text-[#946CFF]">20%</h1>
          <p className="text-xl font-medium mt-2">Deposit Bonus</p>
        </div>

        {/* Right Side */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-xl lg:text-5xl font-medium">
            Receive up to{" "}
            <span className="text-[#946CFF] font-bold">$40,000</span>
          </h2>
          <p className="text-gray-400 text-lg mt-2">
            in tradable and withdrawable bonuses
          </p>
          <p className="text-gray-400 text-sm mt-1 underline">
            *Terms & Conditions Apply
          </p>

          <Link
            href="/SignUp"
            className="border bg-[#946CFF] text-white py-3 px-6 rounded-lg mt-6 font-semibold shadow-lg transition duration-200"
          >
            Start Trading
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;
