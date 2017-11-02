"use strict";

const fs = require ("fs");

const getCert = () => {

  const conf = {
    "key": fs.readFileSync ("/www/project/backend/sertificat/jwt/ws.key"),
    "cert": fs.readFileSync ("/www/project/backend/sertificat/jwt/ws.srt")
  };

  return conf;
};

module.exports = getCert;
