import React, { useState } from "react";
import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import Titan from "@/assets/Ascend Logo.png";
import { CgMenuBoxed } from "react-icons/cg";
import { IoClose } from "react-icons/io5"; // Close icon

const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Container>
        <div className="flex flex-row justify-between mt-5">
          <Image src={Titan} alt="Logo" className="w-20 h-20" />
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex font-poppins bg-gray">
            <ul className="flex text-[#98A2B3] font-semibold justify-center  items-center py-2 px-3 gap-x-5">
              <li>Home</li>
              <li>About Company</li>
              <li>Features</li>
              <li>Solutions</li>
              <li>Pricing</li>
              <li>Token</li>
            </ul>
          </nav>
          {/* Desktop Login/Sign Up */}
          <div className="hidden md:flex gap-x-2 items-center">
            <Link href="/Login" className="font-semibold">
              Login
            </Link>

            <Link
              href="/SignUp"
              className="bg-white font-semibold rounded-md text-black py-2 px-4"
            >
              Sign up
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

      {/* Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-y-0 right-0 w-80 bg-gradient-to-b from-purple-600 to-blue-500 text-white z-50 rounded-l-2xl font-poppins shadow-lg flex flex-col"
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
