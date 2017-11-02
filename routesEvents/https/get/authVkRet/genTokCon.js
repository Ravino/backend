"use strict";

const crypto = require ("crypto");

const token = crypto.createHash ("sha512").update (Math.random () + "wsConnect"). digest ("hex");

module.exports = (res, redis) => {

  redis.client.hset ("token:connect:ws", token, "1"). then ( ret => {
    if (ret == 1) {
      res.redirect ("/?tokcon=" + token);
      return true;
    }
    res.redirect ("/error");
  });
};
