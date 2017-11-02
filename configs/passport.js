"use strict";

const passport = require ("passport");
const SerDeser = require ("./passport/serDeser.js");
const fnStrategy = require ("./passport/strategy.js");

SerDeser (passport);

module.exports = (db, redis) => {

  const strategy = fnStrategy (db, redis);

  passport.use (strategy.vk );
  return passport;
};
