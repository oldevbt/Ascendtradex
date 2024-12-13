import React, { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Titan from "@/assets/Ascend Logo.png";
import { CgMenuBoxed } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* Header with fixed positioning */}
      <div className="fixed top-0 bg-[#101828] left-0 w-full shadow-md z-50">
        <Container>
          <div className="flex flex-row justify-between items-center mt-5">
            <div className="flex items-center">
              <Image src={Titan} alt="Logo" className="w-10 h-10" />
              <h1 className="text-lg font-bold">AscendTradex</h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex  ">
              <ul className="flex text-white text-[16px] font-semibold justify-center items-center py-2 px-3 gap-x-5">
                <li>Home</li>
                <li>Broker</li>
                <li>Products</li>
                <li>News</li>
                <li>Trading</li>
                <li>More</li>
              </ul>
            </nav>
            {/* Desktop Login/Sign Up */}
            <div className="hidden md:flex gap-x-2 items-center">
              <Link
                href="/SignUp"
                className="bg-[#946CFF] cursor-pointer text-white font-bold rounded-md py-2 px-4"
              >
                Open Account
              </Link>

              <Link
                href="/Login"
                className="font-bold border cursor-pointer border-[#946CFF] rounded-md py-2 px-4"
              >
                Client Login
              </Link>
            </div>
            {/* Mobile Menu Icon */}
            <div className="flex lg:hidden text-3xl cursor-pointer">
              <div onClick={toggleSidebar}>
                <div className="text-inherit">
                  <CgMenuBoxed />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-y-0 right-0 w-80 bg-gradient-to-b from-purple-600 to-blue-500 text-white z-50 rounded-l-2xl  shadow-lg flex flex-col"
          style={{ transition: "transform 0.3s ease-in-out" }}
        >
          {/* Close Button */}
          <div className="flex justify-end p-4">
            <button onClick={toggleSidebar}>
              <div className="text-4xl cursor-pointer">
                <IoClose />
              </div>
            </button>
          </div>

          {/* Sidebar Links */}
          <nav className="flex flex-col gap-y-5 px-6 text-lg font-semibold mt-5">
            <Link href="/" className="hover:text-gray-300">
              Home
            </Link>
            <Link href="/about" className="hover:text-gray-300">
              About Company
            </Link>
            <Link href="/features" className="hover:text-gray-300">
              Features
            </Link>
            <Link href="/solutions" className="hover:text-gray-300">
              Solutions
            </Link>
            <Link href="/pricing" className="hover:text-gray-300">
              Pricing
            </Link>
            <Link href="/token" className="hover:text-gray-300">
              Token
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
