import SDK from "@zeitgeistpm/sdk/dist";

async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bp-rpc.zeitgeist.pm";

  const sdk = await SDK.initialize(ZTGNET);

  const res = await sdk.models.getMarketCount();

  console.log(res);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
