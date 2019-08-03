"use strict";

const paytmChecksum = require("./paytm/checksum");

function _genChecksumP(options, MERCHANT_KEY) {
  return new Promise((resolve, reject) => {
    paytmChecksum.genchecksum(options, MERCHANT_KEY, function(err, checksum) {
      if (err) {
        return reject(err);
      }
      return resolve(checksum);
    });
  });
}

function _verifyChecksum({ params, MERCHANT_KEY, paytmChecksumHash }) {
  const isValid = paytmChecksum.verifychecksum(
    params,
    MERCHANT_KEY,
    paytmChecksumHash
  );
  return isValid;
}

function makePaytmUtils({ MERCHANT_KEY }) {
  return {
    verifyChecksum({ params, paytmChecksumHash }) {
      return _verifyChecksum({ params, MERCHANT_KEY, paytmChecksumHash });
    },
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
      return _genChecksumP(
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
