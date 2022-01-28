import SDK from "@zeitgeistpm/sdk";

async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bsr.zeitgeist.pm";

  const sdk = await SDK.initialize(ZTGNET, { logEndpointInitTime: false });
  const marketId: number = 1;

  const res = await sdk.models.getAllMarkets();
  
  res.forEach((market) => console.log(market.toJSONString()));
}

main()
  .catch(console.error)
  .finally(() => process.exit());
