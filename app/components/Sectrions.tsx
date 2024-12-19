import React from "react";
import Image from "next/image";
import phoneImage from "@/assets/phones/funded-trading.png"; // Replace with your image path
import Link from "next/link";
import { motion } from "framer-motion";

const Sectrions = () => {
  return (
    <div className="text-white relative overflow-hidden">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 lg:px-12 py-16 lg:py-24">
        {/* Left Section */}
        <motion.div
          className="text-center lg:text-left space-y-6"
          whileInView={{ x: [-50, 0] }} // Slide-in without opacity change
          transition={{
            duration: 1.5,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h1
            className="text-3xl sm:text-4xl lg:text-7xl lg:w-[500px] font-bold leading-tight"
            whileInView={{ x: [-10, 10, -10] }} // Smooth horizontal motion
            transition={{ duration: 2.5, ease: "easeInOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            MAKE PROFIT <br />
            AS{" "}
            <motion.span
              className="text-[#946CFF]"
              whileInView={{ scale: [1, 1.05, 1] }} // Subtle scaling effect
              transition={{ duration: 2.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              EXPERTS
            </motion.span>{" "}
            TRADE
          </motion.h1>

          <motion.p
            className="text-[12px] mb-10  pb-4 sm:text-[14px] lg:text-[16px] font-light text-gray-300 max-w-lg mx-auto lg:mx-0"
            whileInView={{ y: [10, 0] }} // Vertical motion only
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
            viewport={{ once: false, amount: 0.2 }}
          >
            Simply select the trader you wish to Autocopy, deposit your desired
            funds on the platform, and once approved, Autocopy begins. Instantly
            mirror the Lead Trader’s positions in real-time.
          </motion.p>

          <Link href="/SignUp" className="z-30 mt-5  hover:bg-white">
            <motion.button
              className="bg-[#946CFF] hover:bg-[#7A5FE3] text-white text-sm sm:text-base py-3 px-6 rounded-lg font-medium transition"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              whileInView={{ y: [0, -10, 0] }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              Create an account — It’s free
            </motion.button>
          </Link>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="mt-10 lg:mt-0"
          whileInView={{ x: [50, 0] }} // Horizontal slide-in
          transition={{
            duration: 2,
            ease: "easeInOut",
          }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <Image
            src={phoneImage}
            alt="Phone displaying trading app"
            className="w-full max-w-md mx-auto lg:mx-0"
            priority
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Sectrions;
