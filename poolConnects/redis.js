"use strict";

const ioredis = require ("ioredis");


module.exports = (conf) => {
  return new ioredis ();
};
