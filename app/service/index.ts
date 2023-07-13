import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: 'VOyJCABDyj6w67NhWkHM0e1aBN3bEK4f',
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(config);

export default alchemy;