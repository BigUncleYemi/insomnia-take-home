import Image from "next/image";
import React from "react";

const Sponsors = () => {
  return (
    <div className="w-[100%] bg-gray-800 h-[60px]  md:h-[100px] rounded flex items-center justify-around grayscale">
      <Image
        src="/sponsors/okb.svg"
        alt="okb icon"
        width={60}
        height={60}
        priority
        className="invert w-[30px] md:w-[60px] md:h-[60px]"
      />
      <Image
        src="/sponsors/hedera.svg"
        alt="hedera icon"
        width={60}
        height={60}
        priority
        className="invert w-[30px] md:w-[60px] md:h-[60px]"
      />

      <Image
        src="/sponsors/near.svg"
        alt="near protocol icon"
        width={60}
        height={60}
        priority
        className="invert w-[30px] md:w-[60px] md:h-[60px]"
      />
      <Image
        src="/sponsors/it.svg"
        alt="internet computer icon"
        width={60}
        height={60}
        priority
        className="invert w-[30px] md:w-[60px] md:h-[60px]"
      />
      <Image
        src="/sponsors/busd.svg"
        alt="binance usd icon"
        width={60}
        height={60}
        priority
        className="invert w-[30px] md:w-[60px] md:h-[60px]"
      />
    </div>
  );
};

export default Sponsors;
