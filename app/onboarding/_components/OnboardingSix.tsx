import React, { useState } from "react";

const Onboarding = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "personal"
  );

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="relative flex items-center justify-center  w-full h-[60vh] text-white">
      {/* Card Container */}
      <div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-[30%] w-full px-6 rounded-3xl shadow-lg space-y-6 flex flex-col items-center">
        {/* Title and Description */}
        <h2 className="text-xl sm:text-2xl  font-semibold text-center">
          Choose Account Type
        </h2>
        <p className="text-gray-400 text-center">
          Choose an option that best describes what you need.
        </p>

        {/* Options */}
        <div className="space-y-4 flex flex-col w-[320px] lg:w-auto justify-center items-center">
          {/* Personal Account Option */}
          <div
            className={`flex items-start p-5 border rounded-lg cursor-pointer w-full ${
              selectedOption === "personal"
                ? "border-purple-500 bg-purple-900/10"
                : "border-gray-600"
            }`}
            onClick={() => handleSelect("personal")}
          >
            <input
              type="radio"
              checked={selectedOption === "personal"}
              onChange={() => handleSelect("personal")}
              className="h-5 w-5 accent-purple-500 cursor-pointer mr-4"
            />
            <div className="flex flex-col">
              <h3 className="font-medium text-sm sm:text-base mb-1">
                Personal Account
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                This account is the best for everyone that trades with personal
                funds.
              </p>
            </div>
          </div>

          {/* Corporate Account Option */}
          <div
            className={`flex items-start p-5 border rounded-lg cursor-pointer w-full ${
              selectedOption === "corporate"
                ? "border-purple-500 bg-purple-900/10"
                : "border-gray-600"
            }`}
            onClick={() => handleSelect("corporate")}
          >
            <input
              type="radio"
              checked={selectedOption === "corporate"}
              onChange={() => handleSelect("corporate")}
              className="h-5 w-5 accent-purple-500 cursor-pointer mr-4"
            />
            <div className="flex flex-col">
              <h3 className="font-medium text-sm sm:text-base mb-1">
                Corporate (For Expert Traders)
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                This account is the best for experts that trade with various
                company funds. It allows each company to watch how you trade
                live.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;
