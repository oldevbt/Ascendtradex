import React from "react";
import { CheckmarkIcon } from "react-hot-toast"; // Example icon library
import Container from "../dashboard/_components/Container";

const products = [
  { name: "Forex CFDs", count: 61 },
  { name: "Commodities CFDs", count: 24 },
  { name: "Stocks CFDs", count: 2100 },
  { name: "Index CFDs", count: 25 },
  { name: "Bond CFDs", count: 9 },
  { name: "Cryptocurrency CFDs", count: null }, // If there's no count provided
];

const GlobalMarket = () => {
  return (
    <Container>
      <div className="bg-[#121937] mt-10 py-10 px-10 rounded-3xl">
        <h1 className="text-[#D1D4DC] text-[20px]   lg:text-[39px] leading-tight max-w-[400px] font-bold">
          Global Markets at Your Fingertips
        </h1>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className=" text-[#ffff] flex flex-col gap-4">
              <div className="flex items-center gap-1">
                {/* Icon aligned to the top of the product details */}
                <CheckmarkIcon className="text-green-400 flex-shrink-0 w-3 h-3 self-start" />
                <div>
                  <h2 className="text-[12px] lg:text-[15px] font-semibold leading-tight">
                    {product.name}
                  </h2>
                  {product.count !== null && (
                    <p className="text-[10px] lg:text-[15px]  text-white mt-1">
                      {product.count}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-start">
          <button className="text-black bg-white px-6 py-3 rounded-lg font-medium hover:bg-[#8351e5] transition-colors duration-300">
            Range of Markets
          </button>
        </div>
      </div>
    </Container>
  );
};

export default GlobalMarket;
