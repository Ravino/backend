"use strict";


const cookieParser = require ("cookie-parser");
const bodyParser = require ("./https/bodyParser.js");
const expressSession = require ("./https/expressSession");
const passport = require ("./https/passport.js");
const serveStatic = require ("./https/serveStatic.js");



module.exports = (redis) => {

  return {

    "cookieParser": cookieParser (),

    "bodyParser": bodyParser (),

    "expressSession": expressSession (redis),

    "passport": passport (),

    "serveStatic": serveStatic (),


  }
};
