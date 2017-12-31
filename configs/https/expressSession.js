"use strict";

const expressSession = require ("express-session");
const store = require ("connect-redis") (expressSession);


module.exports = (redis) => {

  const conf = {
    "store": new store ({
      "client": redis. client,
      "prefix": "session-express-redis",
    }),

    "secret": "my fuck",
    "resave": true,
    "rolling": true,
    "saveUninitialized": true,
  };


  return expressSession (conf);
};
