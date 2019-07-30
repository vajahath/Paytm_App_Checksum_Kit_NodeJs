const { makePaytmUtils } = require(".");

const PayTmUtils = makePaytmUtils({ MERCHANT_KEY: "KpYQyfmlu3n%!V9X" });

PayTmUtils.makeCheckSum({
  MID: "eQUbuU23304248660492",
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
