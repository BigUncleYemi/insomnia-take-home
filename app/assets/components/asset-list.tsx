"use client";
import { useState } from "react";
import AssetItem from "./asset-item";
import AssetExpandedView from "./asset-expanded-view";
import { Asset } from "@/app/types";
import { useAppContext } from "@/app/context/app";
import { res } from "@/app/service/nft";
import AssetItemSkeleton from "./asset-item-skeleton";



const AssetList = () => {
  const { NFTData = { ownedNfts: [] }, showNFTPage, loading } = useAppContext();
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  console.log(NFTData)
  return (
    <div className="asset_layout w-[90%] px-5 pt-4 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-max gap-y-20 gap-x-10 relative">
    {!loading && NFTData?.ownedNfts?.map((ownedNft: any, index: number) => (
        <AssetItem key={`${index}`} onClick={setSelectedAsset} data={ownedNft} />
      ))}

      {loading && Array(8).fill(1).map((item,index) =>  index).map(item => <AssetItemSkeleton key={item} /> )}

      {selectedAsset ? <AssetExpandedView data={selectedAsset} onClose={() => setSelectedAsset(null)} /> : null}
    </div>
  );
};

export default AssetList;
