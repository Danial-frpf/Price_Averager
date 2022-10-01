### Price Averager

    Chrome extension that returns average price of amazon searches.

## Setup

1. Download source code.
2. Open terminal in folder containing package.json.
3. Run command:

```
npm install
```

4. To get unpacked extension in dist folder run command:

```
npm run build
```

5. To get packed extension (.zip file) run command:

```
npm run zip
```

6. For development run command:

```
npm run dev
```

## Note

1. Works only on amazon.com search pages.
2. To use multi page mode the app requires the nodejs server.

## Server

1. Download source code for server using [link](https://github.com/Danial-frpf/price_averager_server).
2. Open terminal in folder containing package.json.
3. Run command:

```
npm install
```

4. Run command:

```
npm run dev
```

## About

## Guidelines

1. The extension is activated whenever you make a search on amazon.
2. When not on amazon you can use custom search.

## Limitations:

1. Can only perform one multiPage request at a time.
2. Multi page bot cannot pass "are you human" check.
3. If there is "are you human" check the request fails.

## Modes

## Single Page:

1. It injects javascript in the active tab.
2. And only gets the average price of products currently visible in result.

## Multi Page:

1. It sends request to a nodejs server.
2. The server calculates the average price.
3. Lower number of pages means fast result but includes less products.

## Custom Search:

1. Uses Multi Page mode.
2. Makes headless search on amazon.com.
3. Returns average price.

## Tips:

1. Try to make the search as specific as possible.
2. "Pakistan cricket jersey 2022" rather than "cricket jersey".
