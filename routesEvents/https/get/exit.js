"use strict";

module.exports = () => {

  return {
    "route": "/auth/exit",

    "middleware": (req, res, next) => {
      next ();
    },

    "callback": (req, res) => {
console.log ("exit");
      req.logout ();
      res.redirect ("/");
    }
  };
};
