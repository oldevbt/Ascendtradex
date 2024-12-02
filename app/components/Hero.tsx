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
      <div className="flex flex-col items-center justify-center mt-40 space-y-8">
        {/* div1 */}
        <div className="text-center space-y-4">
          <h1 className="font-poppins text-[#DCF536] font-medium text-[16px] py-1 px-2 flex items-center justify-center border rounded-full border-[#DCF536] w-fit mx-auto my-0">
            AscendTradex
          </h1>

          <h2 className="font-syne text-[80px] leading-[1.0] font-semibold">
            The Pioneer Boundless Trading Ecosystem
          </h2>
          <div className="flex font-poppins font-medium justify-center text-center gap-x-8">
            <h1 className="flex gap-x-2 items-center">
              <div className="text-2xl font-bold rounded-full bg-white p-1 text-black">
                <SlGraph />
              </div>
              Fast Trading
            </h1>

            <h1 className="flex gap-x-2 items-center">
              <div className="text-2xl  rounded-full bg-white p-1 font-bold text-black">
                <GrSecure />
              </div>
              Secure and reliable
            </h1>
            <h1 className="flex gap-x-2 items-center">
              <div className="text-2xl  rounded-full bg-white p-1 font-bold text-black">
                <FaGlobeEurope />
              </div>
              Continuos market update
            </h1>
          </div>
          <button className="bg-[#DCF536] text-black font-extrabold py-2 px-3 rounded-full ">
            START NOW
          </button>
        </div>
      </div>
      <div className="mt-20">
        <Image src={hero} alt="" />
      </div>
    </Container>
  );
};

export default Hero;
