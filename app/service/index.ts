import { Alchemy, Network } from "alchemy-sdk";

const config = {
  apiKey: process.env.API_kEY_AL,
  network: Network.ETH_SEPOLIA,
};
const alchemy = new Alchemy(config);

export default alchemy;