"use strict";

const verify = require ("./authVk/verify.js");

module.exports = (passport) => {

  return {
    "route": "/auth/vk",

    "middleware": (req, res, next) => {
      verify (req, res, next);
    },

    "passport": passport.authenticate ("vkontakte", { "display": "mobile" }),

    "callback": (req, res) => {}
  };
};
