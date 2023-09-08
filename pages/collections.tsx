import { useContract, useContractMetadata } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import { collections } from "../const/contractAddresses";
import Link from "next/link";
import styles from "../styles/Buy.module.css";

type Props = {
    collection: string,
    key: Number;
};
  
function GetCollections({collection, key} : Props) {
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

export default function Buy() {
  return (
    <Container maxWidth="lg">
      <h1>Collections</h1>
        <div className={styles.nftGridContainer}>
            {
                collections.map((collection, ind) => (
                    <GetCollections collection={collection} key={ind}></GetCollections>
                )
                )
            }
        </div>
    </Container>
  );
}
