"use strict";

const verify = require ("./entry/verify.js");

module.exports = () => {

  return {
    "route": "/",

    "middleware": (req, res, next) => {
      verify (req, res, next);
    },

    "callback": (req, res) => {
      res.sendFile ("/www/project/backend/frontend/static/index.html");
    }
  };
};
