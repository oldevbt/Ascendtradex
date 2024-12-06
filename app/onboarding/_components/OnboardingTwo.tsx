import React, { useState } from "react";

const OnboardingThree: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    // Toggle the selection if the same option is clicked
    setSelected((prev) => (prev === option ? null : option));
  };

  return (
    <div className="text-white flex flex-col items-center  mt-10 sm:mt-20">
      {/* Main Question */}
      <p className="text-lg sm:text-xl font-bold mb-4 text-center">
        Have you invested in stock exchanges and cryptocurrency before?
      </p>
      <p className="text-sm sm:text-[14px] text-gray-400 mb-6 text-center">
        Have you delved into the dynamic arenas of stock exchanges and
        cryptocurrency.
      </p>

      {/* Options with Purple Checkmarks */}
      <div className="flex flex-col space-y-4 w-full max-w-md justify-center">
        {/* Option 1 */}
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={selected === "experience"}
            onChange={() => handleSelect("experience")}
            className="h-5 w-5 border-2 border-gray-400 rounded-sm appearance-none checked:border-purple-500 checked:text-purple-500 checked:bg-transparent checked:hover:bg-transparent"
          />
          <span className="text-sm text-gray-400">
            Yes, I have experience with stock trading
          </span>
        </label>

        {/* Option 2 */}
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={selected === "no-experience"}
            onChange={() => handleSelect("no-experience")}
            className="h-5 w-5 border-2 border-gray-400 rounded-sm appearance-none checked:border-purple-500 checked:text-purple-500 checked:bg-transparent checked:hover:bg-transparent"
          />
          <span className="text-sm text-gray-400">
            No, I don't have experience with stock trading
          </span>
        </label>

        {/* Option 3 */}
        <label className="flex items-center space-x-3">
          <input
            type="checkbox"
            checked={selected === "novice"}
            onChange={() => handleSelect("novice")}
            className="h-5 w-5 border-2 border-gray-400 rounded-sm appearance-none checked:border-purple-500 checked:text-purple-500 checked:bg-transparent checked:hover:bg-transparent"
          />
          <span className="text-sm text-gray-400">
            Complete novice in stock trading
          </span>
        </label>
      </div>
    </div>
  );
};

export default OnboardingThree;
