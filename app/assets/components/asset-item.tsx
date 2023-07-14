import { convertIPFSLink } from "@/app/helper";
import { Asset } from "@/app/types";
import Image from "next/image";
import { useState } from "react";

const Modal = ({
  closeMoal,
  open,
}: {
  closeMoal: (value: boolean) => void;
  open: boolean;
}) => {
  return (
    <div
      className={`fixed z-10 overflow-y-auto top-0 w-full left-0  ${
        open ? "" : "hidden"
      }`}
      id="modal"
    >
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          onClick={() => closeMoal(false)}
          className="fixed inset-0 transition-opacity"
        >
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <span
            className={`${
              open ? "" : "hidden"
            } sm:inline-block sm:align-middle sm:h-screen`}
          >
            ​
          </span>
          <div
            className="inline-block align-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <label className="font-medium text-gray-800">Name</label>
              <input
                type="text"
                className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
              />
              <label className="font-medium text-gray-800">Url</label>
              <input
                type="text"
                className="w-full outline-none rounded bg-gray-100 p-2 mt-2 mb-3"
              />
            </div>
            <div className="bg-gray-200 px-4 py-3 text-right">
              <button
                type="button"
                className="py-2 px-4 bg-gray-500 text-white rounded hover:bg-gray-700 mr-2"
                onClick={() => {
                  console.log("hey");
                  closeMoal(false);
                }}
              >
                <i className="fas fa-times" /> Cancel
              </button>
              <button
                type="button"
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-700 mr-2"
              >
                <i className="fas fa-plus" /> Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const AssetItem = ({
  onClick,
  data,
}: {
  onClick: (value: Asset) => void;
  data: Asset;
}) => {
  return (
    <div
      onClick={() => onClick(data)}
      data-testid="nft-item"
      className="flex flex-col w-[100%] cursor-pointer"
    >
      <div className="w-[100%] rounded h-[350px]">
        <Image
          src={convertIPFSLink(
            data?.media?.[0]?.gateway ||
              data?.contract?.openSea?.imageUrl ||
              data?.rawMetadata?.image
          )}
          width={100}
          height={300}
          className="w-[100%] h-[100%]"
          alt={data?.rawMetadata?.name || data?.contract?.name}
        />
      </div>
      <div
        data-testid="title"
        className="mt-3 text-[18px] font-bold capitalize"
      >
        {data?.rawMetadata?.name || data?.contract?.name}
      </div>
    </div>
  );
};

export default AssetItem;
