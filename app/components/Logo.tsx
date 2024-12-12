import Image from "next/image";
import React from "react";
import logo from "@/assets/ganbio.svg";
import Gamb from "@/assets/Mmm.svg";
import Neptune from "@/assets/neptuneX.webp";
import Ring from "@/assets/ring protocol.webp";
import Thruster from "@/assets/Thruster.webp";
import partner from "@/assets/partnerGate (1).webp";
import deGaurd from "@/assets/deGuardVPN.webp";
import felonblast from "@/assets/fuelonblast.webp";
import morphis from "@/assets/morphis.webp";
import mexc from "@/assets/mexc.webp";
import Victus from "@/assets/VictusCapital.webp";
import acads from "@/assets/acadLabs.webp";
import giro from "@/assets/giroswap.webp";
import bit from "@/assets/bitget.webp";

const logos = [Neptune, Ring, Thruster, partner, deGaurd, giro, bit];

const Logo = () => {
  return (
    <div className=" relative overflow-hidden w-full  py-10">
      {/* Scrolling container */}
      <div className="flex animate-scroll gap-10 items-center">
        {/* Repeat the logos to create an infinite scrolling effect */}
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="flex-shrink-0 bg-[#111828]">
            <Image
              src={logo}
              alt={`Logo ${index + 1}`}
              width={150} // Adjust size as needed
              height={50}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logo;
