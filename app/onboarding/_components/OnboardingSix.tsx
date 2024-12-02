import React, { useState } from "react";

const Onboarding = () => {
  const [selectedOption, setSelectedOption] = useState<string | null>(
    "personal"
  );

  const handleSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div className="flex items-center justify-center   text-white">
      <div className="w-[600px] h-[500px]   p-8 rounded-3xl relative">
        {/* Title and Description */}
        <h2 className="text-2xl font-semibold text-center mb-2">
          Choose Account Type
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Choose an option that best describes what you need.
        </p>

        {/* Options */}
        <div className="space-y-4">
          {/* Personal Account Option */}
          <div
            className={`flex items-center p-4 border rounded-lg cursor-pointer ${
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
              className="h-5 w-5 accent-purple-500 cursor-pointer mr-3"
            />
            <div>
              <h3 className="font-medium">Personal Account</h3>
              <p className="text-sm text-gray-400">
                This account is the best for everyone that trades with personal
                funds.
              </p>
            </div>
          </div>

          {/* Corporate Account Option */}
          <div
            className={`flex items-center p-4 border rounded-lg cursor-pointer ${
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
              className="h-5 w-5 accent-purple-500 cursor-pointer mr-3"
            />
            <div>
              <h3 className="font-medium">Corporate (For Expert Traders)</h3>
              <p className="text-sm text-gray-400">
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
