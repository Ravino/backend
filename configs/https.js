"use strict";

const helmet = require ("helmet");
const cookieParser = require ("cookie-parser");
const bodyParser = require ("./https/bodyParser.js");
const expressSession = require ("./https/expressSession.js");
const expressLogger = require ("./https/expressLogger.js");
const passport = require ("./https/passport.js");
const serveStatic = require ("./https/serveStatic.js");


module.exports = (redis) => {

  return {
    "helmet": helmet (),
    "cookieParser": cookieParser (),
    "bodyParser": bodyParser (),
    "expressLogger": expressLogger (),
    "expressSession": expressSession (redis),
    "passport": passport (),
    "serveStatic": serveStatic (),
  };
};
