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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sdk_1 = __importDefault(require("@zeitgeistpm/sdk"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const ZTGNET = "wss://bsr.zeitgeist.pm";
        const sdk = yield sdk_1.default.initialize(ZTGNET);
        const block = 10000;
        const blockHash = block ? yield sdk.api.rpc.chain.getBlockHash(block) : null;
        const marketId = 1;
        const market = yield sdk.models.fetchMarketData(Number(marketId));
        console.log(market.assetSpotPricesInZtg(blockHash));
    });
}
main()
    .catch(console.error)
    .finally(() => process.exit());
//# sourceMappingURL=assetSpotPricesInZtg.js.map