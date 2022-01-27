import SDK, { util } from "@zeitgeistpm/sdk";

async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bsr.zeitgeist.pm";
  const sdk = await SDK.initialize(ZTGNET);
  const block = 10000;

  const blockHash = block ? await sdk.api.rpc.chain.getBlockHash(block) : null;

  if (blockHash != null) {
    console.log(blockHash);

    const data = await this.api.rpc.chain.getBlock(blockHash);
    console.log(data);
  }
}

main()
  .catch(console.error)
  .finally(() => process.exit());
