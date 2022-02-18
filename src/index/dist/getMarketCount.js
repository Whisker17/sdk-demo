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
const dist_1 = __importDefault(require("@zeitgeistpm/sdk/dist"));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const ZTGNET = "wss://bsr.zeitgeist.pm";
        const sdk = yield dist_1.default.initialize(ZTGNET);
        const res = yield sdk.models.getMarketCount();
        console.log(res);
    });
}
main()
    .catch(console.error)
    .finally(() => process.exit());
//# sourceMappingURL=getMarketCount.js.map