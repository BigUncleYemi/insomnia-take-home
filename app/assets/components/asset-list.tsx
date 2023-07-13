"use client";
import { useState } from "react";
import AssetItem from "./asset-item";
import AssetExpandedView from "./asset-expanded-view";
import { Asset } from "@/app/types";
import { useAppContext } from "@/app/context/app";
import { res } from "@/app/service/nft";
import AssetItemSkeleton from "./asset-item-skeleton";
import Image from "next/image";

const AssetList = () => {
  const {
    NFTData = { ownedNfts: [], pageKey: "" },
    showNFTPage,
    loading,
    handleGetNFTdata,
  } = useAppContext();
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  console.log(NFTData);
  const handleFetchMore = async () => {
    await handleGetNFTdata(NFTData?.pageKey || "");
  };
  if (!loading && NFTData?.ownedNfts?.length as number < 1) {
    return(

      <div className="w-[100%] flex items-center justify-center mt-20 flex-col opacity-25">
      <Image
        width={100}
        height={100}
        src="/empty.svg"
        alt="empty icon"
        className="invert stroke-1  h-[200px]"
      />
      <div>
        No digital assets of NFTs found
      </div>
    </div>
    )
  }
  return (
    <>
    <div className="asset_layout w-[90%] px-5 pt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-y-20 gap-x-10 relative">
      {!loading && NFTData?.ownedNfts?.map((ownedNft: any, index: number) => (
        <AssetItem key={`${index}`} onClick={setSelectedAsset} data={ownedNft} />
      ))}

      {loading && Array(8).fill(1).map((item,index) =>  index).map(item => <AssetItemSkeleton key={item} /> )}

      {selectedAsset ? <AssetExpandedView data={selectedAsset} onClose={() => setSelectedAsset(null)} /> : null}
      
      </div>
    </>
  );
};

export default AssetList;
