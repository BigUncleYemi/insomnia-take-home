import { OwnedNftsResponse } from "alchemy-sdk";

export interface Asset {
  contract: {
    address: string;
    name: string;
    symbol: string;
    tokenType: string;
    openSea: {
      imageUrl?:string
    };
  };
  tokenId: string;
  tokenType: string;
  title: string;
  description: string;
  timeLastUpdated: string | Date;
  rawMetadata: {
    name?:string
    image: string;
    attributes: {
      value: string;
      trait_type: string;
    }[];
  };
  tokenUri: {
    gateway: string;
    raw: string;
  };
  media: [
    {
      gateway: string;
      raw: string;
    }
  ];
  balance: number;
}

export type StateType = {
  provider?: any;
  web3Provider?: any;
  address?: string | null | undefined;
  chainId?: number | null;
  loading: boolean;
  showNFTPage: string | null | boolean;
  NFTData: OwnedNftsResponse | null | undefined;
};

export interface AppContextType {
  provider?: any;
  web3Provider?: any;
  address?: string | null | undefined;
  chainId?: number | null;
  connect: () => void;
  disconnect: () => void;
  handleGetNFTdata: (data:string) => void;
  loading: boolean;
  showNFTPage: string | null | boolean;
  NFTData: OwnedNftsResponse | null | undefined;
}
