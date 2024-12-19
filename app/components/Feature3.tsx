import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import Imag from "@/assets/cyrptoCurrencyHeader.png";
import Imag2 from "@/assets/orexHeader.png";
import Imag3 from "@/assets/sharesHeader.png";

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

const InvestmentComponent = () => {
  return (
    <div className="bg-[#111828] text-white py-16 px-6 md:px-20">
      {/* Section Container */}
      <div className="space-y-16">
        {/* Section 1: Invest in Shares */}
        <motion.div
          className="grid md:grid-cols-2 items-center gap-12"
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Left Content */}
          <div>
            <motion.h1
              className="text-4xl font-bold mb-4"
              whileInView={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              viewport={{ once: false }}
            >
              Invest in <span className="text-[#946CFF]">Shares</span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-[12px] sm:text-[14px] lg:text-[16px] font-light leading-relaxed mb-6"
              whileInView={{ y: [10, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: false }}
            >
              Buy and Sell shares on over 20,000 equities of the largest
              multinational companies listed on the top stock exchanges in the
              world in market capitalization with margins as low as 5%.
            </motion.p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Shares", value: "20,000+" },
                { label: "Leverage", value: "20:1" },
                { label: "Commission", value: "0%" },
              ].map(({ label, value }, index) => (
                <motion.div
                  key={index}
                  className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="text-[16px] lg:text-xl font-bold text-[#946CFF]">
                    {value}
                  </p>
                  <p className="text-gray-400 text-[12px] lg:text-sm">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Right Image */}
          <motion.div
            className="flex justify-center"
            whileInView={{ x: [50, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false }}
            whileHover={hoverEffect}
          >
            <Image src={Imag3} alt="Shares" className="rounded-lg shadow-lg" />
          </motion.div>
        </motion.div>

        {/* Section 2: Invest in Forex */}
        <motion.div
          className="grid md:grid-cols-2 items-center gap-12"
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Left Image */}
          <motion.div
            className="flex justify-center order-2 md:order-1"
            whileHover={hoverEffect}
          >
            <Image src={Imag2} alt="Forex" className="rounded-lg shadow-lg" />
          </motion.div>
          {/* Right Content */}
          <div className="order-1 md:order-2">
            <motion.h1
              className="text-4xl font-bold mb-4"
              whileInView={{ x: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              Invest in <span className="text-[#946CFF]">Forex</span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-[12px] sm:text-[14px] lg:text-[16px] font-light leading-relaxed mb-6"
              whileInView={{ y: [10, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: false }}
            >
              Trade over 55 major, cross, and exotic Forex pairs, and benefit
              from the tightest spreads in the industry.
            </motion.p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Pairs", value: "55+" },
                { label: "Spreads", value: "From 0.1 Pips" },
                { label: "Leverage", value: "50:1" },
              ].map(({ label, value }, index) => (
                <motion.div
                  key={index}
                  className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="text-[16px] lg:text-xl font-bold text-[#946CFF]">
                    {value}
                  </p>
                  <p className="text-gray-400 text-[12px] lg:text-sm">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Section 3: Invest in Cryptocurrency */}
        <motion.div
          className="grid md:grid-cols-2 items-center gap-12"
          whileInView={{ opacity: [0, 1], x: [-50, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {/* Left Content */}
          <div>
            <motion.h1
              className="text-4xl font-bold mb-4"
              whileInView={{ scale: [1, 1.05, 1] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
              viewport={{ once: false }}
            >
              Invest in <span className="text-[#946CFF]">Cryptocurrency</span>
            </motion.h1>
            <motion.p
              className="text-gray-300 text-[12px] sm:text-[14px] lg:text-[16px] font-light leading-relaxed mb-6"
              whileInView={{ y: [10, 0] }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              viewport={{ once: false }}
            >
              Buy and trade leading cryptocurrencies, such as Bitcoin, Ethereum,
              and more, on the most secure platform with instant transaction
              execution.
            </motion.p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { label: "Cryptos", value: "100+" },
                { label: "Leverage", value: "10:1" },
                { label: "Commission", value: "0%" },
              ].map(({ label, value }, index) => (
                <motion.div
                  key={index}
                  className="bg-black bg-opacity-50 text-center border-2 border-gray-400 p-4 rounded-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <p className="text-[16px] lg:text-xl font-bold text-[#946CFF]">
                    {value}
                  </p>
                  <p className="text-gray-400 text-[12px] lg:text-sm">
                    {label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Right Image */}
          <motion.div
            className="flex justify-center"
            whileInView={{ x: [50, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false }}
            whileHover={hoverEffect}
          >
            <Image
              src={Imag}
              alt="Cryptocurrency"
              className="rounded-lg shadow-lg"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default InvestmentComponent;
