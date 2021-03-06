"use strict";

const verify = require ("./index/verify.js");

module.exports = () => {

  return {
    "route": "/index",

    "middleware": (req, res, next) => {
      verify (req, res, next);
    },

    "callback": (req, res) => {
      res.sendFile ("/www/project/backend/frontend/static/index.html");
    }
  };
};
