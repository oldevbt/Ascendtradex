import React, { useState } from "react";

const OnboardingSeven: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (option: string): void => {
    setSelectedOption(option);
  };

  return (
    <div className=" flex items-center justify-center  text-white px-4">
      <div className=" p-10  w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-6">Investor Type</h2>
        <p className="text-md text-gray-400 mb-8">
          It is important to know the kind of investor you are to help us
          understand you better. Kindly select one below.
        </p>
        <div className="space-y-6">
          {[
            "Cautious Investor",
            "Spontaneous Investor",
            "Aggressive Investor",
          ].map((option) => (
            <label
              key={option}
              className={`flex items-center px-6 py-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                selectedOption === option
                  ? "border-purple-500 bg-gray-700"
                  : "border-gray-600 hover:border-gray-500"
              }`}
              onClick={() => handleOptionChange(option)}
            >
              <div
                className={`flex items-center justify-center h-6 w-6 rounded border-2 ${
                  selectedOption === option
                    ? "bg-purple-500 border-purple-500"
                    : "bg-gray-800 border-gray-600"
                }`}
              >
                {selectedOption === option && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-white"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
              <span className="ml-4 text-lg">{option}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnboardingSeven;
