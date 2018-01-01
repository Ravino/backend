"use strict";

const vk = require ("passport-vkontakte").Strategy;
const conf = require ("./vkontakte/conf.js");
const fn = require ("./vkontakte/fn.js");



module.exports = (db, redis, logger, errorer) => {
  return new vk (conf (), fn (db, redis));
};
