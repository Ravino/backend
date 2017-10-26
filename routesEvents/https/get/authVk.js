"use strict";

module.exports = (passport) => {

  return {
    "route": "/auth/vk",
    "middleware": passport.authenticate ("vkontakte", { "display": "mobile" }),
    "callback": (req, res) => {
      console.log ("auth/vk");
    }
  };
};
