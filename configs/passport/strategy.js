"use strict";


module.exports = (db, redis, publisher) => {
  return {
    "vk": require ("./vkontakte.js") (db, redis, publisher),
  };
};
