"use strict";

const index = require ("./get/index.js");
const authVk = require ("./get/authVk.js");
const authVkRet = require ("./get/authVkRet.js");


module.exports = (passport) => {
  return [
    index (passport),
    authVk (passport),
    authVkRet (passport),
  ];
};
