"use strict";


const conf = {
  "clientID": "5749003",
  "clientSecret": "lOM80VYzvZati5clwZeE",
  "callbackURL": "/auth/vk/ret",
  "scope": [ "status", "friends", "notify" ],
  "apiVersion": "5.67"
};


module.exports = () => {
  return conf;
};
