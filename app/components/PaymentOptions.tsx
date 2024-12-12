import React from "react";

import BTC from "@/assets/options/bitcoin.png";
import USDT from "@/assets/options/lite.png";
import BNB from "@/assets/options/Binance.png";
import ETH from "@/assets/options/Ethereum.png";
import LTC from "@/assets/options/dodge.png";
import TES from "@/assets/options/tesla.png";

import Image from "next/image";

const PaymentOptions = () => {
  const paymentMethods = [
    { image: BTC, gradient: "from-blue-500 to-blue-700" },
    { image: USDT, gradient: "from-red-500 to-red-700" },
    { image: BNB, gradient: "from-yellow-500 to-yellow-700" },
    { image: ETH, gradient: "from-indigo-500 to-indigo-700" },
    { image: LTC, gradient: "from-pink-500 to-pink-700" },
  ];

  return (
    <section className="bg-[#111828]  py-16 text-white">
      <div className="max-w-7xl mx-auto px-6  text-white text-center">
        <h2 className="text-3xl font-bold mb-2 ">Payment Options</h2>
        <h2 className="text-lg  mb-6 ">
          Select from a variety of payment options to complete your payment and
          choose the method that best suits your needs
        </h2>

        <div className="flex justify-center items-center gap-6 flex-wrap mb-10">
          {paymentMethods.map((method, index) => (
            <div
              key={index}
              className="relative bg-[#16192b] rounded-lg shadow-lg flex items-center justify-center p-4 w-48 h-24"
            >
              {/* Gradient Border */}
              <div
                className={`absolute bottom-0 w-full h-1 rounded-b-lg bg-gradient-to-r ${method.gradient}`}
              ></div>
              {/* Icon */}
              <Image
                src={method.image}
                alt={`Payment method ${index}`}
                width={40}
                height={40}
                className="z-10"
              />
            </div>
          ))}
        </div>
        <button className="px-6 py-2 bg-[#946CFF] text-white rounded-lg shadow ">
          Download Certificate Of Incorporation
        </button>
      </div>
    </section>
  );
};

export default PaymentOptions;
