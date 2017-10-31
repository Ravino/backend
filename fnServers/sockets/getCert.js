"use strict";

const fs = require ("fs");

const getCert = () => {

  const conf = {
    "key": fs.readFileSync ("/www/project/backend/sertificat/https/https.key"),
    "cert": fs.readFileSync ("/www/project/backend/sertificat/https/https.crt")
  };

  return conf;
};

module.exports = getCert;
