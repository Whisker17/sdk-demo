import SDK, { util } from "@zeitgeistpm/sdk";

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
  const title = "test";
  const question = "Will this test work?";
  const bounds = [0,100];

  const oracle = "5CS2Q1XbRR1eYnxeXUm8fqq6PfK3WLfwUvCpNvGsYAjKtsUC";
  const advised = "Advised";
  const cpmm = "CPMM";
  const period = "1000000";
  const marketPeriod = { block: period.split(" ").map((x) => +x) };
  const mdm = { Authorized: 1 };

  const marketId = await sdk.models.createScalarMarket(
    signer,
    title,
    description,
    oracle,
    marketPeriod,
    advised,
    bounds,
    mdm,
    cpmm,
    false
  );
  console.log(`Categorical market created! Market Id: ${marketId}`);
}

main()
  .catch(console.error)
  .finally(() => process.exit());
