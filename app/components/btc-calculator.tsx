"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Currency {}

const BtcCalculator = () => {
  const [currencies, seturrencies] = useState<Record<string, string>>({});
  return (
    <div className="w-[100%] lg:w-[50%] flex flex-col items-center justify-center">
      <div className="w-[100%] bg-[#1E2021] rounded-[10px] py-4 px-2 md:px-4 lg:px-8">
        <div className="flex justify-between flex-col items-center  md:flex-row">
          <div className="flex mb-4 md:mb-0">
            <Image
              src="/bitcoin.svg"
              alt="bitcoin icon"
              className="dark:invert mr-2 md:mr-8"
              width={40}
              height={40}
              priority
            />
            <div className="flex gap-3 items-center text-[14px]">
              <div className="flex bg-[#2d3032]  px-3 py-1 rounded-[20px] items-center cursor-pointer hover:bg-amber-700 hover:opacity-[75%]">
                USD
              </div>
              {/* active */}
              <div className="flex bg-[#2d3032] px-3 py-1 rounded-[20px] items-center cursor-pointer hover:bg-amber-700 hover:opacity-[75%]">
                GBP
              </div>
              <div className="flex bg-[#2d3032] px-3 py-1 rounded-[20px] items-center hover:bg-amber-700 hover:opacity-[75%] cursor-pointer">
                EUR
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <Image
              src="/interval.svg"
              alt="interval icon"
              className="dark:invert"
              width={16}
              height={16}
              priority
            />
            <div className="flex items-center gap-4 ml-3 px-4 py-2 bg-[#191919] rounded-full text-[14px]">
              <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-slate-400 p-2 rounded-full">
                5s
              </div>

              <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer bg-slate-400 p-2 rounded-full">
                30s
              </div>
              <div className="w-[40px] h-[40px] flex items-center justify-center cursor-pointer  hover:bg-slate-400 p-2 rounded-full">
                1m
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#1E2021] mt-8 md:mt-4 py-4 px-10 rounded-[10px] flex flex-wrap gap-6 md:gap-16 justify-around items-center text-[14px] sm:text-[24px] md:text-[28px] font-semi-bold">
        <span>$30,000</span>
        <span>€30,000</span>
        <span>£30,000</span>
      </div>
    </div>
  );
};

export default BtcCalculator;
