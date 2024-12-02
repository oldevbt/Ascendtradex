const Referral = () => {
  return (
    <div>
      <div className="flex flex-col h-[60vh] justify-center">
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl mb-4 text-center">
          <h3 className="text-lg font-semibold">
            Invite your friends to TitanTradex and earn 15% on friends' trading
            fees
          </h3>
          <div className="bg-white text-black rounded-md p-2 mt-4 flex items-center justify-between">
            <input
              type="text"
              value="https://titantradex.com/user/register?ref=673bd69a41a31e70"
              className="bg-transparent flex-grow text-sm px-2"
              readOnly
            />
            <button className="text-black font-semibold bg-gray-400 py-3 px-3">
              Copy
            </button>
          </div>
        </div>
        <div className="border-t-[0.5px] font-poppins border-gray-400 border-b-[0.5px] mt-8 py-5">
          <h1 className="font-bold mb-3">Refer and Enjoy</h1>
          <p className="text-sm font-poppins">
            You'll get commission against your referral's activities. Level has
            been decided by the TitanTradex authority. If you reach the level,
            you'll get commission.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Referral;
