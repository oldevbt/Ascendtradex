import React from "react";
import Image from "next/image";
import Trader from "@/assets/whiter.png";

const BrokerStatement = () => {
  return (
    <section className="bg-[#101223] py-16 text-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Broker Statement Report</h2>
          <p className="text-gray-400 mb-6 max-w-[500px]">
            Over the past two years, Ascendtradex has experienced remarkable
            success, as evidenced by our outstanding broker statement report.
            Notably, Ascendtradex portfolio has seen impressive growth, with
            significant returns on both equities and bonds, surpassing industry
            benchmarks. The detailed breakdown reveals a well-diversified
            investment approach, with profitable transactions consistently
            recorded across various sectors.
          </p>
          <button className="px-6 py-2 bg-[#946CFF] text-white rounded-lg shadow ">
            View Report
          </button>
        </div>
        <div>
          <Image
            src={Trader}
            alt="Broker Report"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default BrokerStatement;
