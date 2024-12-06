import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="hidden md:flex justify-between items-center bg-gray-900 text-white p-4">
      <div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-800 rounded p-2 text-sm focus:outline-none"
        />
      </div>
      <div className="flex space-x-4">
        <FaSearch />
        <FaBell />
        <FaUserCircle />
      </div>
    </div>
  );
};

export default Navbar;
