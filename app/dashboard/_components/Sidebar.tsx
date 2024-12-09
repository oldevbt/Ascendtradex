"use client";

import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { toast } from "react-toastify";
import { BsWallet2 } from "react-icons/bs";
import { CgMenuBoxed, CgClose, CgMenu } from "react-icons/cg";
import { FaSignal, FaUserCheck, FaSignOutAlt } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { RxClipboardCopy, RxDashboard } from "react-icons/rx";
import { SlGraph } from "react-icons/sl";
import Modal from "../_components/Modal";
import Image from "next/image";
import Logo from "@/assets/Ascend Logo.png";

const Sidebar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = async () => {
    try {
      // Sign out the user
      await signOut({ callbackUrl: "/" }); // Redirect to home after logout
      toast.success("You have successfully logged out.");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="font-poppins">
      {/* Topbar for mobile */}
      <div className="bg-gray-800 text-white p-4 flex items-center justify-between md:hidden">
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setIsSidebarOpen(true)}
            className="cursor-pointer"
            aria-label="Open Sidebar"
          >
            <CgMenu size={24} />
          </button>
          <h1 className="text-xl font-bold">AscendTradex</h1>
        </div>
        <div className="text-sm">Welcome, User</div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 z-30 left-0 h-screen border-r border-gray-700 w-64 bg-gray-800 text-white flex flex-col transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-64"
        } transition-transform md:translate-x-0`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 border-gray-700">
          {/* Logo and Title */}
          <div className="flex items-center gap-x-2">
            <Image src={Logo} alt="Logo" className="w-10 h-10" />
            <h1 className="text-xl font-bold">AscendTradex</h1>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="cursor-pointer md:hidden"
            aria-label="Close Sidebar"
          >
            <CgClose size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex-1 flex-col p-4">
          <Link
            href="/dashboard"
            onClick={() => setIsSidebarOpen(false)}
            className="text-white hover:text-purple-200"
          >
            <div className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
              <RxDashboard />
              <span>Home</span>
            </div>
          </Link>
          <Link
            href="/dashboard/Copy-Trading"
            className="text-white hover:text-purple-400"
          >
            <div className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
              <RxClipboardCopy />
              <span>Copy Trading</span>
            </div>
          </Link>
          <Link
            href="/dashboard/Signals"
            className="text-white hover:text-purple-400"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
              <FaSignal />
              <span>Signals</span>
            </div>
          </Link>
          <Link
            href="/dashboard/Live-Trading"
            className="text-white hover:text-purple-400"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
              <SlGraph />
              <span>Live Trade</span>
            </div>
          </Link>
          <Link
            href="/dashboard/Kyc-Verification"
            className="text-white hover:text-purple-400"
            onClick={() => setIsSidebarOpen(false)}
          >
            <div className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded">
              <FaUserCheck />
              <span>KYC Verification</span>
            </div>
          </Link>

          <button
            className="flex items-center mb-5 space-x-3 hover:bg-gray-700 p-2 rounded w-full text-left"
            onClick={() => {
              setIsModalOpen(true);
              setIsSidebarOpen(false); // Close sidebar if modal is opened
            }}
          >
            <IoSettingsOutline />
            <span>Settings</span>
          </button>
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center space-x-3 p-4 hover:bg-red-700 text-white"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Sidebar;
