"use strict";

module.exports = (req, res, next) => {

  if (!req.isAuthenticated ()) {
    res.redirect ("/index");
    return false;
  }

  next ();
};
