import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = async ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col md:flex-row bg-gray-900 h-screen overflow-hidden">
      {/* Sidebar Section */}
      <div className="w-full md:w-[20%] lg:w-[18%] bg-gray-800">
        <Sidebar />
      </div>

      {/* Main Content Section */}
      <div className="flex-1 flex flex-col h-full bg-gray-900">
        <Navbar />
        <main className="flex-grow overflow-auto p-4 bg-gray-800 text-white">
          <ToastContainer position="top-right" autoClose={3000} />
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
