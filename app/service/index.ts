import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: 'ACH1uPo5ResyDpYBlSijMmKB6LR_afUa',
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(config);

export default alchemy;