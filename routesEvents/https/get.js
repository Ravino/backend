"use strict";

const index = require ("./get/index.js");


module.exports = (passport) => {
  return [
    index (passport),
  ];
};
