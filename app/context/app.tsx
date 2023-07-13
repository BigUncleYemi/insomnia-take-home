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
import { useRouter } from 'next/navigation'

type StateType = {
  provider?: any;
  web3Provider?: any;
  address?: string | null;
  chainId?: number | null;
  loading?: boolean;
};

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

const AppContext = createContext<any>({});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [state, setState] = useState<StateType>({
    provider: null,
    web3Provider: null,
    address: null,
    chainId: null,
    loading: false,
  });
  const { provider, web3Provider, address, chainId, loading } = state;

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
    setState((prevState: StateType) => ({
      ...prevState,
      provider,
      web3Provider,
      address,
      chainId: network.chainId,
      loading: false,
    }));
    router.push('/assets');
  }, []);

  const disconnect = useCallback(
    async function () {
      setState((prevState: StateType) => ({
        ...prevState,
        loading: true,
      }));
      await web3Modal.clearCachedProvider();
      setState({
        provider: null,
        web3Provider: null,
        address: null,
        chainId: null,
        loading: false,
      });
      router.push('/');
    },
    [provider]
  );

  // Auto connect to the cached provider
  useEffect(() => {
    if (web3Modal.cachedProvider) {
      connect();
    }
  }, [connect]);

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
    <AppContext.Provider value={{ provider, web3Provider, address, chainId, loading, connect, disconnect }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
