"use client";

import React, { useState, useLayoutEffect } from "react";
import Image from "next/image";
import axios from "axios";

interface Currency {}

const BtcCalculator = () => {
  const [selectedCur, setSelectedCur] = useState<Array<string>>([
    "USD",
    "GBP",
    "EUR",
  ]);
  const [time, setTime] = useState<number>(5000);
  const [data, setData] = useState<any>({});
  useLayoutEffect(() => {
    const getData = () => {
      axios
        .get("https://api.coindesk.com/v1/bpi/currentprice.json")
        .then((res) => {
          setData(res?.data?.bpi);
        });
    };
    getData();
    const interval = setInterval(() => {
      getData();
    }, time);
    return () => clearInterval(interval);
  }, []);

  const handleTimeInterval = (time: number) => setTime(time);
  const handleCur = (currency: string) => {
    if (selectedCur.includes(currency)) {
      const newSelectedCur = selectedCur.filter((cur) => cur !== currency);
      setSelectedCur(newSelectedCur);
    } else {
      const newSelectedCur = [...selectedCur, currency];
      setSelectedCur(newSelectedCur);
    }
  };
  return (
    <div className="w-[100%] lg:w-[50%] flex flex-col items-center justify-center">
      <div className="w-[100%] bg-[#1E2021] rounded-[10px] py-4 px-2 md:px-4 lg:px-8">
        <div className="flex justify-between flex-col items-center  md:flex-row lg:flex-col 2xl:flex-row">
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
              <div
                onClick={() => handleCur("USD")}
                className={`flex bg-[#2d3032]  px-3 py-1 rounded-[20px] items-center cursor-pointer hover:bg-amber-700 ${
                  selectedCur.includes("USD") ? "bg-amber-700" : ""
                } hover:opacity-[75%]`}
              >
                USD
              </div>
              {/* active */}
              <div
                onClick={() => handleCur("GBP")}
                className={`flex bg-[#2d3032]  px-3 py-1 rounded-[20px] items-center cursor-pointer hover:bg-amber-700 ${
                  selectedCur.includes("GBP") ? "bg-amber-700" : ""
                } hover:opacity-[75%]`}
              >
                GBP
              </div>
              <div
                onClick={() => handleCur("EUR")}
                className={`flex bg-[#2d3032]  px-3 py-1 rounded-[20px] items-center cursor-pointer hover:bg-amber-700 ${
                  selectedCur.includes("EUR") ? "bg-amber-700" : ""
                } hover:opacity-[75%]`}
              >
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
              <div
                onClick={() => handleTimeInterval(5000)}
                className={`w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-slate-400 ${
                  time === 5000 ? "bg-slate-400" : ""
                } p-2 rounded-full`}
              >
                5s
              </div>

              <div
                onClick={() => handleTimeInterval(30000)}
                className={`w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-slate-400 ${
                  time === 30000 ? "bg-slate-400" : ""
                } p-2 rounded-full`}
              >
                30s
              </div>
              <div
                onClick={() => handleTimeInterval(60000)}
                className={`w-[40px] h-[40px] flex items-center justify-center cursor-pointer hover:bg-slate-400 ${
                  time === 60000 ? "bg-slate-400" : ""
                } p-2 rounded-full`}
              >
                1m
              </div>
            </div>
          </div>
        </div>
      </div>
      {selectedCur.length > 0 && (
        <div className="bg-[#1E2021] mt-8 md:mt-4 py-4 px-4 rounded-[10px] flex flex-wrap gap-4 md:gap-12 justify-around items-center text-[12px] sm:text-[18px] md:text-[20px] font-semi-bold">
          {selectedCur.includes("USD") && (
            <span>
              {(data?.["USD"]?.rate_float || 0).toLocaleString("en-US", {
                style: "currency",
                currency: "usd",
                maximumFractionDigits: 2,
              })}
            </span>
          )}
          {selectedCur.includes("EUR") && (
            <span>
              {(data?.["EUR"]?.rate_float || 0).toLocaleString("en-US", {
                style: "currency",
                currency: "eur",
                maximumFractionDigits: 2,
              })}
            </span>
          )}
          {selectedCur.includes("GBP") && (
            <span>
              {(data?.["GBP"]?.rate_float || 0).toLocaleString("en-US", {
                style: "currency",
                currency: "gbp",
                maximumFractionDigits: 2,
              })}
            </span>
          )}
        </div>
      )}
    </div>
  );
};

export default BtcCalculator;
