# AfterMarket.pl API client class for Node.js

This library allows you to issue calls to the AfterMarket.pl from Node.js.

## Quick start

Install the library using `npm`:

```
npm install aftermarketpl-api
```

Create the API client object, providing your API key.
[Click here to obtain your API key.](https://www.aftermarket.pl/API/Create/)

```nodejs
const Aftermarket = require('aftermarketpl-api')
const client = new Aftermarket({
    key: '<MY API KEY>',
    secret: '<MY API SECRET>'
})
```

Call an API function and obtain a result.
[Click here to see the list of API functions.](https://json.aftermarket.pl/)

```nodejs
client.send('/domain/check', {
    'names': [ 'domain1.pl', 'domain2.pl' ]
}).then((data) => {
    // Do something with the data
}).catch((error) => {
    // Handle errors
});
```

## Details

The library uses the `axios` module to perform asynchronous calls to the API.

The returned Promise is fulfilled with the data received from the API, or rejected if an arror accurs.



