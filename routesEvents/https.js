"use strict";

const getPath = require ("./https/get.js");
const postPath = require ("./https/post.js");

module.exports = (passport) => {

  return {
    "get": getPath (passport),
    "post": postPath (passport)
  };
};
