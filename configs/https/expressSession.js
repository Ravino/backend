"use strict";

const expressSession = require ("express-session");

const config = {

  "secret": "myFuck",

  "resave": true,

  "rolling": true,

  "saveUninitialized": true

};


module.exports = () => {

  return expressSession (config);
};
