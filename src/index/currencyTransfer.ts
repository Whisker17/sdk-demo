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

  // These arguments are not necessarily
  const marketId = 100;
  const categoryIndex = 1;
  const scalarPos = "1";
  const poolShare = 1;
  const ztg = true;
  const dest = "5CS2Q1XbRR1eYnxeXUm8fqq6PfK3WLfwUvCpNvGsYAjKtsUC";
  const amount = 10;

  let currencyId;
  if (marketId) {
    if (categoryIndex) {
      currencyId = { CategoricalOutcome: [marketId, categoryIndex] };
    } else if (scalarPos) {
      currencyId = { ScalarOutcome: [marketId, scalarPos] };
    } else {
      throw new Error(
        "If specifying marketId, either categoryIndex or scalarPos must be provided."
      );
    }
  } else if (poolShare) {
    currencyId = { PoolShare: null };
  } else if (ztg) {
    currencyId = { Ztg: null };
  } else {
    currencyId = { CombinatorialOutcome: null };
  }

  const res = await sdk.models.currencyTransfer(
    signer,
    dest,
    currencyId,
    amount,
    false
  );

  if (res) {
    console.log(`Successfully transferred ${JSON.stringify(currencyId)}`);
  } else {
    console.log(
      `Unable to transfer ${JSON.stringify(currencyId)} - check balance.`
    );
  }
}

main()
  .catch(console.error)
  .finally(() => process.exit());
