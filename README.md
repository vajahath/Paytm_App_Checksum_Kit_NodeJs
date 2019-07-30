# paytm-dev-checksum-kit-nodejs-fork

This is a paytm util functions exported as a function returning promise. Basically this is a wrapper around the parent repository's core functions.

This package is because, the original repo is missing maintenance and doesn't have those required functions exported as clean functions.

## Usage

```js
const { makePaytmUtils } = require(".");

const PayTmUtils = makePaytmUtils({ MERCHANT_KEY: "XXXXXXX" });

PayTmUtils.makeCheckSum({
  MID: "XXXXXXXXX",
  ORDER_ID: "89374832",
  TXN_AMOUNT: "200",
  CHANNEL_ID: "WAP",
  CALLBACK_URL: "https://merchant.com/callback/",
  CUST_ID: "42344787",
  EMAIL: "mi@yopmail.com",
  MOBILE_NO: "7736600957",
  WEBSITE: "www.google.com",
  INDUSTRY_TYPE_ID: "Retail"
})
  .then(cs => console.log("checksum:", cs))
  .catch(err => console.error(err));
```

## Licence

MIT &copy; [Vajahath Ahmed](https://twitter.com/vajahath7)
