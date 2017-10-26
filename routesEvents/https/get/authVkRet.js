"use strict";

module.exports = (passport) => {

  return {
    "route": "/auth/vk/ret",

    "middleware": passport.authenticate ("vkontakte", {
      "successRedirect": "/true",
      "failerRedirect": "/error"
    }),
    "callback": (req, res) => {
      console.log ("auth/vk/ret");
    }
  };
};
