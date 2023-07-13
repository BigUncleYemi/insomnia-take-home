import { Asset } from "@/app/types";
import { data } from "autoprefixer";

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
      className="flex flex-col w-[100%] cursor-pointer"
    >
      <div className="w-[100%] rounded bg-amber-600 h-[300px]"></div>
      <div className="mt-3 text-[14px] font-bold">Name</div>
      <div className="w-[50px] bg-slate-700 h-[50px] rounded-full mt-4 opacity-50"></div>
    </div>
  );
};

export default AssetItem;
