"use client";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import { ethers } from "ethers";
import { useRouter } from "next/navigation";
import { getAddressNFT } from "../service/nft";
import { AppContextType, StateType } from "../types";

let initialState: AppContextType = {
  disconnect: () => {},
  connect: () => {},
  handleGetNFTdata: () => {},
  loading: false,
  showNFTPage: false,
  NFTData: null,
  provider: null,
  web3Provider: null,
  address: null,
  chainId: null,
};

const AppContext = createContext<AppContextType>(initialState);

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
  },
};

let web3Modal: any | null = null;
if (typeof window !== "undefined") {
  web3Modal = new Web3Modal({
    network: "sepolia", // optional
    cacheProvider: true,
    providerOptions, // required
  });
}

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [state, setState] = useState<StateType>({
    provider: null,
    web3Provider: null,
    address: null,
    chainId: null,
    loading: false,
    NFTData: null,
    showNFTPage: false,
  });

  const {
    provider,
    web3Provider,
    address,
    chainId,
    loading,
    NFTData,
    showNFTPage,
  } = state;

  const handleGetNFTdata = async => (pageKey: string) => {
    try {
      const res = await getAddressNFT(address, pageKey);
      // @ts-ignore
      if (res?.ownedNfts?.length < 1) {
        setState((prevState: StateType) => ({
          ...prevState,
          provider,
          web3Provider,
          address,
          chainId: network.chainId,
          loading: false,
          showNFTPage: "empty",
        }));
      } else {
        setState((prevState: StateType) => ({
          ...prevState,
          provider,
          web3Provider,
          address,
          chainId: network.chainId,
          loading: false,
          showNFTPage: "has-data",
          NFTData: res,
        }));
      }
    } catch (error: any) {
      console.log(error);
      setState((prevState: StateType) => ({
        ...prevState,
        provider,
        web3Provider,
        address,
        chainId: network.chainId,
        loading: false,
        showNFTPage: "error",
      }));
    }
    
  }
  const connect = useCallback(async function () {
    setState((prevState: StateType) => ({
      ...prevState,
      loading: true,
    }));
    const provider = await web3Modal.connect();
    const web3Provider = new ethers.providers.Web3Provider(provider);
    const signer = web3Provider.getSigner();
    const address = await signer.getAddress();
    const network = await web3Provider.getNetwork();
    await handleGetNFTdata();
    router.push("/assets");
  }, []);

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

  const disconnect = useCallback(
    async function () {
      setState((prevState: StateType) => ({
        ...prevState,
        loading: true,
      }));
      await web3Modal.clearCachedProvider();
      setState({
        NFTData: null,
        showNFTPage: false,
        provider: null,
        web3Provider: null,
        address: null,
        chainId: null,
        loading: false,
      });
      router.push("/");
    },
    [provider]
  );

  useEffect(() => {
    if (provider?.on) {
      const handleAccountsChanged = (accounts: string[]) => {
        console.log("accountsChanged", accounts);
        setState((prevState: StateType) => ({
          ...prevState,
          address: accounts[0],
        }));
      };

      const handleChainChanged = (_hexChainId: string) => {
        window.location.reload();
      };

      const handleDisconnect = (error: { code: number; message: string }) => {
        console.log("disconnect", error);
        disconnect();
      };

      provider.on("accountsChanged", handleAccountsChanged);
      provider.on("chainChanged", handleChainChanged);
      provider.on("disconnect", handleDisconnect);
      return () => {
        if (provider.removeListener) {
          provider.removeListener("accountsChanged", handleAccountsChanged);
          provider.removeListener("chainChanged", handleChainChanged);
          provider.removeListener("disconnect", handleDisconnect);
        }
      };
    }
  }, [provider, disconnect]);

  return (
    <AppContext.Provider
      value={{
        showNFTPage,
        provider,
        web3Provider,
        address,
        chainId,
        loading,
        NFTData,
        connect,
        handleGetNFTdata,
        disconnect
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
