"use strict";

const redis = require ("/www/project/backend/poolConnects/redis.js") ();
const storeRedis= require ("connect-redis");

const conf = {
  "client": redis
};


module.exports = (session) => {
  const client = storeRedis (session);
  return new client (conf);
};
