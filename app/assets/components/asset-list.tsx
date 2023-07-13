"use client";
import { useState } from "react";
import AssetItem from "./asset-item";
import AssetExpandedView from "./asset-expanded-view";
import { Asset } from "@/app/types";

const AssetList = () => {
  const [assetList, setAssetList] = useState<Asset[]>([
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
  ]);

  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  return (
    <div className="asset_layout w-[90%] px-5 pt-4 mx-auto grid grid-cols-4 auto-rows-max gap-y-20 gap-x-10 relative">
      {assetList.map((item) => (
        <AssetItem key={`${item?.id}`} onClick={setSelectedAsset} data={item} />
      ))}

      {selectedAsset ? <AssetExpandedView /> : null}
    </div>
  );
};

export default AssetList;
