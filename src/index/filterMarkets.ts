import SDK from "@zeitgeistpm/sdk";

async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bsr.zeitgeist.pm";
  const graphQlEndpoint = "https://processor.zeitgeist.pm/graphql";

  const sdk = await SDK.initialize(ZTGNET, { graphQlEndpoint });

  const statuses = [];
  const creator = "";
  const oracle = "";
  const tags = ["Crypto"];
  const searchText = "";
  const liquidityOnly = true;
  const ordering = "desc";
  const orderBy = "newest";
  const pageSize = 10;
  const pageNumber = 1;
  const { result, count } = await sdk.models.filterMarkets(
    { statuses, creator, oracle, tags, searchText, liquidityOnly },
    {
      ordering,
      orderBy,
      pageSize,
      pageNumber,
    }
  );

  for (const market of result) {
    console.log(`\nData for market of id ${market.marketId}\n`);
    console.log(market.toJSONString());
  }

  console.log("Total count:", count);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
