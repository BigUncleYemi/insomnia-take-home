"use client";

import Link from "next/link";
import { useAppContext } from "../context/app";
import { parseAddress } from "../helper";

const WallectConnectButton = ({
  showAssetLink = false,
}: {
  showAssetLink?: boolean;
}) => {
  const { connect, loading, address, disconnect } = useAppContext();
  const label = loading ? "Connecting wallet" : "Connect wallet";
  return (
    <>
      {address ? (
        <div className="flex items-center">
          {showAssetLink && (
            <Link className="mr-8 text-[16px] font-semi-bold" href="/assets">
              Assets
            </Link>
          )}
          <button
            onClick={disconnect}
            disabled={loading}
            className="flex items-center gap-2 bg-slate-700 pl-2 pr-4 py-2 rounded-full cursor-pointer disbled:opacity-25"
          >
            <div className="w-[30px] h-[30px] rounded-full bg-amber-700" />
            <div className="text-[14px] font-light">
              {address && parseAddress(address)}
            </div>
          </button>{" "}
        </div>
      ) : (
        <button
          onClick={connect}
          disabled={loading}
          className="whitespace-nowrap px-4 py-1 rounded-full border bg-white text-black text-[12px] md:text-[16px] cursor-pointer disbled:opacity-25"
        >
          {label}
        </button>
      )}
    </>
  );
};

export default WallectConnectButton;
