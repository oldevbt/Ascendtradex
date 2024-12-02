import React from "react";

import { HiChartBar, HiUser, HiGlobe } from "react-icons/hi";

const Stats = () => {
  return (
    <section
      className="mb-10 font-poppins"
      data-aos="fade-down"
      data-aos-delay="1200"
    >
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-6  lg:flex-row lg:justify-between">
          {/* item text */}
          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue  text-2xl">
              <HiChartBar />
            </div>
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                10M+
              </div>
              <div>Trusted Wallets Investor</div>
            </div>
          </div>

          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue  text-2xl">
              <HiUser />
            </div>
            {/* item text */}
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                195
              </div>
              <div>Countries Supported</div>
            </div>
          </div>
          <div className="flex items-center gap-x-6">
            <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center text-blue  text-2xl">
              <HiGlobe />
            </div>
            {/* item text */}
            <div>
              <div className="text-2xl font-bold lg:text-[40px] lg:mb-2">
                $30B
              </div>
              <div>Digital Currency Exchanged</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
