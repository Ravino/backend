"use strict";

const passport = require ("passport");
const SerDeser = require ("./passport/serDeser.js");
const fnStrategy = require ("./passport/strategy.js");

SerDeser (passport);

module.exports = (db, redis, publisher) => {

  const strategy = fnStrategy (db, redis, publisher);

  passport.use (strategy.vk );
  return passport;
};
