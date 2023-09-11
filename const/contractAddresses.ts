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
export const collections = [
    "0x4a5017acf1865E62Eb9cD400E0d9bD5EC0bf832b",
    "0xbf4b5D17347E5b9e7e395dD94a2EcCBa0914ED4b",
    "0x2F7b35D6B62C0E2fAb6C20Bd49eD222e6D4d499c",
    "0x96CB89019662ec3653d463d7de2D8Ad56ff28105",
    "0x6f650Eed756Cb16B6F38193Ec70AeF2a76a8DCB5",
    "0x411b5C5f2BE86Fc7a87EB8F35FA7120143fBD06a",
    "0x32A8eE3b6182076710661BB6302C68501D534950",
    "0x1C2b51aaeCC7f490A7BFBd4aAd8Dbd539Bba0288",
    "0x1Ca7DDE307719bd8f1B3D73DC18E630FfC386988",
    "0xA23cb9bE446AE53f1E684fc8E4F40a55A932c74b",
    "0x53Bc722bCecc03ca028D4351171409f4Af3167DA",
    "0xBF7bd6d48F8AB9067e998ECc006A17Be84cf454F",
    "0xfe10869596c32B691F5dfCFE9a9551697CE78b7D",
]
export var NFT_COLLECTION_ADDRESS = "0xbf4b5D17347E5b9e7e395dD94a2EcCBa0914ED4b"
// (Optional) Set up the URL of where users can view transactions on
// For example, below, we use Mumbai.polygonscan to view transactions on the Mumbai testnet.
export const ETHERSCAN_URL = "https://mumbai.polygonscan.com";
