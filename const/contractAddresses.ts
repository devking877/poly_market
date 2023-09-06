/** Replace the values below with the addresses of your smart contracts. */

// 1. Set up the network your smart contracts are deployed to.
// First, import the chain from the package, then set the NETWORK variable to the chain.
import { Mumbai } from "@thirdweb-dev/chains";
export const NETWORK = Mumbai;

// 2. The address of the marketplace V3 smart contract.
// Deploy your own: https://thirdweb.com/thirdweb.eth/MarketplaceV3
export const MARKETPLACE_ADDRESS = "0xf96165b06C94870C06067756fA9544580770e554";
//export const MARKETPLACE_ADDRESS = "0x83c57ec0dF015eef8401fFb7CB7f66CfA8b6Ff55";
//0x4d1823A32ba7E2Bd0F949b7703883d1830eC1130
// 3. The address of your NFT collection smart contract.
//export const NFT_COLLECTION_ADDRESS = "0x67b40fC017863743C520cDAec1B367BE1FD721f0";
//export const NFT_COLLECTION_ADDRESS = "0xaa5252144BFcf5aC61375275eF8F9F74d8A4aC99";
export const NFT_COLLECTION_ADDRESS = "0x4a5017acf1865E62Eb9cD400E0d9bD5EC0bf832b"
// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
