import Image from "next/image";

const BalanceCard = ({}) => (
  <div className="flex flex-col font-poppins space-y-1 py-4 px-8">
    <h1 className="font-bold text-[18px]">Total Balance</h1>
    <h1 className="text-[40px] font-bold">
      $ 0.00{" "}
      <span className="font-inter bg-[#FF9E38] rounded-full text-[18px] px-4 py-2">
        USD
      </span>
    </h1>
    <h1 className="text-[#808191] font-poppins text-[24px] font-normal">
      0.00000000 BTC
    </h1>
  </div>
);

export default BalanceCard;
