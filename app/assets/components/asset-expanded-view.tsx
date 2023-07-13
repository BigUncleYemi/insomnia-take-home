import { convertIPFSLink } from "@/app/helper";
import { Asset } from "@/app/types";
import Image from "next/image";

const AssetExpandedView = ({
  data,
  onClose,
}: {
  data: Asset;
  onClose: () => void;
}) => {
  return (
    <div
      className={`fixed z-10 overflow-y-auto top-0 w-full left-0  ${
        data ? "" : "hidden"
      }`}
      id="modal"
    >
      <div className="flex items-center justify-center min-height-100vh pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          onClick={onClose}
          className="fixed flex items-center justify-center inset-0 transition-opacity"
        >
          <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
          <span
            className={`${
              data ? "" : "hidden"
            } sm:inline-block sm:align-middle sm:h-screen`}
          >
            ​
          </span>
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[80%] bg-[#111314] rounded p-4 z-10 grid grid-cols-[1fr_2fr] gap-x-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="w-[100%] flex flex-col p-6 items-start">
              <Image
                src={convertIPFSLink(
                  data?.media?.[0]?.gateway ||
                    data?.contract?.openSea?.imageUrl ||
                    data?.rawMetadata?.image
                )}
                width={100}
                height={100}
                className="w-[100%] h-[auto]"
                alt={data?.rawMetadata?.name || data?.contract?.name}
              />
              <div className="capitalize t-[24px] font-bold mt-4 mb-10">
                {data?.rawMetadata?.name || data?.contract?.name}
              </div>
              <button className="w-[100%] py-2 text-[18px] bg-white text-black mt-4 rounded font-bold">
                Open NFT
              </button>
            </div>
            <div className="w-[100%] h-[fit-content] flex items-start flex-col border border-white rounded-lg p-4">
              <h3>Attributes</h3>
              <div className="grid grid-col-4 auto-rows-max">
                {data?.rawMetadata?.attributes.map(item => (<div key={item.trait_type} className="w-[100%] px-4 py-2 bg-gray-300 rounded-lg"></div>))}
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetExpandedView;
