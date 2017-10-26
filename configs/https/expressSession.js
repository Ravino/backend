"use strict";

const expressSession = require ("express-session");
const storeRedis = require ("./expressSession/storeRedis.js") (expressSession);


const config = {

  "store": storeRedis,

  "secret": "myFuck",

  "resave": true,

  "rolling": true,

  "saveUninitialized": true

};


module.exports = () => {

  return expressSession (config);
};
