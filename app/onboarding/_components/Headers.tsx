import getCurrentUser from "@/app/actions/getCurrentUser";
import { CgSearch } from "react-icons/cg";

const Headers = async () => {
  // Fetch current user data on the server
  const currentUser = await getCurrentUser();

  return (
    <header className="bg-[#1F2127] text-white p-6 border-b border-[#32353A] flex justify-between items-center">
      {/* Search Section */}
      <div className="flex-1 flex items-center lg:space-x-4">
        {/* Search (hidden in mobile view) */}
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
      </div>

      {/* User Profile Section */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 17h5l-1.405-1.405C19.865 15.27 20 14.62 20 14c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .62.135 1.27.405 1.595L9 21H4v-2l9-9c.62-.62 1.27-.905 1.595-.905C15.275 9 15 8.275 15 8c0-2.21-1.79-4-4-4s-4 1.79-4 4c0 .62.135 1.27.405 1.595L9 21H4v-2l9-9c.62-.62 1.27-.905 1.595-.905"
            />
          </svg>
          <span className="absolute -top-1.5 -right-1.5 bg-orange-500 text-white text-xs font-bold rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </div>

        {/* User Section */}
        <div className="flex items-center space-x-2">
          <p className="text-white ">Hi, {currentUser?.firstName || "Guest"}</p>
          <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 20h-8a4 4 0 01-4-4v-2a4 4 0 014-4h8a4 4 0 014 4v2a4 4 0 01-4 4zM12 11c-1.5 0-3-.8-3-2.4 0-1.6 1.2-2.6 3-2.6s3 1 3 2.6c0 1.6-1.5 2.4-3 2.4z"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Headers;
