"use strict";

module.exports = (passport) => {

  passport.serializeUser ((user, done) => {
    done (null, user);
  });


  passport.deserializeUser ((user, done) => {
    done (null, user);
  });
};
