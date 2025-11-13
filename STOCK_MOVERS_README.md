# Stock Top Movers with News Catalyst

## Overview
This n8n workflow fetches top stock movers (5 gainers, 10 losers, and 2 highest volume movers) and retrieves their news catalysts from the last 24 hours.

## Features

- **Fetches top gainers and losers** from Alpha Vantage API
- **Selects 5 top gainers** by trading volume
- **Selects 10 top losers** by trading volume
- **Selects 2 highest volume movers** (either gainers or losers)
- **Removes duplicates** to avoid counting the same stock twice
- **Gets news catalysts** for each stock from the last 24 hours only
- **Sentiment analysis** for each news article
- **Automatic rate limiting** to respect API limits
- **Clean grouped output** by category

## Workflow Structure

1. **Fetch Top Movers** - Gets all gainers and losers from Alpha Vantage
2. **Select Stocks** - Selects 5 gainers, 10 losers, 2 top movers (removes duplicates)
3. **Fetch News and Aggregate** - Fetches news for each stock with rate limiting, filters to 24h, aggregates results

## Data Fields

### Stock Data
- `ticker` - Stock symbol
- `price` - Current price
- `changePercent` - Percentage change
- `volume` - Trading volume
- `type` - "gainer" or "loser"
- `category` - "top_mover", "top_gainer", or "top_loser"

### News Data
- `headline` - Main news headline
- `summary` - News summary (max 200 chars)
- `url` - Link to full article
- `publishedTime` - When the article was published (YYYYMMDDTHHMMSS format)
- `sentiment` - Sentiment label (Bullish/Bearish/Neutral)
- `sentimentScore` - Numerical sentiment score
- `articlesCount` - Number of articles in last 24h

### Summary Statistics
- `totalStocks` - Total unique stocks analyzed
- `topMoversCount` - Number of top volume movers (2)
- `topGainersCount` - Number of top gainers (up to 5)
- `topLosersCount` - Number of top losers (up to 10)
- `stocksWithNews` - Stocks with news in last 24h
- `stocksWithoutNews` - Stocks without recent news
- `generatedAt` - Timestamp of workflow execution

## API Requirements

**Alpha Vantage API Key**: Replace `AS9OQDLEM7W82638` with your own API key
- Get free key at: https://www.alphavantage.co/support/#api-key
- Free tier: 25 requests/day, 5 requests/minute

## Important Notes

### Stock Selection
- **Top 2 Movers**: The 2 stocks with highest trading volume (can be gainers or losers)
- **Top 5 Gainers**: The 5 gainers with highest trading volume
- **Top 10 Losers**: The 10 losers with highest trading volume
- **Duplicates Removed**: If a stock appears in multiple categories, it's only counted once

### Volume Period
The Alpha Vantage API provides **total daily volume**, not volume for the last 2 hours specifically. The workflow ranks stocks by this daily volume metric to find the most actively traded stocks.

### News Filtering
Only news articles published within the **last 24 hours** are included in the results. Older articles are automatically filtered out.

### Rate Limiting
The workflow processes stocks sequentially with a **13-second delay** between API calls to respect the free tier limit of 5 requests/minute. Total execution time will be approximately **3-4 minutes** for all stocks.

## Example Output

```json
{
  "summary": {
    "totalStocks": 15,
    "topMoversCount": 2,
    "topGainersCount": 5,
    "topLosersCount": 10,
    "stocksWithNews": 12,
    "stocksWithoutNews": 3,
    "generatedAt": "2025-11-13T10:30:00.000Z"
  },
  "topMovers": [
    {
      "ticker": "NVDA",
      "price": 495.20,
      "changePercent": 12.5,
      "volume": 250000000,
      "type": "gainer",
      "category": "top_mover",
      "news": {
        "headline": "NVIDIA Announces AI Breakthrough",
        "summary": "NVIDIA Corporation unveiled new AI chip technology...",
        "url": "https://...",
        "publishedTime": "20251113T083000",
        "sentiment": "Bullish",
        "sentimentScore": 0.85,
        "articlesCount": 8
      }
    }
  ],
  "topGainers": [
    {
      "ticker": "TSLA",
      "price": 242.84,
      "changePercent": 8.5,
      "volume": 125000000,
      "type": "gainer",
      "category": "top_gainer",
      "news": {
        "headline": "Tesla Reports Strong Q4 Deliveries",
        "summary": "Tesla Inc. reported quarterly deliveries that exceeded...",
        "url": "https://...",
        "publishedTime": "20251113T073000",
        "sentiment": "Bullish",
        "sentimentScore": 0.65,
        "articlesCount": 3
      }
    }
  ],
  "topLosers": [
    {
      "ticker": "META",
      "price": 385.50,
      "changePercent": -5.2,
      "volume": 95000000,
      "type": "loser",
      "category": "top_loser",
      "news": {
        "headline": "Meta Faces Regulatory Scrutiny",
        "summary": "Meta Platforms is under investigation by regulators...",
        "url": "https://...",
        "publishedTime": "20251113T063000",
        "sentiment": "Bearish",
        "sentimentScore": -0.45,
        "articlesCount": 2
      }
    }
  ],
  "allStocks": []
}
```

## Usage

1. Import the workflow JSON into n8n
2. Open the "Fetch News and Aggregate" node
3. Replace `AS9OQDLEM7W82638` with your own Alpha Vantage API key (line 2 in the code)
4. Execute the workflow manually or set up a schedule trigger
5. View results in the "Fetch News and Aggregate" node output

## Modifications

**To adjust the number of stocks:**
- In "Select Stocks" node, change:
  - `slice(0, 5)` for gainers (line ~29)
  - `slice(0, 10)` for losers (line ~30)
  - `slice(0, 2)` for top movers (line ~35)

**To adjust API rate limiting:**
- In "Fetch News and Aggregate" node, modify the delay:
  - `setTimeout(resolve, 13000)` (line ~85)
  - 13000ms = 13 seconds (for 5 requests/minute)

**To adjust news time period:**
- In "Fetch News and Aggregate" node, modify:
  - `24 * 60 * 60 * 1000` (line ~33)
  - 24 hours in milliseconds

**To adjust news article limit:**
- In "Fetch News and Aggregate" node, modify the URL:
  - `limit=10` to `limit=N` (line ~27)
