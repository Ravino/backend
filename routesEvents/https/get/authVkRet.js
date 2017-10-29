"use strict";

const verify = require ("./authVkRet/verify.js");

module.exports = (passport) => {

  return {
    "route": "/auth/vk/ret",

    "middleware": (req, res, next) => {
      verify (req, res, next);
    },

    "passport": passport.authenticate ("vkontakte", { "failureRedirect": "/auth/vk/error" }),

    "callback": (req, res) => {
      res.send ("redirect");
    }
  };
};
