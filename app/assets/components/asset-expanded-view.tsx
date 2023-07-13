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
            className="relative h-[100vh] lg:h-[fit-content] overflow-y-auto w-[100%] sm:w-[97%] md:w-[90%] lg:w-[80%] bg-[#111314] rounded p-4 z-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-x-4 items-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div onClick={onClose} className="cursor-pointer fixed lg:absolute drop-shadow-xl top-[20px] right-[20px] sm:right-[40px] md:right-[80px] lg:right-[20px] w-[40px] h-[40px] rounded-full bg-gray-500 text-[24px] font-bold text-black">
              x
            </div>

            <div className="w-[100%] flex flex-col p-6 items-start">
              <Image
                src={convertIPFSLink(
                  data?.media?.[0]?.gateway ||
                    data?.contract?.openSea?.imageUrl ||
                    data?.rawMetadata?.image
                )}
                width={100}
                height={100}
                className="mx-[auto] w-[300px] h-[auto]"
                alt={data?.rawMetadata?.name || data?.contract?.name}
              />
            </div>
            <div className="w-[100%] h-[fit-content] flex items-start flex-col  p-4">
              <div className="mx-auto lg:mx-0 uppercase t-[18px] text-gray-300 font-bold mt-4 mb-10 opacity-[75%]">
                {data?.rawMetadata?.name || data?.contract?.name}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-4 auto-rows-max w-[100%] gap-4 border-b border-t py-6 border-white">
                {data?.rawMetadata?.attributes.map((item) => (
                  <div
                    key={item.trait_type}
                    className="w-[100%] px-4 py-2 opacity-[75%] rounded-lg"
                  >
                    <div className="text-[12px] text-gray-300 font-bold uppercase">
                      {item.trait_type}
                    </div>

                    <div className="text-[16px] text-gray-500 font-bold uppercase">
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 auto-rows-max w-[100%] gap-4 mt-10">
                <div className="w-[100%] px-4 py-2 opacity-[75%] rounded-lg">
                  <div className="text-[12px] text-gray-300 font-bold uppercase whitespace-normal ">
                    Address
                  </div>
                  <span className="text-[16px] text-gray-500 font-bold break-all">
                    {data?.contract?.address}
                  </span>
                </div>
                <div className="w-[100%] px-4 py-2 opacity-[75%] rounded-lg">
                  <div className="text-[12px] text-gray-300 font-bold uppercase">
                    Token type
                  </div>
                  <div className="text-[16px] text-gray-500 font-bold uppercase">
                    {data?.contract?.tokenType}
                  </div>
                </div>
                
                  <div className="w-[100%] px-4 py-2 opacity-[75%] rounded-lg">
                    <div className="text-[12px] text-gray-300 font-bold uppercase">
                      description
                    </div>
                    <div className="text-[16px] text-gray-500 font-bold uppercase">
                      {data?.description || "No description"}
                    </div>
                  </div>
                
                <div className="w-[100%] px-4 py-2 opacity-[75%] rounded-lg">
                  <div className="text-[12px] text-gray-300 font-bold uppercase">
                    symbol
                  </div>
                  <div className="text-[16px] text-gray-500 font-bold uppercase">
                    {data?.contract?.symbol}
                  </div>
                </div>
                <div className="w-[100%] px-4 py-2 opacity-[75%] rounded-lg">
                  <div className="text-[12px] text-gray-300 font-bold uppercase">
                    token id
                  </div>
                  <div className="text-[16px] text-gray-500 font-bold uppercase">
                    {data?.tokenId}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssetExpandedView;
