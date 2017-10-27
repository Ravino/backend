"use strict";

const pgPool = require ("pg-pool");


const conf = {
  "database": "or",
  "user": "or",
  "password": "123",
  "ssl": true,
  "max": 20,
  "min": 4,
  "connectionTimeoutMillis": 1000
};


module.exports = () => {
  return new pgPool (conf);
};
