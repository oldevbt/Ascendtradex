// Navbar.tsx
import getCurrentUser from "@/app/actions/getCurrentUser";
import { CgSearch } from "react-icons/cg";

const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div className="hidden md:flex justify-between items-center  text-white p-4">
      <div className="hidden lg:flex items-center w-full max-w-lg">
        <div className="relative flex items-center w-full">
          <input
            id="search"
            type="text"
            placeholder="Search"
            className="w-full bg-gray-600 border border-gray-300 text-gray-300 px-10 py-2 rounded-lg focus:outline-none"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-xl text-gray-400">
            <CgSearch />
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span>Welcome, {currentUser?.firstName || "Guest"}!</span>
      </div>
    </div>
  );
};

export default Navbar;
