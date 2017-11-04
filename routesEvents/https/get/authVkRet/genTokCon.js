"use strict";

const crypto = require ("crypto");


module.exports = (res, redis) => {

  const token = crypto.createHash ("sha512").update (Math.random () + "wsConnect"). digest ("hex");

  redis.client.hset ("token:connect:ws", token, "1"). then ( ret => {
    if (ret == 1) {
      res.redirect ("/?tokcon=" + token);
      return true;
    }

    console.log ("error! Auth connect token not add redis!");
    res.redirect ("/error");
  });
};
