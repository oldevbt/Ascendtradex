import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-800 h-screen overflow-hidden">
      {/* Sidebar Section */}
      <div className="w-full md:w-[20%] lg:w-[15%] bg-gray-700">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col h-full">
        <Navbar />
        <main className="flex-grow overflow-auto ">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
