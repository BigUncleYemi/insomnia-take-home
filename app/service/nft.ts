import alchemy from "./index";

const getAddressNFT = async (address: string ) => await alchemy.nft.getNftsForOwner(address);

export {
  getAddressNFT
};
