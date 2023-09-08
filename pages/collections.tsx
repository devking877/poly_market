import { useContract, useContractMetadata } from "@thirdweb-dev/react";
import React from "react";
import Container from "../components/Container/Container";
import { collections } from "../const/contractAddresses";
import Link from "next/link";
import styles from "../styles/Buy.module.css";

export default function Buy() {
    let metaDatas : any[] = [];
    collections.map((collection)=>{
        const {contract}=useContract(collection);
        const {data: contractMetadata, isLoading}=useContractMetadata(contract);
        metaDatas.push(contractMetadata);
    })
  return (
    <Container maxWidth="lg">
      <h1>Collections</h1>
        <div className={styles.nftGridContainer}>
            {
                metaDatas.map((metadata, ind) => {
                    // const {contract}=useContract(collection);
                    // const {data: contractMetadata, isLoading}=useContractMetadata(contract);
                    return (
                        <Link href={`/buy/${collections[ind]}`} className={styles.nftContainer}>
                            <div>
                                {metadata?.name}<br/>
                                {metadata?.description}
                            </div>
                        </Link>
                    )
                }
                )
            }
        </div>
    </Container>
  );
}
