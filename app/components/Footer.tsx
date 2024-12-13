import logo from "@/assets/Ascend Logo.png";
import Image from "next/image";
import { BsDiscord, BsInstagram, BsTelegram, BsYoutube } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import download from "@/assets/downloa.svg";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0b1120] text-white">
      {/* Support Email */}
      <div className="w-full py-6">
        <div className="max-w-[1450px] mx-auto px-5 text-right">
          {" "}
          {/* Aligned to the right */}
          <p className="text-sm text-[#EAECF0]">
            Support Email:{" "}
            <a
              href="mailto:support@ascendtradex.com"
              className="hover:underline text-white"
            >
              support@ascendtradex.com
            </a>
          </p>
        </div>
      </div>

      <div className="  max-w-[1450px] mx-auto border-t border-gray-700"></div>
      <div className="flex flex-col w-full max-w-[1450px] justify-center mx-auto py-20 px-5 gap-6 ">
        {" "}
        {/* Added padding-bottom */}
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Instructions Section */}
          <div className="flex flex-col items-center md:items-start gap-y-4 w-full md:w-1/3">
            <div className="flex items-center">
              <Image
                src={logo}
                alt="Ascend Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="font-bold  text-[40px] text-[#ffff]">
                AscendTradex
              </span>
            </div>
            <p className="text-left   text-sm font-light text-[#EAECF0] leading-relaxed">
              AscendTradex’s mission is to create the best trading experience
              for retail and institutional clients alike, allowing traders to
              focus more on their trading. Built by traders for traders,
              AscendTradex is dedicated to offering superior spreads, execution,
              and service.
            </p>
          </div>

          {/* Navigation Section */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 w-full md:w-2/3">
            {/* About Company */}
            <div>
              <h2 className="font-semibold text-[#AFBBCF] text-lg mb-4">
                About Company
              </h2>
              <nav className="space-y-3 text-[#AFBBCF]">
                <a href="#" className="block text-[13px] hover:underline">
                  Stocks Overview
                </a>
                <a href="#" className="block text-[13px] hover:underline">
                  Regulations
                </a>
                <a href="#" className="block text-[13px] hover:underline">
                  Insurance
                </a>
              </nav>
            </div>
            {/* Product */}
            <div>
              <h2 className="font-semibold text-[#AFBBCF] text-lg mb-4">
                Specifications
              </h2>
              <nav className="space-y-2 text-[#AFBBCF]">
                <a href="#" className="block text-[13px] hover:underline">
                  Commissions
                </a>
                <a href="#" className="block text-[13px] hover:underline">
                  Products
                </a>
                <a href="#" className="block text-[13px] hover:underline">
                  Trading Hours
                </a>
              </nav>
            </div>
            {/* Support */}
            <div>
              <h2 className="font-semibold text-[#AFBBCF] text-lg mb-4">
                Trading
              </h2>
              <nav className="space-y-3 text-[#AFBBCF]">
                <a href="#" className="block text-[13px] hover:underline">
                  Why TitanTradex?
                </a>
                <a href="#" className="block text-[13px] hover:underline">
                  Career
                </a>
                <a href="#" className="block text-[13px] hover:underline">
                  Contact Us
                </a>
              </nav>
            </div>
            {/* Contact */}
            <div>
              <h2 className="font-semibold text-[#AFBBCF] text-lg mb-4">
                More
              </h2>
              <nav className="space-y-3 text-[13px] text-[#9DA8BA] ">
                <a href="#" className="block text-[13px] hover:underline">
                  News
                </a>
                <a href="#" className="block text-[13px] hover:underline">
                  Expert Traders
                </a>
                <a href="#" className="block text-[13px] hover:underline">
                  Conditions
                </a>
              </nav>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-700"></div>
        <div>
          <h1 className=" text-[15px]  mb-3">We accept:</h1>
          <Image src={download} alt="" />
        </div>
        <ul className="list-disc text-[12px] font-light text-[#9DA6BB] space-y-3 pl-4 w-full">
          <li>
            Copyright © : 2005-2024 TitanTradex Limited. All rights reserved.
            TitanTradex Ltd is regulated by the Seychelles Financial Services
            Authority (FSA) with Securities Dealer’s license number SD018..
          </li>
          <li>
            <span className="font-semibold">Notice:</span> You must be 18 years
            old, or of legal age as determined in your country. Upon registering
            an account with TitanTradex Ltd, you acknowledge that you are
            registering at your own free will, without solicitation on behalf of
            TitanTradex Ltd.
          </li>
          <li>
            <span className="font-semibold">Risk Warning:</span> Trading Stocks
            and CFDs carries a high level of risk to your capital and you should
            only trade with experts that won't lose your money. Trading Stocks
            and CFDs may not be suitable for all investors, so please ensure
            that you seek independent advice if from expert traders.
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
