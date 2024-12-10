import React from "react";

const TradingSection = () => {
  const stats = [
    {
      value: "50M+",
      description: "Traders and investors use our platform.",
    },
    {
      value: "#1",
      description:
        "Top website in the world when it comes to all things investing.",
      isLink: true,
    },
    {
      value: "4.9",
      description:
        "Rating from 1M+ reviews. No other finance apps are more loved.",
    },
    {
      value: "10M+",
      description: "Custom scripts and ideas shared by our users.",
    },
  ];

  const logos = [
    "anz.png",
    "banco-do-brasil.png",
    "bank-of-america.png",
    "bank-of-china.png",
    "jpmorgan.png",
    "mizuho.png",
    "nomura.png",
    "barclays.png",
  ]; // Replace with the actual image file names in the public directory.

  return (
    <div className="bg-black text-white">
      {/* Header */}
      <div className="container mx-auto text-center py-16 px-4">
        <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">
          Love in every <span className="text-[#FF497C]">#Trading</span>
        </h1>
      </div>

      {/* Stats */}
      <div className="container mx-auto flex flex-col md:flex-row justify-around items-center text-center md:text-left py-8 px-4 space-y-6 md:space-y-0">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <p className="text-3xl md:text-4xl font-bold">{stat.value}</p>
            <p className="text-gray-400">
              {stat.isLink ? (
                <a
                  href="#"
                  className="text-blue-500 underline hover:no-underline"
                >
                  {stat.description}
                </a>
              ) : (
                stat.description
              )}
            </p>
          </div>
        ))}
      </div>

      {/* Logos */}
      <div className="bg-[#0A0E25] py-8">
        <div className="container mx-auto flex flex-wrap justify-center items-center gap-6">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={`/logos/${logo}`} // Ensure these images are in the `public/logos` folder
              alt={`Logo ${index}`}
              className="h-12 md:h-16 object-contain"
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto text-center py-4">
        <p className="text-sm text-gray-500">
          Excellent{" "}
          <span className="text-green-500 font-semibold">⭐⭐⭐⭐⭐</span>{" "}
          Reviews 30,000+
        </p>
      </div>

      {/* CTA Buttons */}
      <div className="container mx-auto flex justify-center items-center gap-4 py-8">
        <button className="bg-[#6246EA] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#5036c8]">
          Open an Account
        </button>
        <button className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black">
          Client Login
        </button>
      </div>
    </div>
  );
};

export default TradingSection;
