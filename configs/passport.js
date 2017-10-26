"use strict";

const passport = require ("passport");
const fnStrategy = require ("./passport/strategy.js");

module.exports = (db) => {

  const strategy = fnStrategy (db);

  passport.use (strategy.vk );
  return passport;
};
