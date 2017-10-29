"use strict";

const pgPool = require ("pg-pool");


const conf = {
  "database": "odra",
  "user": "odra",
  "password": "odra",
  "ssl": true,
  "max": 20,
  "min": 4,
  "connectionTimeoutMillis": 1000
};


module.exports = () => {
  return new pgPool (conf);
};
