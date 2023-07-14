"use client";
import { useState } from "react";
import AssetItem from "./asset-item";
import AssetExpandedView from "./asset-expanded-view";
import { Asset } from "@/app/types";
import { useAppContext } from "@/app/context/app";
import AssetItemSkeleton from "./asset-item-skeleton";
import Image from "next/image";

const AssetList = () => {
  const { NFTData = { ownedNfts: [] }, loading } = useAppContext();
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage] = useState(20);
  const handleNext = () => {
    setPage(page + 1);
  };
  const handlePrev = () => {
    setPage(page - 1);
  };

  const total = NFTData?.ownedNfts?.length || 0;

  if (!loading && (NFTData?.ownedNfts?.length as number) < 1) {
    return (
      <div className="w-[100%] flex items-center justify-center mt-20 flex-col opacity-25">
        <Image
          width={100}
          height={100}
          src="/empty.svg"
          alt="empty icon"
          className="invert stroke-1  h-[200px]"
        />
        <div>No digital assets of NFTs found</div>
      </div>
    );
  }
  return (
    <>
      <div className="asset_layout w-[90%] px-5 pt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-y-20 gap-x-10 relative">
        {NFTData?.ownedNfts
          ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          ?.map((ownedNft: any, index: number) => (
            <AssetItem
              key={`${index}`}
              onClick={setSelectedAsset}
              data={ownedNft}
            />
          ))}

        {loading &&
          Array(8)
            .fill(1)
            .map((item, index) => index)
            .map((item) => <AssetItemSkeleton key={item} />)}

        {selectedAsset ? (
          <AssetExpandedView
            data={selectedAsset}
            onClose={() => setSelectedAsset(null)}
          />
        ) : null}
        {total > rowsPerPage && (
          <div className="flex col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-4 ml-auto mb-12">
            <a
              href="#"
              onClick={() => {
                if (page === 0) {
                  return;
                } else {
                  handlePrev();
                }
              }}
              className="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>

            <a
              href="#"
              onClick={() => {
                if (
                  page === total / rowsPerPage ||
                  (page + 1) * rowsPerPage >= total
                ) {
                  return;
                } else {
                  handleNext();
                }
              }}
              className="flex items-center justify-center px-4 h-10 ml-3 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </div>
        )}
      </div>
    </>
  );
};

export default AssetList;
