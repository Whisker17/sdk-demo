"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@polkadot/api");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const ZTGNET = 'wss://bp-rpc.zeitgeist.pm';
        const provider = new api_1.WsProvider(ZTGNET);
        const api = yield api_1.ApiPromise.create({ provider });
        const [chain, nodeName, nodeVersion] = yield Promise.all([
            api.rpc.system.chain(),
            api.rpc.system.name(),
            api.rpc.system.version(),
        ]);
        console.log(`You are connected to chain ${chain} using ${nodeName} v${nodeVersion}`);
    });
}
main()
    .catch(console.error)
    .finally(() => process.exit());
//# sourceMappingURL=getChainInfo.js.map