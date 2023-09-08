import { useContract, useNFTs } from "@thirdweb-dev/react";
import React from "react";
import Container from "../../components/Container/Container";
import NFTGrid from "../../components/NFT/NFTGrid";
import { useRouter } from "next/router";

export default function Buy() {
  // Load all of the NFTs from the NFT Collection
  const router=useRouter();
  const collection = router.query.collection;
  const { contract } = useContract(collection);
  const { data, isLoading } = useNFTs(contract);
  console.log(collection);

  return (
    <Container maxWidth="lg">
      <h1>Buy NFTs</h1>
      <p>Browse which NFTs are available from the collection.</p>
      <NFTGrid
        data={data}
        isLoading={isLoading}
        collection={collection}
        emptyText={
          "Looks like there are no NFTs in this collection. Did you import your contract on the thirdweb dashboard? https://thirdweb.com/dashboard"
        }
      />
    </Container>
  );
}
