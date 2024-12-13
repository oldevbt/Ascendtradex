import { SlGraph } from "react-icons/sl";
import { GrSecure } from "react-icons/gr";
import { FaGlobeEurope } from "react-icons/fa";
import Image from "next/image";
import hero from "@/assets/header-main.png";
import Container from "./Container";
import background from "@/assets/bgg.svg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute bottom-36 right-5 md:right-32 lg:right-80 w-[300px] sm:w-[400px] md:w-[500px] h-full bg-no-repeat"
        style={{
          backgroundImage: `url(${background.src})`,
          backgroundPosition: "top right",
          backgroundSize: "contain",
        }}
      ></div>

      <Container>
        <div className="flex flex-col mt-14  md:mt-20 pt-0 md:pt-16 items-center justify-center space-y-6 sm:space-y-8 relative">
          {/* Text Content */}
          <div className="text-center lg:space-y-6 space-y-3 pt-5 mx-4 ">
            <div>
              <h1 className="text-[#FFFF] bg-[#2F3A4A] font-medium text-[6.5px] lg:text-base py-2 px-2 flex items-center justify-center border rounded-full border-[#5E6871] w-[300px]  lg:w-fit mx-auto">
                Unlock Your Trading Potential with our expert insights,
                real-time market data, and powerful tools.
              </h1>
            </div>

            <h2 className="text-[24px] sm:text-[32px] lg:text-[42.5px] text-[#ffff] lg:leading-[58.5px] font-bold max-w-[800px] mx-auto">
              Trade seamlessly with cutting-edge analytics
            </h2>

            <div className="flex flex-col w-[370px] text-[#B0B3BC] text-[10px] sm:text-[14px] lg:text-[16px] font-light justify-center items-center mx-6 sm:mx-10 lg:mx-auto">
              <p>
                "Enjoy seamless trading with advanced analytics, market
                insights, and personalized support for{" "}
                <span className="text-[#8341f5] font-bold">STOCKS</span>,{" "}
                <span className="text-[#8341f5] font-bold">CRYPTO</span> and{" "}
                <span className="text-[#8341f5] font-bold">OPTIONS</span>. Take
                your trading strategy to the next level with us!"
              </p>
            </div>

            <div className="flex gap-x-2 justify-center -mt-5">
              <Link
                href="/Login"
                className="bg-[#946CFF] text-white font-extrabold py-2 px-4 sm:px-6 rounded-md mt-4"
              >
                Login
              </Link>
              <Link
                href="/SignUp"
                className="border border-white text-white font-extrabold py-2 px-4 sm:px-6 rounded-md mt-4"
              >
                GET STARTED
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex justify-center items-center w-full mt-8">
          <Image
            src={hero}
            alt="Hero Image"
            className="max-w-[300px]  lg:max-w-[800px] h-auto"
          />
        </div>
      </Container>
    </div>
  );
};

export default Hero;
