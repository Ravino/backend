"use strict";

console.log(__dirname);
module.exports = () => {

  return {
    "route": "/index",
    "callback": (req, res) => {
      res.send ("hello");
    }
  };
};
