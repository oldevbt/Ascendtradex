import Image from "next/image";
import sit from "@/assets/sit_icon.png";

const OnboardingOne = () => {
  return (
    <div className="bg-[#242731] rounded-lg">
      <Image src={sit} alt="sit" />
      <div className="space-y-3 flex flex-col">
        <h1 className="font-bold text-[21px] font-poppins">
          Personalise your experience
        </h1>
        <p className="font-normal text-[14px]">
          We're going to ask you a few queations to get you through the account
          set up process, and suggest strategy that best fits you.
        </p>
      </div>
    </div>
  );
};

export default OnboardingOne;
