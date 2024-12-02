import logo from "@/assets/titan.png";
import Image from "next/image";
import { BsDiscord, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full pt-10 font-poppins  ">
      <div className="flex flex-col w-full max-w-[1250px] mx-auto px-5 gap-10">
        <div className="flex flex-col md:flex-row  items-center justify-between">
          {/* Logo and Text Section */}
          <div className="flex flex-col items-center md:items-start gap-y-10">
            <Image
              src={logo}
              alt="Titan Logo"
              className="justify-center items-center"
            />
            <p className="text-center md:text-left font-poppins font-normal text-[#EAECF0]">
              Titan Trading Platform - The Pioneer Boundless Trading Ecosystem
            </p>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full">
            <div className="space-y-7">
              <h1 className="font-bold text-[#EAECF0] text-[18px]">
                About company
              </h1>
              <nav className="space-y-2">
                <a href="#" className="block text-[16px]">
                  About company
                </a>
                <a href="#" className="block text-[16px]">
                  Why Titan
                </a>
                <a href="#" className="block text-[16px]">
                  Whitepaper
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h1 className="font-bold text-[#EAECF0] text-[18px]">Product</h1>
              <nav className="space-y-2">
                <a href="#" className="block text-[16px]">
                  Features
                </a>
                <a href="#" className="block  text-[16px]">
                  Pricing
                </a>
                <a href="#" className="block  text-[16px]">
                  Token
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h1 className="font-bold text-[18px] text-[#EAECF0]">Support</h1>
              <nav className="space-y-2">
                <a href="#" className="block text-[16px] ">
                  Help Center
                </a>
                <a href="#" className="block  text-[16px] ">
                  User guide
                </a>
                <a href="#" className="block text-[16px] ">
                  Term of use
                </a>
                <a href="#" className="block  text-[16px] ">
                  Contact us
                </a>
              </nav>
            </div>
            <div className="space-y-4">
              <h1 className="font-bold text-[#EAECF0] text-[18px]">Contact</h1>
              <nav className="space-y-2">
                <a href="#" className="block text-[16px]">
                  Support
                </a>
                <a href="#" className="block text-[16px]">
                  Careers
                </a>
                <a href="#" className="block text-[16px]">
                  Media
                </a>
              </nav>
            </div>
          </div>
        </div>
        <div className="border-t-[0.5px] border-gray-500"></div>
        <div className=" flex flex-row justify-left text-left gap-x-4">
          <BsTelegram />
          <FaXTwitter />
          <BsInstagram />
          <FaFacebook />
          <BsDiscord />
          <BsYoutube />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
