import Image from "next/image";
import BtcCalculator from "./btc-calculator";

const Hero = () => {
  return (
    <div className="lg:flex w-[100%] mt-20 lg:mt-30 mb-20 md:mb-40">
      {/* Description */}
      <div className="lg:flex mt-10 w-[100%] lg:w-[50%] items-start flex-col mb-20 lg:mb-0">
        <div className="flex text-[12px] gap-2 flex-col lg:flex-row">
          <div className="flex bg-[#1E2021] px-4 py-1 rounded-[20px] items-center w-[fit-content] mb-1 lg:mb-0">
            <div className="bg-slate-400 w-[24px] h-[24px] rounded-full flex items-center justify-center">
              <Image
                src="/infinity.svg"
                alt="infinity icon"
                className="dark:invert"
                width={16}
                height={16}
                priority
              />
            </div>
            <span className="ml-2 text-[12px] lg:text-[14px]">
              Licensed by Bank of Bahrain
            </span>
          </div>
          <div className="flex bg-[#1E2021] px-4 py-1 rounded-[20px] items-center w-[fit-content]">
            <div className="bg-amber-700 w-[24px]  h-[24px] rounded-full flex items-center justify-center">
              <Image
                src="/infinity.svg"
                alt="infinity icon"
                className="dark:invert"
                width={16}
                height={16}
                priority
              />
            </div>
            <span className="ml-2 text-[12px] lg:text-[14px]">
              No transaction limit
            </span>
          </div>
        </div>
        <div className="text-[28px] lg:text-[48px] font-bold w-[90%] lg:w-[75%] mt-4">
          Buy & Sell Digital Assets in the ZENDIA region
        </div>
        <div className="flex flex-col font-thin mt-5 text-[12px] lg:text-[16px]">
          <span className="mb-2 lg:mb-0">
            ZENDIA is the easiest, safest and fastest way to buy and sell
            cryptocurrency and crypto assets.
          </span>
          <span>
            Our goal is to provide direct and regulated access to digital assets
            world.
          </span>
        </div>
      </div>

      <BtcCalculator />
    </div>
  );
};

export default Hero;
