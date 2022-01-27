import SDK, { util } from "@zeitgeistpm/sdk";

async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bsr.zeitgeist.pm";
  const sdk = await SDK.initialize(ZTGNET);
  const block = 10000;

  const blockHash = block ? await sdk.api.rpc.chain.getBlockHash(block) : null;

  const res = await sdk.models.assetSpotPricesInZtg(blockHash);

  if (block) {
    console.log("Block:", block);
  }
  console.log(res);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
