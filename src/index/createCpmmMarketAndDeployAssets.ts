import SDK, { util } from "@zeitgeistpm/sdk";
import {
  CategoryMetadata,
  DecodedMarketMetadata,
} from "@zeitgeistpm/sdk/dist/types";

async function main() {
  // Initialise the provider to connect to the local node
  // wss://bsr.zeitgeist.pm
  // wss://bp-rpc.zeitgeist.pm
  const ZTGNET = "wss://bsr.zeitgeist.pm";
  const sdk = await SDK.initialize(ZTGNET);

  // Generate signer based on seed
  const seed = "";
  const signer = util.signerFromSeed(seed);
  console.log("Sending transaction from", signer.address);

  // Construct Market metadata
  const description = "description for test";
  const slug = "test";
  const question = "Will this test work?";
  const categoriesMeta: CategoryMetadata[] = [
    { name: "Yes", ticker: "YES" },
    { name: "No", ticker: "NO" },
  ];

  const metadata: DecodedMarketMetadata = {
    description,
    slug,
    question,
    categories: categoriesMeta,
  };

  const oracle = "5CS2Q1XbRR1eYnxeXUm8fqq6PfK3WLfwUvCpNvGsYAjKtsUC";
  const cpmm = "CPMM";
  const period = "1000000";
  const marketPeriod = { block: period.split(" ").map((x) => +x) };
  const mdm = { Authorized: 1 };
  const baseAssetAmount = "1000000";
  const amts = ["1000000"];
  const wts = ["1000000"];
  const marketType = { Categorical: metadata.categories.length };

  const marketId = await sdk.models.createCpmmMarketAndDeployAssets(
    signer,
    oracle,
    marketPeriod,
    marketType,
    mdm,
    amts,
    baseAssetAmount,
    wts,
    metadata,
    false
  );
  console.log(`Categorical market created! Market Id: ${marketId}`);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
