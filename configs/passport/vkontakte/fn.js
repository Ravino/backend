"use strict";

const crypto = require ("crypto");

module.exports = (db, redis, logger, errorer) => {


  return (access, refresh, params, profile, done) => {

    const userId = params. user_id;
    const expiresIn = new Date (). getTime () + (params. expires_in * 1000);
    const userSignature = crypto. createHash ("sha512"). update (new Date (). getTime () + userId + Math. random () + "signature"). digest ("hex");

    const extendsParams = {
      "userId": userId,
     "expiresIn": expiresIn,
     "accessKey": params. access_token,
     "userSignature": userSignature,
    };


    const user = {
      "params": extendsParams,
      "profile": profile,
    };


    const userString = JSON. stringify (user);


    redis. client. set ("https:users:vk:" + userId, userString). then ( result => {
      if (result == "OK") {
        return done (null, user);
      }

      logger. error (errorer. redisSet ("Passport-vkontakte"));
      return done (null, false);
    },

    err => {
      logger. error (err);
      done (err);
      return err;
    });
  };
};
