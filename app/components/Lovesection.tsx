import React from "react";
import Logo from "./Logo";

const Lovesection = () => {
  return (
    <div className="bg-black text-white pt-10 pb-8">
      <div className="mb-16 lg:mb-32">
        <h1
          className=" text-[50px] lg:text-[100px]   font-poppins text-white font-bold text-center "
          style={{ lineHeight: "1.1" }}
        >
          Love in every
          <br />
          #Trading
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Item 1 */}
        <div className="text-center font-poppins">
          <div className="text-4xl font-bold mb-2 lg:mb-6 text-[56px]">
            50M+
          </div>
          <p className=" text-[12px] lg:text-[20px]">
            Traders and investors use our platform.
          </p>
        </div>

        {/* Item 2 */}
        <div className="text-center font-poppins">
          <div className="text-4xl font-bold mb-2  lg:mb-6 text-[56px] ">
            #1
          </div>
          <p className="text-[12px]  lg:text-[20px]">
            <span className="text-[#5580f6] font-normal">Top website</span> in
            the world when it comes to all things investing.
          </p>
        </div>

        {/* Item 3 */}
        <div className="text-center font-poppins">
          <div className="text-4xl font-bold mb-2  lg:mb-6 text-[56px]">
            4.9
          </div>
          <p className=" text-[12px]  lg:text-[20px]">
            Rating from 1M+ reviews. No other finance apps are more loved.
          </p>
        </div>

        {/* Item 4 */}
        <div className="text-center font-poppins">
          <div className="text-4xl font-bold mb-2  lg:mb-6  text-[56px]">
            10M+
          </div>
          <p className="text-[12px]  lg:text-[20px]">
            Custom scripts and ideas shared by our users.
          </p>
        </div>
      </div>
      <Logo />
    </div>
  );
};

export default Lovesection;
