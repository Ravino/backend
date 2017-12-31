"use strict";

const scopeds = require ("./scopeds.js") ();

const conf = {
  "clientID": "6316221",
  "clientSecret": "jgeX62HntlePL05UCEES",
  "callbackURL": "http://localhost:3000/auth/vk/ret",
  "scope": scopeds,
  "apiVersion": "5.69"
};


module.exports = () => {
  return conf;
};
