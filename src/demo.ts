import { ApiPromise } from "@polkadot/api";
import { WsProvider } from "@polkadot/rpc-provider";
import SDK from "@zeitgeistpm/sdk";

const wsProvider = new WsProvider("wss://bp-rpc.zeitgeist.pm");
const api = async () => {
  await ApiPromise.create({
    provider: wsProvider,
  });
};

console.log(SDK.api.query.timestamp.now().toNumber());
