# Stock Top Movers with News Catalyst

## Overview
This n8n workflow fetches the top 10 stock movers (gainers and losers) by trading volume and retrieves their news catalysts from the last 24 hours.

## Features

- **Fetches top gainers and losers** from Alpha Vantage API
- **Ranks by volume** to find the most actively traded stocks
- **Extracts top 10 movers** based on volume
- **Gets news catalysts** for each stock from the last 24 hours
- **Sentiment analysis** for each news article
- **Clean summary output** with all relevant data

## Workflow Structure

1. **Fetch Top Movers** - Gets gainers and losers from Alpha Vantage
2. **Process Movers + Extract Top10** - Combines, sorts by volume, takes top 10
3. **Split in Batches** - Processes each stock individually
4. **Fetch News** - Gets latest news for each ticker
5. **Parse News Summary** - Filters news from last 24h, extracts key info
6. **Aggregate Results** - Combines all data into final output

## Data Fields

### Stock Data
- `ticker` - Stock symbol
- `price` - Current price
- `changePercent` - Percentage change
- `volume` - Trading volume
- `type` - "gainer" or "loser"

### News Data
- `headline` - Main news headline
- `summary` - News summary (max 200 chars)
- `url` - Link to full article
- `publishedTime` - When the article was published
- `sentiment` - Sentiment label (Bullish/Bearish/Neutral)
- `sentimentScore` - Numerical sentiment score
- `articlesCount` - Number of articles in last 24h

### Summary Statistics
- `totalStocks` - Total stocks analyzed (10)
- `gainersCount` - Number of gainers
- `losersCount` - Number of losers
- `stocksWithNews` - Stocks with news in last 24h
- `stocksWithoutNews` - Stocks without recent news
- `generatedAt` - Timestamp of workflow execution

## API Requirements

**Alpha Vantage API Key**: Replace `AS9OQDLEM7W82638` with your own API key
- Get free key at: https://www.alphavantage.co/support/#api-key
- Free tier: 25 requests/day, 5 requests/minute

## Important Notes

### Volume Period
The Alpha Vantage API provides **total daily volume**, not volume for the last 2 hours specifically. The workflow ranks stocks by this daily volume metric to find the most actively traded stocks.

### News Filtering
Only news articles published within the **last 24 hours** are included in the results. Older articles are filtered out.

### Rate Limiting
The workflow processes 10 stocks sequentially. With the free API tier (5 requests/minute), it will take approximately 2 minutes to complete.

## Example Output

```json
{
  "summary": {
    "totalStocks": 10,
    "gainersCount": 6,
    "losersCount": 4,
    "stocksWithNews": 8,
    "stocksWithoutNews": 2,
    "generatedAt": "2025-11-13T10:30:00.000Z"
  },
  "top10Movers": [
    {
      "ticker": "TSLA",
      "price": 242.84,
      "changePercent": 8.5,
      "volume": 125000000,
      "type": "gainer",
      "news": {
        "headline": "Tesla Announces New Factory",
        "summary": "Tesla Inc. announced plans to build a new manufacturing facility...",
        "url": "https://...",
        "publishedTime": "20251113T083000",
        "sentiment": "Bullish",
        "sentimentScore": 0.75,
        "articlesCount": 5
      }
    }
  ]
}
```

## Usage

1. Import the workflow JSON into n8n
2. Replace the API key with your own
3. Execute the workflow manually or set up a schedule
4. View results in the final "Aggregate Results" node

## Modifications

To adjust the number of stocks:
- Change `slice(0, 10)` to `slice(0, N)` in the "Process Movers + Extract Top10" node

To adjust news article count:
- Change `limit=10` to `limit=N` in the "Fetch News" node URL

To adjust news time period:
- Modify `24 * 60 * 60 * 1000` in "Parse News Summary" node
