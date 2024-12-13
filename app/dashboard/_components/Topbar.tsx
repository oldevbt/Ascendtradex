"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CgMenu } from "react-icons/cg";
import Logo from "@/assets/Ascend Logo.png";

interface TopbarProps {
  onMenuClick: () => void;
}

const fetchUserData = async () => {
  const response = await fetch("/api/getCurrentUser");
  if (!response.ok) throw new Error("Failed to fetch user data");
  return await response.json();
};

const Topbar: React.FC<TopbarProps> = ({ onMenuClick }) => {
  const [username, setUsername] = useState<string>("Loading...");

  useEffect(() => {
    const getUser = async () => {
      try {
        const user = await fetchUserData();
        setUsername(user?.firstName || "User");
      } catch (error) {
        console.error(error);
        setUsername("Guest");
      }
    };

    getUser();
  }, []);

  return (
    <div className="bg-gray-800 text-white p-4 flex items-center justify-between md:hidden">
      <div className="flex items-center space-x-2">
        <button
          onClick={onMenuClick}
          className="cursor-pointer"
          aria-label="Open Sidebar"
        >
          <CgMenu size={24} />
        </button>
        <div className="flex items-center gap-x-0">
          <Image src={Logo} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold">AscendTradex</h1>
        </div>
      </div>
      <div className="text-sm">Welcome, {username}</div>
    </div>
  );
};

export default Topbar;
