import { ApiPromise } from "@polkadot/api"
import { WsProvider } from "@polkadot/rpc-provider"
import SDK from "@zeitgeistpm/sdk"

const wsProvider = new WsProvider('wss://bp-rpc.zeitgeist.pm');
const api = await ApiPromise.create({provider: wsProvider});

console.log(api.genesisHash.toHex());