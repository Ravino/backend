"use strict";

const verify = require ("./authVkRet/verify.js");
const genTokCon = require ("./authVkRet/genTokCon.js");

module.exports = (passport, redis) => {

  return {
    "route": "/auth/vk/ret",

    "middleware": (req, res, next) => {
      verify (req, res, next);
    },

    "passport": passport.authenticate ("vkontakte", { "failureRedirect": "/auth/vk/error" }),

    "callback": (req, res) => {
      genTokCon (req, res, redis);
    }
  };
};
