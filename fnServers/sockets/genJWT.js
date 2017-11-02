"use strict";

const fs = require ("fs");
const jwt = require ("jsonwebtoken");

const sertKey = fs.readFileSync ("/www/project/backend/sertificat/jwt/ws.key");

const genJWT = (socket, user) => {
  jwt.sign (user , certKey, algorithm, (err, token) => {

    if (err) {
      console.log (err);
      return err;
    }

    if (token) {
      console.log (token);
      socket.emit ("genJWT", { "jwt": token });
    }
  });
};

module.exports = genJWT;
