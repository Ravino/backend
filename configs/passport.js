"use strict";

const passport = require ("passport");
const strategy = require ("./passport/strategy.js");

const serDeserUser = require ("./passport/serDeserUser.js") (passport);


module. exports = (db, redis, logger, errorer) => {

  const strategyObj = strategy (db, redis, logger, errorer);

  for (let i in strategyObj) {
    passport. use (strategyObj [i]);
  }

  return passport;
};
