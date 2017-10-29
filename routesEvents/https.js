"use strict";

const getPath = require ("./https/get.js");
const postPath = require ("./https/post.js");

module.exports = (passport, redis) => {

  return {
    "get": getPath (passport, redis),
    "post": postPath (passport)
  };
};
