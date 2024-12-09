import { BsBoxArrowInUpRight, BsBoxArrowRight } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import dynamic from "next/dynamic";
import BlueCircle from "@/assets/circle-blue.svg";
import PurpleCircle from "@/assets/circle-purple.svg";
import Image from "next/image";

const WalletSection = () => {
  return (
    <div>
      <div className="flex rounded-lg px-4 flex-col  lg:flex-row ">
        <div className="border border-[#373A43] rounded-xl px-12 mb-3 mr-2">
          <div className="flex flex-col py-2 items-center gap-x-2">
            <div className="  flex py-2 items-center gap-x-2">
              <Image src={PurpleCircle} alt="" />
              <h1 className="text-[#747584] text-sm">Equity</h1>
            </div>
            <div className="flex justify-end px-5">
              <h1 className="text-center text-lg">$0.00</h1>
            </div>
          </div>
        </div>
        <div className="border border-[#373A43] flex-col  lg:flex-row rounded-xl px-10 mb-3">
          <div className="flex flex-col py-2 items-center gap-x-2">
            <div className="flex py-2 items-center gap-x-2">
              <Image src={BlueCircle} alt="" />
              <h1 className="text-[#747584] text-sm">Total withdrawal</h1>
            </div>
            <div className="flex justify-end px-5">
              <h1 className="text-center text-lg">$0.00</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletSection;
