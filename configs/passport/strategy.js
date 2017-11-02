"use strict";


module.exports = (db, redis) => {
  return {
    "vk": require ("./vkontakte.js") (db, redis),
  };
};
