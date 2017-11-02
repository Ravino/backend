"use strict";

const jwt = require ("jsonwebtoken");
const fs = require ("fs");
const certKey = fs.readFileSync ("/www/project/backend/sertificat/jwt/ws.key");

const authenticate = (req, next) => {

  if (!req.handshake && req.handshake.query) {
    const error = "error in connect!";
    console.log (error);
    return next (error);
  }

  const handshake = req.handshake;

  if (!handshake.query.tokcon) {
    const error = "error! Tokcon not found!";
    console.log (error);
    return next (error);
  }

  const token = String (handshake.query.tokcon);

  redis.get (token).then ( ret => {
    if (ret == "1") {
      redis.set (token, "0");
      return next ();
    }

    jwt.verify (token, certKey, { "algorithm": "RC512"}, (err, verify) => {

      if (err) {
        console.log (err);
        return next (err);
      }

      next ();
    });

  });
};

module.exports = authenticate;
