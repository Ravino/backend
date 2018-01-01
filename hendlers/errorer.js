"use strict";


const errors = {
  "authenticateHttps": (type) => {
    return type + " Error authenticate.";
  },


  "redisSet": (type) => {
    return type + " Error! Set redis.";
  },

  "postGreSqlInsert": (type) => {
    return type + " Error! no writed insert.";
  },
};

module.exports = () => {
  return errors;
};
