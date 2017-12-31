"use strict";

const expressLogger = require ("express-logger");

const conf = {
  "path": "/www/newProject/logs/express.log",
};


module.exports = () => {
  return expressLogger (conf);
};
