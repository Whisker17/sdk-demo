// Required imports
import { ApiPromise, WsProvider } from "@polkadot/api";

async function main() {
  // Initialise the provider to connect to the local node
  const ZTGNET = 'wss://bp-rpc.zeitgeist.pm'
  const provider = new WsProvider(ZTGNET);

  // Create the API and wait until ready
  const api = await ApiPromise.create({ provider });

  // Retrieve the chain & node information information via rpc calls
  const [blockNumber] = await Promise.all([
    api.rpc.chain.getHeader(),
  ]);

  console.log(
    `The block number is ${blockNumber}`
  );
}

main()
  .catch(console.error)
  .finally(() => process.exit());
