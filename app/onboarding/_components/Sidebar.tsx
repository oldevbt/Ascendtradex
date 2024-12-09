"use client";
import React, { useState } from "react";
import { RxDashboard } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";
import { CgMenu, CgClose } from "react-icons/cg";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import logo from "@/assets/Ascend Logo.png";
import Image from "next/image";

const Sidebar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut({ redirect: false }); // Prevent default redirection
      toast.success("You have been logged out successfully!");
      router.push("/"); // Redirect to home page
    } catch (error) {
      toast.error("Failed to logout. Please try again.");
    }
  };

  return (
    <>
      {/* Hamburger Menu for Mobile */}
      <button
        onClick={toggleSidebar}
        className="text-white text-3xl absolute top-4 left-4 md:hidden z-50"
      >
        {isSidebarOpen ? <CgClose /> : <CgMenu />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-[#1F2127] text-white p-4 border-r border-[#32353A] z-40 transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 w-3/6 md:static md:w-1/6 overflow-hidden`}
      >
        <div className="flex gap-x-1 items-center">
          <Image src={logo} alt="Logo" className="w-10 h-10 -mt-10" />
          <h1 className="text-xl font-bold mb-10">AscendTradex</h1>
        </div>

        <nav>
          <ul>
            <li className="mb-4">
              <a
                href="/"
                className="items-center p-2 flex gap-x-2 text-base hover:bg-gray-700 text-[#97a5bb] rounded"
              >
                <div className="text-2xl">
                  <RxDashboard />
                </div>
                Home
              </a>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="items-center p-2 flex gap-x-2 text-base text-[#97a5bb] hover:bg-gray-700 rounded w-full text-left"
              >
                <div className="text-2xl">
                  <CiLogout />
                </div>
                Logout
              </button>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </>
  );
};

export default Sidebar;
