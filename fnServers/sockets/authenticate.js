"use strict";

const authenticate = (req, next) => {

  let token;
  let handshake;

  if (req.handshake && req.handshake.query) {
    handshake = req.handshake;
  }

  if (handshake.query.tokcon) {
    token = handshake.query.tokcon;
  }

  console.log (token);
};

module.exports = authenticate;
