import React from "react";

import Imag from "@/assets/orexHeader.png";
import img2 from "@/assets/orexHeader.png";
import Image from "next/image";

const Why = () => {
  return (
    <section className="section">
      <div className="container max-auto">
        <div className="flex flex-col items-center gap-x-8 lg:flex-row">
          <div
            className="order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            {/* image */}
            <Image src={Imag} alt="" />
          </div>
          <div
            className="order-1 lg:order-2 max-w-[480px]"
            data-aos="fade-left"
            data-aos-offset="400"
          >
            {/* text */}
            <h2 className="section-title">
              Why you should choose AscendTradex
            </h2>
            <p className="section-subtitle  text-lg">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <p className="section-subtitle  text-lg">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button
              className="text-white font-medium py-3 px-6 rounded-lg shadow transition hover:scale-105"
              style={{
                background:
                  "linear-gradient(to bottom, #c4a8f4, #9a77e6, #753bd3, #562bb4, #3a1f95)",
              }}
            >
              learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
