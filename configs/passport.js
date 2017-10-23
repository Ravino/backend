"use strict";

const passport = require ("passport");
const fnStrategy = require ("./passport/strategy.js");

module.exports = (db) => {

  const strategy = fnStrategy (db);

  for (let i in strategy) {
    passport.use ( i, strategy [i]);
  }

  return passport;
};
