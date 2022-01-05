import SDK from "./../../../zeitgeistpm/tools/packages/sdk/dist";
import types from "@zeitgeistpm/sdk/dist/types";

async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bsr.zeitgeist.pm";

  type Options = {
    endpoint: string;
    graphQlEndpoint: string;
    statuses: types.MarketStatusText[];
    ordering: types.MarketsOrdering;
    orderBy: types.MarketsOrderBy;
    pageNumber: number;
    pageSize: number;
    creator?: string;
    oracle?: string;
  };
  var opts: Options = {
      endpoint: ZTGNET,
      graphQlEndpoint: "https://processor.zeitgeist.pm/graphql",
      statuses: ["Resolved"],
      orderBy: "newest",
      ordering: "desc",
      pageSize: 10,
      pageNumber:1
  };

  let {
    endpoint,
    graphQlEndpoint,
    statuses,
    ordering,
    orderBy,
    pageNumber,
    pageSize,
    creator,
    oracle,
  } = opts;

  const sdk = await SDK.initialize(ZTGNET,  { graphQlEndpoint });
  
  const res = await sdk.models.filterMarkets(
    { statuses }
  );

  for (const market of res) {
    console.log(`\nData for market of id ${market.marketId}\n`);
    console.log(market.toJSONString());
  }
}

main()
  .catch(console.error)
  .finally(() => process.exit());
