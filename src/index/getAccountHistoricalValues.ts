import SDK from "@zeitgeistpm/sdk";

async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bsr.zeitgeist.pm";
  const graphQlEndpoint = "https://processor.zeitgeist.pm/graphql";

  const sdk = await SDK.initialize(ZTGNET, { graphQlEndpoint });

  const account = "dE4CG3BNvTT3tX1ivBZW3AhuhvsAxw9irBw2ei3kk5mPjLS62";
  const timestamp = "2016-01-01T13:10:20Z";

  // Todo
  // Where can I get timestamp?
  const res = await sdk.models.getAccountHistoricalValues(account, timestamp);
  console.log(res);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
