
import Skeleton from "@/app/components/skeleton"

const AssetItemSkeleton = () => {
  return (
    <div>
      <Skeleton width="100%" height="300px" />
      <div className="mt-3 text-[14px] font-bold">
      <Skeleton width="60%" height="14px" />
      </div>
      <div className="w-[50px] bg-slate-700 h-[50px] rounded-full mt-4 opacity-50"></div>
    </div>
  )
}

export default AssetItemSkeleton
