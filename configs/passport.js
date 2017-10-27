"use strict";

const passport = require ("passport");
const SerDeser = require ("./passport/serDeser.js");
const fnStrategy = require ("./passport/strategy.js");

SerDeser (passport);

module.exports = (db) => {

  const strategy = fnStrategy (db);

  passport.use (strategy.vk );
  return passport;
};
