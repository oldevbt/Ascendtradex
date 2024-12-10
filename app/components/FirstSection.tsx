import React from "react";
import img1 from "@/assets/first/best-price.png";
import img2 from "@/assets/first/customer-service.png";
import img3 from "@/assets/first/heavily-regulated.png";
import img4 from "@/assets/first/img-leverage-up.png";
import Image from "next/image";
import Link from "next/link";

const FirstSection = () => {
  return (
    <div className="bg-[#0f1123]  text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-8 sm:py-16 mt-6 sm:mt-10 px-4 sm:px-6">
        <h2 className="text-purple-400 font-syne text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
          Discover the advantages of choosing AscendTradex
        </h2>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-poppins mb-4 sm:mb-6">
          The world's leading online financial derivatives broker
        </h1>
        <p className="text-gray-400 text-base sm:text-lg font-poppins max-w-lg sm:max-w-3xl mx-auto mb-8 sm:mb-12">
          With over 1 million satisfied clients, our track record speaks for
          itself. Benefit from our extensive experience in delivering profitable
          trading experiences, offering bespoke trading accounts, instant
          execution, state-of-the-art platforms, and competitive pricing and
          liquidity.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 lg:px-16 pb-16">
        {/* Feature 1 */}
        <div className="bg-gray-800  font-poppin border-b border-red-300 border-3 rounded-lg p-6 text-center">
          <Image src={img3} alt="" className="w-20 h-20" />
          <h3 className="text-lg  font-poppins font-bold">
            Heavily Regulated By 14 Financial Regulators
          </h3>
          <p className="text-gray-400 mt-4">
            Subsidiaries regulated by ASIC, AUSTRAC, BAFIN, CIMA, ESCA, CySEC,
            FSC, FMA, MAS, TFG and VFSC.
          </p>
        </div>
        {/* Feature 2 */}
        <div className="bg-gray-800  font-poppins  border-b border-blue-600 border-3 rounded-lg p-6 text-center">
          <Image src={img1} alt="" className="w-14 h-14" />
          <h3 className="text-lg font-bold">Daily Turnover US$4.3Million</h3>
          <p className="text-gray-400 mt-4">
            Record Breaking Financial performance in 2022.
          </p>
        </div>
        {/* Feature 3 */}
        <div className="bg-gray-800 font-poppins border-b border-green-400 border-3  rounded-lg p-6 text-center">
          <Image src={img4} alt="" className="w-14 h-14" />
          <h3 className="text-lg font-bold">Leverage Up To 500:1</h3>
          <p className="text-gray-400 mt-4">
            We provide one of the highest levels of leverage in the market,
            helping traders to multiply their potential profits.
          </p>
        </div>
        {/* Feature 4 */}
        <div className="bg-gray-800  border-b border-orange-600  order-3  rounded-lg p-6 text-center">
          <Image src={img2} alt="" className="w-14 h-14" />
          <h3 className="text-lg font-bold">Customer Service</h3>
          <p className="text-gray-400 mt-4">
            Enjoy assistance from our 24/7/365 customer service desk.
          </p>
        </div>
      </section>

      <section className=" text-white py-16 px-8 lg:px-20 flex flex-col lg:flex-row items-center justify-around gap-8">
        {/* Left Side */}
        <div className="relative bg-transparent   border-[0.5px] border-purple-500 rounded-lg p-8 flex flex-col items-center text-center">
          <div className="absolute top-0 left-4 w-full font-poppins rotate-12 px-10 h-full rounded-xl border-2 border-purple-500 transform scale-110 -translate-x-2 -translate-y-2"></div>
          <h2 className="text-xl uppercase font-poppins text-purple-400 px-24">
            Up to
          </h2>
          <h1 className="text-7xl font-bold font-poppins text-purple-500">
            20%
          </h1>
          <p className="text-xl font-medium font-poppins mt-2">Deposit Bonus</p>
        </div>

        {/* Right Side */}
        <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
          <h2 className="text-xl lg:text-5xl font-poppins font-medium">
            Receive up to{" "}
            <span className="text-purple-500  font-bold">$40,000</span>
          </h2>
          <p className="text-gray-400 font-poppins text-lg mt-2">
            in tradable and withdrawable bonuses
          </p>
          <p className="text-gray-400 text-sm mt-1 underline">
            *Terms & Conditions Apply
          </p>

          <Link
            href="/SignUp"
            className=" border border-purple-300 text-white py-3 px-6 rounded-lg mt-6 font-semibold shadow-lg transition duration-200"
          >
            Start Trading
          </Link>
        </div>
      </section>
    </div>
  );
};

export default FirstSection;
