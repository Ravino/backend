"use strict";

const entry = require ("./get/entry.js");
const index = require ("./get/index.js");
const exit = require ("./get/exit.js");
const authVk = require ("./get/authVk.js");
const authVkRet = require ("./get/authVkRet.js");


module.exports = (passport, redis) => {
  return [
    entry (passport),
    index (passport),
    exit (),
    authVk (passport),
    authVkRet (passport, redis),
  ];
};
