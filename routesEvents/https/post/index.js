"use strict";

module.exports = () => {

  return {
    "route": "/index",
    "callback": (req, res) => {
      res.send ("hello");
    }
  };
};
