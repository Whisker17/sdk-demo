# Zeitgeist SDK Documentation



## Common

| Function Name                                                | Description                      |
| ------------------------------------------------------------ | -------------------------------- |
| [getBlockInfo](https://github.com/Whisker17/sdk-demo/tree/main/src/common#getblockinfo) | get block info in Zeitgeist.     |
| [getChainInfo](https://github.com/Whisker17/sdk-demo/tree/main/src/common#getChainInfo) | get chain info about Zeitgeiest. |



## Index

| Function Name                                                | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [getAllMarketIds](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#getAllMarketIds) | get all market IDs in the Zeitgeiest.                        |
| [getAllMarkets](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#getAllMarkets) | get all market in the Zeitgeiest.                            |
| [createCategoricalMarket](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#createCategoricalMarket) | create a categorical market in the Zeitgeiest.               |
| [createScalarMarket](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#createScalarMarket) | create a scalar market in the Zeitgeiest.                    |
| [fetchMarketData](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#fetchMarketData) | fetch specify market's infomation by id in the Zeitgeiest.   |
| [getMarketCount](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#getMarketCount) | get market counts in the Zeitgeiest.                         |
| [fetchDisputes](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#fetchDisputes) | get all market IDs in the Zeitgeiest.                        |
| [fetchPoolData](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#fetchPoolData) | get specify pool infomation in the Zeitgeiest.               |
| [assetSpotPricesInZtg](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#assetSpotPricesInZtg) | find prices at a particular block in the Zeitgeiest.         |
| [getBlockData](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#getBlockData) | get block infomation by blockhash in the Zeitgeiest.         |
| [indexTransferRecipients](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#indexTransferRecipients) | get all market IDs in the Zeitgeiest.                        |
| [currencyTransfer](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#currencyTransfer) | transfer specified asset from self to any account in the Zeitgeiest. |



## Market

| Function Name                                                | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [toJSONString](https://github.com/Whisker17/sdk-demo/tree/main/src/market#toJSONString) | convert market object into string.                           |
| [toFilteredJSONString](https://github.com/Whisker17/sdk-demo/tree/main/src/market#toFilteredJSONString) | convert market object into string with filters.              |
| [filterMarketData](https://github.com/Whisker17/sdk-demo/tree/main/src/market#filterMarketData) | Populate only selected attributes from the market data defined using filter. |
| [getEndTimestamp](https://github.com/Whisker17/sdk-demo/tree/main/src/market#getEndTimestamp) | get timestamp at the end of the market period.               |
| [getPoolId](https://github.com/Whisker17/sdk-demo/tree/main/src/market#getPoolId) | get pool id to be used for fetching data using `sdk.models.market.getPool()`. |
| [getPool](https://github.com/Whisker17/sdk-demo/tree/main/src/market#getPool) | recreate swap pool for this market using data fetched with `poolId`. |
| [getDisputes](https://github.com/Whisker17/sdk-demo/tree/main/src/market#getDisputes) | fetch disputes for this market using unique identifier `marketId`. |
| [deploySwapPool](https://github.com/Whisker17/sdk-demo/tree/main/src/market#deploySwapPool) | create swap pool for this market via `api.tx.predictionMarkets.deploySwapPoolForMarket(marketId, weights)`. |
| [assetSpotPricesInZtg](https://github.com/Whisker17/sdk-demo/tree/main/src/market#assetSpotPricesInZtg) | find prices at a particular block using unique identifier.   |
| [buyCompleteSet](https://github.com/Whisker17/sdk-demo/tree/main/src/market#buyCompleteSet) | buy a complete set of outcome shares for the market.         |
| [sellCompleteSet](https://github.com/Whisker17/sdk-demo/tree/main/src/market#sellCompleteSet) | sell/destroy a complete set of outcome shares for the market. |
| [reportOutcome](https://github.com/Whisker17/sdk-demo/tree/main/src/market#reportOutcome) | report an outcome for the market.                            |
| [dispute](https://github.com/Whisker17/sdk-demo/tree/main/src/market#dispute) | submit a disputed outcome for the market.                    |
| [redeemShares](https://github.com/Whisker17/sdk-demo/tree/main/src/market#redeemShares) | redeem the winning shares for the market.                    |
| [approve](https://github.com/Whisker17/sdk-demo/tree/main/src/market#approve) | approve the `Proposed` market that is waiting for approval from the advisory committee. |
| [reject](https://github.com/Whisker17/sdk-demo/tree/main/src/market#reject) | reject the `Proposed` market that is waiting for approval from the advisory committee. |
| [cancelAdvised](https://github.com/Whisker17/sdk-demo/tree/main/src/market#cancelAdvised) | allow the proposer of the market that is currently in a `Proposed` state to cancel the market proposal. |

## Swap

| Function Name                                                | Description                                                  |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [toJSONString](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#toJSONString) | convert market object into string.                           |
| [getSpotPrice](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#getSpotPrice) | get spot price in the specified block.                       |
| [assetSpotPricesInZtg](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#assetSpotPricesInZtg) | find prices at a particular block using unique identifier.   |
| [fetchPoolSpotPrices](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#fetchPoolSpotPrices) | fetch spot prices of specified blocks.                       |
| [sharesId](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#sharesId) | fetch all shares' ids.                                       |
| [accountId](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#accountId) | fetch account id in this pool.                               |
| [joinPool](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#joinPool) | join pool.                                                   |
| [poolJoinWithExactAssetAmount](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#poolJoinWithExactAssetAmount) | join exact asset amount to the pool.                         |
| [joinPoolMultifunc](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#joinPoolMultifunc) | join pool.<br/>Three substrate join_pool_xxx functions in one |
| [exitPool](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#exitPool) | retrieve a given set of assets from pool to the signer.      |
| [swapExactAmountIn](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#swapExactAmountIn) | swap a given `assetAmountIn` of the `assetIn/assetOut` pair to pool. |
| [swapExactAmountOut](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#swapExactAmountOut) | swap a given `assetAmountOut` of the `assetIn/assetOut` pair to pool. |

