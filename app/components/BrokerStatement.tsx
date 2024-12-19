import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Trader from "@/assets/whiter.png";

const hoverEffect = {
  scale: 1.05,
  transition: { duration: 0.3 },
};

const BrokerStatement = () => {
  return (
    <section className="bg-[#101223] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <motion.h2
            className="text-3xl font-bold mb-4"
            whileInView={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            Broker Statement Report
          </motion.h2>
          <motion.p
            className="text-gray-400 text-[12px] sm:text-[14px] lg:text-[16px]  mb-6 max-w-[500px]"
            whileInView={{ opacity: [0, 1], y: [10, 0] }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            viewport={{ once: false }}
          >
            Over the past two years, Ascendtradex has experienced remarkable
            success, as evidenced by our outstanding broker statement report.
            Notably, Ascendtradex portfolio has seen impressive growth, with
            significant returns on both equities and bonds, surpassing industry
            benchmarks. The detailed breakdown reveals a well-diversified
            investment approach, with profitable transactions consistently
            recorded across various sectors.
          </motion.p>
          <motion.button
            className="px-6 py-2 bg-[#946CFF] text-white rounded-lg shadow"
            whileHover={hoverEffect}
          >
            View Report
          </motion.button>
        </div>

        {/* Animated Image */}
        <motion.div
          className="flex justify-center"
          whileInView={{ opacity: [0, 1], x: [50, 0] }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          viewport={{ once: false }}
          whileHover={hoverEffect}
        >
          <Image
            src={Trader}
            alt="Broker Report"
            className="rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default BrokerStatement;
