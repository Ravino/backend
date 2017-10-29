"use strict";

const entry = require ("./get/entry.js");
const index = require ("./get/index.js");
const authVk = require ("./get/authVk.js");
const authVkRet = require ("./get/authVkRet.js");


module.exports = (passport) => {
  return [
    entry (passport),
    index (passport),
    authVk (passport),
    authVkRet (passport),
  ];
};
