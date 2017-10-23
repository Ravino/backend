"use strict";


module.exports = (db) => {
  return {
    "vk": require ("./vkontakte.js") (db),
  };
};
