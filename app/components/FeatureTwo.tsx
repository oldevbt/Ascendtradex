import React from "react";
import Image from "next/image";

import Imag from "@/assets/cyrptoCurrencyHeader.png";

const FeatureTwo = () => {
  return (
    <section className="section flex items-center justify-center min-h-screen">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-y-8 lg:flex-row lg:gap-x-8 lg:items-center">
          {/* Text Section */}
          <div
            className="order-1 lg:order-1 flex-[2] max-w-[600px] text-center lg:text-left"
            data-aos="fade-right"
            data-aos-offset="400"
          >
            <h2 className="section-title">
              Why you should choose AscendTradex
            </h2>
            <p className="section-subtitle text-lg">
              Experience the next-generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button
              className="text-white font-medium py-3 px-6 rounded-lg shadow transition hover:scale-105"
              style={{
                background:
                  "linear-gradient(to bottom, #c4a8f4, #9a77e6, #753bd3, #562bb4, #3a1f95)",
              }}
            >
              Learn More
            </button>
          </div>

          {/* Image Section */}
          <div
            className="order-2 lg:order-2 flex-[1] flex justify-center items-center p-6 relative"
            style={{
              background:
                "radial-gradient(circle, rgba(148, 99, 233, 0.4) 0%, rgba(255, 255, 255, 0) 80%)", // Soft radial gradient
              boxShadow: "0 4px 20px rgba(148, 99, 233, 0.5)", // Soft glowing effect
              padding: "10px",
            }}
            data-aos="fade-left"
            data-aos-offset="400"
          >
            <Image
              src={Imag}
              alt="Feature Image"
              className="max-w-full h-auto"
              style={{ borderRadius: "8px" }} // This adds rounded corners to the image only
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureTwo;
