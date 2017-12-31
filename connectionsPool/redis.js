"use strict";

const ioredis = require ("ioredis");


module.exports = (conf) => {
  return {
    "client": new ioredis (),
    "pub": new ioredis (),
    "sub": new ioredis (),
  };
};
