import SDK from "@zeitgeistpm/sdk";

async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bsr.zeitgeist.pm";
  const graphQlEndpoint = "https://processor.zeitgeist.pm/graphql";

  const sdk = await SDK.initialize(ZTGNET, { graphQlEndpoint });
  const marketId: number = 1;

  // get market slug
  const slug = await await (await sdk.models.fetchMarketData(marketId)).slug;

  let pagination: { pageSize: number; pageNumber: number };
  const pageSize = 1;
  const pageNumber = 1;
  const res = await sdk.models.queryAllActiveAssets(slug, pagination);
  console.log(res);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
