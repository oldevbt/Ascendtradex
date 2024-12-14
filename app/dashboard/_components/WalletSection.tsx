import { BsBoxArrowInUpRight, BsBoxArrowRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import dynamic from "next/dynamic";
import BlueCircle from "@/assets/circle-blue.svg";
import PurpleCircle from "@/assets/circle-purple.svg";
import Image from "next/image";

const WalletSection = () => {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 rounded-lg px-4">
        {/* Deposit Wallet */}
        <div className="border border-[#373A43] rounded-xl p-6">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex items-center gap-x-2">
              <Image src={PurpleCircle} alt="" />
              <h1 className="text-[#747584] text-[8px] lg:text-sm">
                Deposit Wallet
              </h1>
            </div>
            <div className="text-center text-lg">$0.00</div>
          </div>
        </div>

        {/* Interest Balances */}
        <div className="border border-[#373A43] rounded-xl p-6">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex items-center gap-x-2">
              <Image src={BlueCircle} alt="" />
              <h1 className="text-[#747584] text-[8px] lg:text-sm">
                Interest Balances
              </h1>
            </div>
            <div className="text-center text-lg">$0.00</div>
          </div>
        </div>

        {/* Add more grid items here */}
        <div className="border border-[#373A43] rounded-xl p-6">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex items-center gap-x-2">
              <Image src={PurpleCircle} alt="" />
              <h1 className="text-[#747584] text-[8px] lg:text-sm">Equity</h1>
            </div>
            <div className="text-center text-lg">$0.00</div>
          </div>
        </div>

        <div className="border border-[#373A43] rounded-xl p-6">
          <div className="flex flex-col items-center gap-y-2">
            <div className="flex items-center gap-x-2">
              <Image src={PurpleCircle} alt="" />
              <h1 className="text-[#747584] text-[8px] lg:text-sm">
                Total Withdrawal
              </h1>
            </div>
            <div className="text-center text-lg">$0.00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletSection;
