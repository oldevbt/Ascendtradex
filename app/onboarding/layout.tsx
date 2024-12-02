import React from "react";
import { RxDashboard } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex h-screen font-poppins">
      {/* Sidebar */}
      <aside className="w-1/6 bg-[#1F2127]  text-white p-4 border-r border-[#32353A]">
        <h1 className="text-xl font-bold mb-10 mt-10">AscendTradex</h1>
        <nav className="">
          <ul>
            <li className="mb-4">
              <a
                href="/"
                className="items-center p-2  flex gap-x-2  text-base hover:bg-gray-700 text-[#97a5bb] rounded"
              >
                <div className="text-2xl">
                  <RxDashboard />
                </div>
                Home
              </a>
            </li>
            <li>
              <a
                href="/logout"
                className="items-center p-2  flex gap-x-2 text-base text-[#97a5bb] hover:bg-gray-700 rounded"
              >
                <div className="text-2xl">
                  <CiLogout />
                </div>
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-[#1F2127] p-6 font-poppins">{children}</main>
    </div>
  );
};

export default Layout;
