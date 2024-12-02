import Sidebar from "./_components/Sidebar";
import Navbar from "./_components/Navbar";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex bg-gray-800 h-screen overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-4 justify-center overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
