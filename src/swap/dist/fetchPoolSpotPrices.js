"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const sdk_1 = __importStar(require("@zeitgeistpm/sdk"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const ZTGNET = "wss://bsr.zeitgeist.pm";
        const sdk = yield sdk_1.default.initialize(ZTGNET);
        const assetIn = "";
        const assetOut = "";
        const poolId = 1;
        const blockHash = "";
        const blocks = "1,2";
        const blocksAsNumArray = JSON.parse(blocks).map(Number);
        const AssetIn = sdk.api.createType("Asset", sdk_1.util.AssetIdFromString(assetIn));
        const AssetOut = sdk.api.createType("Asset", sdk_1.util.AssetIdFromString(assetOut));
        const pool = yield sdk.models.fetchPoolData(Number(poolId));
        const prices = yield pool.fetchPoolSpotPrices(assetIn, assetOut, blocksAsNumArray);
        console.log(prices.map((price) => price.toString()).map(Number));
    });
}
main()
    .catch(console.error)
    .finally(() => process.exit());
//# sourceMappingURL=fetchPoolSpotPrices.js.map