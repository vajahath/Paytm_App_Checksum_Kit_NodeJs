"use strict";

const paytmChecksum = require("./paytm/checksum");

function genChecksumP(options, MERCHANT_KEY) {
  return new Promise((resolve, reject) => {
    paytmChecksum.genchecksum(options, MERCHANT_KEY, function(err, checksum) {
      if (err) {
        return reject(err);
      }
      return resolve(checksum);
    });
  });
}

function makePaytmUtils({ MERCHANT_KEY }) {
  return {
    makeCheckSum({
      MID,
      ORDER_ID,
      CUST_ID,
      INDUSTRY_TYPE_ID,
      CHANNEL_ID,
      TXN_AMOUNT,
      WEBSITE,
      CALLBACK_URL,
      EMAIL,
      MOBILE_NO
    }) {
      return genChecksumP(
        {
          MID,
          ORDER_ID,
          CUST_ID,
          INDUSTRY_TYPE_ID,
          CHANNEL_ID,
          TXN_AMOUNT,
          WEBSITE,
          CALLBACK_URL,
          EMAIL,
          MOBILE_NO
        },
        MERCHANT_KEY
      );
    }
  };
}

module.exports = { makePaytmUtils };
