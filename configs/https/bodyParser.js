"use strict";

const bodyParser = require ("body-parser");

module.exports = () => {

  return {
    "json": bodyParser.json (),

    "urlencoded": bodyParser.urlencoded ( {"extended": true } )
  };
};
