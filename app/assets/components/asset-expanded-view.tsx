import { convertIPFSLink } from "@/app/helper";
import { Asset } from "@/app/types";
import Image from "next/image";

const AssetExpandedView = ({data, onClose}:{data:Asset; onClose: () =>  void}) => {
  return (
    <div
    className={`fixed z-10 overflow-y-auto top-0 w-full left-0  ${data ? "" : "hidden"}`}
    id="modal"
  >
    <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div onClick={
        onClose
      } className="fixed flex items-center justify-center inset-0 transition-opacity">
        <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
        <span className={`${data ? "" : "hidden"} sm:inline-block sm:align-middle sm:h-screen`}>
          ​
        </span>
        <div
        onClick={e => e.stopPropagation()}
            className="w-[80%] h-[800px] bg-gray-600 rounded p-4 z-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="w-[35%] flex flex-col">
            <Image
          src={convertIPFSLink(
            data?.media?.[0]?.gateway ||
              data?.contract?.openSea?.imageUrl ||
              data?.rawMetadata?.image
          )}
          width={100}
          height={300}
          className="w-[300px] h-[100%]"
          alt={data?.rawMetadata?.name || data?.contract?.name}
        />
            </div>
           
          </div>
        </div></div></div>
  );
};

export default AssetExpandedView;
