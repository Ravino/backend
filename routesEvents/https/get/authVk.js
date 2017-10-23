"use strict";

module.exports = () => {

  return {
    "route": "/auth/vk",
    "callback": (req, res) => {
      res.send ("hello");
    }
  };
};
