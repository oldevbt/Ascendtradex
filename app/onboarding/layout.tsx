import React from "react";
import Header from "./_components/Headers";
import Sidebar from "./_components/Sidebar";
import { Toaster } from "react-hot-toast";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="flex   bg-[#1F2127]">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-[#1F2127]">
        <Header />
        <main className="p-6">
          <Toaster position="top-right" />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
