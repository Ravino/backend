"use strict";

const jwt = require ("jsonwebtoken");
const fs = require ("fs");
const certKey = fs.readFileSync ("/www/project/backend/sertificat/jwt/ws.key");

const patternToken = /^[A-z0-9]{64,}$/;
const patternId = /^[0-9]{1,}$/;


const authenticate = (req, next, redis, usersSockets) => {

  if (!req.handshake  &&  !req.handshake.query) {
    const error = "Error! Cannot read propertys 'req.handshake' and 'req.handshake.query'";
    console.log (error);
    next (error);
    return error;
  }


  if (!req.handshake.query.tokcon  &&  patternToken.test (req.handshake.query.tokcon) == false) {
    const error = "Error! Propertys 'tokcon' invalid!";
    console.log (error);
    return error;
  }


  const handshake = req.handshake;
  const token = handshake.query.tokcon;
  const socketId = req.id;


  redis.client.get ("token:connect:ws:" + token). then ( userId => {
    if (!userId  && patternId.test (userId) == false) {
      const error = "Error! UserId undefined!";
      console.log (error);
      next (error);
      return error;
    }


    redis.client.hmget ("user:vk:" + userId, "params", "profile"). then ( userData => {
      if (!userData  &&  !userData [0]  &&  !userData [1]) {
        const error = "Error! UserData not found in nosql!";
        console.log (error);
        next (error);
        return error;
      }


      const user = {
        "params": JSON.parse (userData [0]),
        "profile": JSON.parse (userData [1])
      };

      usersSockets [socketId] = user;
      next ();
      return true;
    },

    error => {
      console.log (error);
      next (error);
      return error;
    });
  },


  error => {
    console.log (error);
    next (error);
    return error;
  });
};

module.exports = authenticate;
