import { useContract, useContractMetadata, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import NFTGrid from "../components/NFT/NFTGrid";
import { collections, NFT_COLLECTION_ADDRESS } from "../const/contractAddresses";
import Link from "next/link";
import styles from "../styles/Buy.module.css";
import NFT from "../components/NFT/NFT";

export default function Buy() {
  return (
    <Container maxWidth="lg">
      <h1>Collections</h1>
      {
        <div className={styles.nftGridContainer}>
            {
                collections.map((collection, collind) => {
                    const {contract}=useContract(collection);
                    const {data: contractMetadata, isLoading}=useContractMetadata(contract);
                    return (
                        isLoading ? (
                            <div className={styles.nftContainer}>Loading</div>
                        ) : (
                            <Link href={`/buy/${collection}`} className={styles.nftContainer}>
                                <div>
                                    {contractMetadata?.name}<br/>
                                    {contractMetadata?.description}
                                </div>
                            </Link>
                        )
                    )
                }
                )
            }
        </div>
      }
    </Container>
  );
}