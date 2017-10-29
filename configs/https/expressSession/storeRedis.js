"use strict";

const storeRedis= require ("connect-redis");


module.exports = (session, redis) => {
  const client = storeRedis (session);
  return new client ( { "client": redis });
};
