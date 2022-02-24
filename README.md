# Zeitgeist SDK Documentation

![sdk version](https://img.shields.io/github/v/tag/zeitgeistpm/tools?label=sdk)

## Common

| Function Name                                                                           | Description                      |
| --------------------------------------------------------------------------------------- | -------------------------------- |
| [getBlockInfo](https://github.com/Whisker17/sdk-demo/tree/main/src/common#getblockinfo) | get block info in Zeitgeist.     |
| [getChainInfo](https://github.com/Whisker17/sdk-demo/tree/main/src/common#getchaininfo) | get chain info about Zeitgeiest. |

## Index

### Create Markets

| Function Name                                                                                                                | Description                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [createCategoricalMarket](https://github.com/Whisker17/sdk-demo/tree/main/src/index#createcategoricalmarket)                 | create a categorical market in the Zeitgeiest.                                                                                                                                   |
| [createCpmmMarketAndDeployAssets](https://github.com/Whisker17/sdk-demo/tree/main/src/index#createcpmmmarketanddeployassets) | Create a market using CPMM scoring rule, buy a complete set of the assets used and deploy within and deploy an arbitrary amount of those that's greater than the minimum amount. |
| [createScalarMarket](https://github.com/Whisker17/sdk-demo/tree/main/src/index#createscalarmarket)                           | create a scalar market in the Zeitgeiest.                                                                                                                                        |

---

### Get Markets' infos

| Function Name                                                                                                      | Description                                                                        |
| ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------- |
| [getAllMarketIds](https://github.com/Whisker17/sdk-demo/tree/main/src/index#getallmarketids)                       | get all market IDs in the Zeitgeiest.                                              |
| [getAllMarkets](https://github.com/Whisker17/sdk-demo/tree/main/src/index#getallmarkets)                           | get all market in the Zeitgeiest.                                                  |
| [fetchMarketData](https://github.com/Whisker17/sdk-demo/tree/main/src/index#fetchmarketdata)                       | fetch specify market's infomation by id in the Zeitgeiest.                         |
| [getMarketCount](https://github.com/Whisker17/sdk-demo/tree/main/src/index#getmarketcount)                         | get market counts in the Zeitgeiest.                                               |
| [fetchDisputes](https://github.com/Whisker17/sdk-demo/tree/main/src/index#fetchpooldata)                           | get all market IDs in the Zeitgeiest.                                              |
| [fetchPoolData](https://github.com/Whisker17/sdk-demo/tree/main/src/Index#fetchpooldata)                           | get specify pool infomation in the Zeitgeiest.                                     |
| [assetSpotPricesInZtg](https://github.com/Whisker17/sdk-demo/tree/main/src/index#assetspotpricesinztg)             | find prices at a particular block in the Zeitgeiest.                               |
| [getBlockData](https://github.com/Whisker17/sdk-demo/tree/main/src/index#getblockdata)                             | get block infomation by blockhash in the Zeitgeiest.                               |
| [queryMarket](https://github.com/Whisker17/sdk-demo/tree/main/src/index#querymarket)                               | query market by GraphQL in the Zeitgeiest.                                         |
| [queryMarketsCount](https://github.com/Whisker17/sdk-demo/tree/main/src/index#querymarketscount)                   | query counts of markets for specified filter options by GraphQL in the Zeitgeiest. |
| [queryAllActiveAssets](https://github.com/Whisker17/sdk-demo/tree/main/src/index#queryallactiveassets)             | query all active assets from subsquid indexer in the Zeitgeiest.                   |
| [filterMarkets](https://github.com/Whisker17/sdk-demo/tree/main/src/index#filtermarkets)                           | get all market in the Zeitgeiest.                                                  |
| [indexTransferRecipients](https://github.com/Whisker17/sdk-demo/tree/main/src/index#indextransferrecipients)       | query subsquid indexer for market data with pagination in the Zeitgeiest.          |
| [currencyTransfer](https://github.com/Whisker17/sdk-demo/tree/main/src/index#currencytransfer)                     | transfer specified asset from self to any account in the Zeitgeiest.               |
| [getAccountBalances](https://github.com/Whisker17/sdk-demo/tree/main/src/index#getAccountBalances)                 | get balance of specific account.                                                   |
| [getMarketDataForPoolsList](https://github.com/Whisker17/sdk-demo/tree/main/src/index#getMarketDataForPoolsList)   | get market datas by using pool's data                                              |
| [getAssetsForPoolsList](https://github.com/Whisker17/sdk-demo/tree/main/src/index#getAssetsForPoolsList)           | get assets datas by using pool's data                                              |
| [getAssetPriceHistory](https://github.com/Whisker17/sdk-demo/tree/main/src/index#getAssetPriceHistory)             | get assets' historic prices                                                        |
| [getAccountHistoricalValues](https://github.com/Whisker17/sdk-demo/tree/main/src/index#getAccountHistoricalValues) | get accounts' historic datas                                                       |
| [filterPools](https://github.com/Whisker17/sdk-demo/tree/main/src/index#filterPools)                               | filter some pools from Zeitgeist                                                   |

## Market

| Function Name                                                                                           | Description                                                                                                 |
| ------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| [toJSONString](https://github.com/Whisker17/sdk-demo/tree/main/src/market#tojsonstring)                 | convert market object into string.                                                                          |
| [toFilteredJSONString](https://github.com/Whisker17/sdk-demo/tree/main/src/market#tofilteredjsonstring) | convert market object into string with filters.                                                             |
| [filterMarketData](https://github.com/Whisker17/sdk-demo/tree/main/src/market#filtermarketdata)         | Populate only selected attributes from the market data defined using filter.                                |
| [getEndTimestamp](https://github.com/Whisker17/sdk-demo/tree/main/src/market#getendtimestamp)           | get timestamp at the end of the market period.                                                              |
| [getPoolId](https://github.com/Whisker17/sdk-demo/tree/main/src/market#getpoolid)                       | get pool id to be used for fetching data using `sdk.models.market.getPool()`.                               |
| [getPool](https://github.com/Whisker17/sdk-demo/tree/main/src/market#getpool)                           | recreate swap pool for this market using data fetched with `poolId`.                                        |
| [getDisputes](https://github.com/Whisker17/sdk-demo/tree/main/src/market#getdisputes)                   | fetch disputes for this market using unique identifier `marketId`.                                          |
| [deploySwapPool](https://github.com/Whisker17/sdk-demo/tree/main/src/market#deployswappool)             | create swap pool for this market via `api.tx.predictionMarkets.deploySwapPoolForMarket(marketId, weights)`. |
| [assetSpotPricesInZtg](https://github.com/Whisker17/sdk-demo/tree/main/src/market#assetspotpricesinztg) | find prices at a particular block using unique identifier.                                                  |
| [buyCompleteSet](https://github.com/Whisker17/sdk-demo/tree/main/src/market#buycompleteset)             | buy a complete set of outcome shares for the market.                                                        |
| [sellCompleteSet](https://github.com/Whisker17/sdk-demo/tree/main/src/market#sellcompleteset)           | sell/destroy a complete set of outcome shares for the market.                                               |
| [reportOutcome](https://github.com/Whisker17/sdk-demo/tree/main/src/market#reportoutcome)               | report an outcome for the market.                                                                           |
| [dispute](https://github.com/Whisker17/sdk-demo/tree/main/src/market#dispute)                           | submit a disputed outcome for the market.                                                                   |
| [redeemShares](https://github.com/Whisker17/sdk-demo/tree/main/src/market#redeemshares)                 | redeem the winning shares for the market.                                                                   |
| [approve](https://github.com/Whisker17/sdk-demo/tree/main/src/market#approve)                           | approve the `Proposed` market that is waiting for approval from the advisory committee.                     |
| [reject](https://github.com/Whisker17/sdk-demo/tree/main/src/market#reject)                             | reject the `Proposed` market that is waiting for approval from the advisory committee.                      |
| [cancelAdvised](https://github.com/Whisker17/sdk-demo/tree/main/src/market#canceladvised)               | allow the proposer of the market that is currently in a `Proposed` state to cancel the market proposal.     |

## Swap

| Function Name                                                                                                         | Description                                                           |
| --------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| [toJSONString](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#tojsonstring)                                 | convert market object into string.                                    |
| [getSpotPrice](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#getspotprice)                                 | get spot price in the specified block.                                |
| [assetSpotPricesInZtg](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#assetspotpricesinztg)                 | find prices at a particular block using unique identifier.            |
| [fetchPoolSpotPrices](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#fetchpoolspotprices)                   | fetch spot prices of specified blocks.                                |
| [sharesId](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#sharesid)                                         | fetch all shares' ids.                                                |
| [accountId](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#accountid)                                       | fetch account id in this pool.                                        |
| [joinPool](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#joinpool)                                         | join pool.                                                            |
| [poolJoinWithExactAssetAmount](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#pooljoinwithexactassetamount) | join exact asset amount to the pool.                                  |
| [joinPoolMultifunc](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#joinpoolmultifunc)                       | join pool.<br/>Three substrate join_pool_xxx functions in one         |
| [exitPool](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#exitpool)                                         | retrieve a given set of assets from pool to the signer.               |
| [swapExactAmountIn](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#swapexactamountin)                       | swap a given `assetAmountIn` of the `assetIn/assetOut` pair to pool.  |
| [swapExactAmountOut](https://github.com/Whisker17/sdk-demo/tree/main/src/swap#swapexactamountout)                     | swap a given `assetAmountOut` of the `assetIn/assetOut` pair to pool. |
