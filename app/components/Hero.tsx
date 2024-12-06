import { Calistoga } from "next/font/google";
import Container from "./Container";
import { SlGraph } from "react-icons/sl";
import { GrSecure } from "react-icons/gr";
import { FaGlobeEurope } from "react-icons/fa";
import Image from "next/image";
import hero from "@/assets/ascend.webp";

const Hero = () => {
  return (
    <Container>
      <div className="flex flex-col items-center justify-center mt-20 sm:mt-40 space-y-8">
        {/* div1 */}
        <div className="text-center space-y-6 px-4 sm:px-8">
          <h1 className="font-poppins text-[#DCF536] font-medium text-[14px] sm:text-[16px] py-1 px-2 flex items-center justify-center border rounded-full border-[#DCF536] w-fit mx-auto">
            AscendTradex
          </h1>

          <h2 className="font-syne text-[24px] sm:text-[32px] lg:text-[80px] leading-[1.2] font-semibold">
            The Pioneer Boundless Trading Ecosystem
          </h2>

          <div className="flex flex-col sm:flex-row font-poppins font-medium justify-center text-center gap-y-4 sm:gap-y-0 sm:gap-x-8">
            <h1 className="flex gap-x-2 items-center justify-center">
              <div className="text-[16px] sm:text-[20px] lg:text-2xl font-bold rounded-full bg-white p-2 text-black">
                <SlGraph />
              </div>
              Fast Trading
            </h1>

            <h1 className="flex gap-x-2 items-center justify-center">
              <div className="text-[16px] sm:text-[20px] lg:text-2xl rounded-full bg-white p-2 font-bold text-black">
                <GrSecure />
              </div>
              Secure and reliable
            </h1>

            <h1 className="flex gap-x-2 items-center justify-center">
              <div className="text-[16px] sm:text-[20px] lg:text-2xl rounded-full bg-white p-2 font-bold text-black">
                <FaGlobeEurope />
              </div>
              Continuous market update
            </h1>
          </div>

          <button className="bg-[#DCF536] text-black font-extrabold py-2 px-4 sm:px-6 rounded-full mt-4">
            START NOW
          </button>
        </div>
      </div>

      <div className="mt-10 sm:mt-20 px-4 sm:px-8">
        <Image
          src={hero}
          alt="Hero Image"
          className="w-full max-w-[500px] sm:max-w-none mx-auto"
        />
      </div>
    </Container>
  );
};

export default Hero;
