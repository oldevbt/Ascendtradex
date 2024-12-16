import React from "react";
import Container from "./Container";
import Ima from "@/assets/image8.png";
import Image from "next/image";

const CustomerReview = () => {
  return (
    <Container>
      <div className="text-white flex flex-col items-center bg-[#111828] justify-center text-center py-10 px-4">
        <div>
          <h2 className="text-center text-2xl md:text-4xl font-bold mb-6 text-[#946CFF]">
            What Our Customers Say
          </h2>
        </div>

        {/* Updated flex and responsive classes */}
        <div className="flex flex-wrap gap-4 justify-center sm:px-4">
          <div className="w-full sm:w-[90%] md:w-[300px] bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-left font-light text-[#D3D3D3]">
              "AscendTradex has transformed the way I trade. The platform is
              easy to use, and the results speak for themselves!"
            </p>
            <div className="mt-4 flex items-center text-left">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
                <Image src={Ima} alt="" />
              </div>
              <div className="ml-3 text-left">
                <p className="font-semibold">Caroline Reece</p>
                <p className="text-sm text-gray-400">New York, USA</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[90%] md:w-[300px] bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-left font-light text-[#D3D3D3]">
              "Amazing experience! The support team is fantastic, and the tools
              have significantly improved my trading."
            </p>
            <div className="mt-8 flex items-center text-left">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
                <Image src={Ima} alt="" />
              </div>
              <div className="ml-3 text-left">
                <p className="font-semibold">Anthony Charles</p>
                <p className="text-sm text-gray-400">London, UK</p>
              </div>
            </div>
          </div>

          <div className="w-full sm:w-[90%] md:w-[300px] bg-gray-800 p-4 rounded-lg shadow-md">
            <p className="text-sm md:text-base text-left font-light text-[#D3D3D3]">
              "I highly recommend AscendTradex to anyone looking to get started
              with trading. It’s intuitive and reliable."
            </p>
            <div className="mt-8 flex items-center text-left">
              <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white text-lg font-bold">
                <Image src={Ima} alt="" />
              </div>
              <div className="ml-3 text-left">
                <p className="font-semibold">Emily Clark</p>
                <p className="text-sm text-gray-400">Sydney, Australia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CustomerReview;
