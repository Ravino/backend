"use strict";

const expressSession = require ("express-session");
const storeRedis = require ("./expressSession/storeRedis.js");


module.exports = (redis) => {

  const config = {

    "store": storeRedis (expressSession, redis),  

    "secret": "myFuck",

    "resave": true,

    "rolling": true,

    "saveUninitialized": true

  };


  return expressSession (config);
};
