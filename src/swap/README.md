# Market
### toJSONString

You can use this function to converts market object into string.

```typescript
const sdk = await SDK.initialize(endpoint);

const res = await sdk.models.getAllMarkets();

res.forEach((market) => console.log(market.toJSONString()));
```


### getSpotPrice

You can use this function to get spot price in the specified block.

```typescript
const price = await pool.getSpotPrice(AssetIn, AssetOut, blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./getSpotPrice.ts)

### assetSpotPricesInZtg

You can use this function to fetch spot prices of all assets in this market
Can be used to find prices at a particular block using unique identifier.

```typescript
const res = market.assetSpotPricesInZtg(blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./assetSpotPricesInZtg.ts)

### fetchPoolSpotPrices

You can use this function to fetch spot prices of all assets in this market
Can be used to find prices at a particular block using unique identifier.

```typescript
const res = market.assetSpotPricesInZtg(blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./assetSpotPricesInZtg.ts)

### sharesId

You can use this function to fetch spot prices of all assets in this market
Can be used to find prices at a particular block using unique identifier.

```typescript
const res = market.assetSpotPricesInZtg(blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./assetSpotPricesInZtg.ts)

### accountId

You can use this function to fetch spot prices of all assets in this market
Can be used to find prices at a particular block using unique identifier.

```typescript
const res = market.assetSpotPricesInZtg(blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./assetSpotPricesInZtg.ts)

### joinPool

You can use this function to fetch spot prices of all assets in this market
Can be used to find prices at a particular block using unique identifier.

```typescript
const res = market.assetSpotPricesInZtg(blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./assetSpotPricesInZtg.ts)

### poolJoinWithExactAssetAmount

You can use this function to fetch spot prices of all assets in this market
Can be used to find prices at a particular block using unique identifier.

```typescript
const res = market.assetSpotPricesInZtg(blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./assetSpotPricesInZtg.ts)

### joinPoolMultifunc

You can use this function to fetch spot prices of all assets in this market
Can be used to find prices at a particular block using unique identifier.

```typescript
const res = market.assetSpotPricesInZtg(blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./assetSpotPricesInZtg.ts)

### exitPool

You can use this function to fetch spot prices of all assets in this market
Can be used to find prices at a particular block using unique identifier.

```typescript
const res = market.assetSpotPricesInZtg(blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./assetSpotPricesInZtg.ts)

### swapExactAmountIn

You can use this function to fetch spot prices of all assets in this market
Can be used to find prices at a particular block using unique identifier.

```typescript
const res = market.assetSpotPricesInZtg(blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./assetSpotPricesInZtg.ts)

### swapExactAmountOut

You can use this function to fetch spot prices of all assets in this market
Can be used to find prices at a particular block using unique identifier.

```typescript
const res = market.assetSpotPricesInZtg(blockHash);
```

**Arguments**
| Name | Type | Introduction |
| ---- | ---- | ------------ |
| blockHash | any | not necessarily. The unique identifier for the block to fetch asset spot prices. |

[Code snippet](./assetSpotPricesInZtg.ts)
