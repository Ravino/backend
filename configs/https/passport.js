"use strict";

const passport = require ("passport");

const conf = {
  "initialize ()": passport.initialize (),
  "session": passport.session ()
};

module.exports = () => {
  return conf;
};
