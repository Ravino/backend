"use strict";

const crypto = require ("crypto");


module.exports = (req, res, redis) => {

  const userId = req.session.passport.user.userVkId;

  const token = crypto.createHash ("sha512").update (Math.random () + userId + "wsConnect"). digest ("hex");

  redis.client.set ("token:connect:ws:" + token, userId). then ( ret => {
    if (ret == "OK") {
      res.redirect ("/?tokcon=" + token);
      return true;
    }

    console.log ("error! Auth connect token not add redis!");
    res.redirect ("/error");
    return false;
  },


  error => {
    console.log (error);
    res.redirect ("/error");
    return error;
  });
};
