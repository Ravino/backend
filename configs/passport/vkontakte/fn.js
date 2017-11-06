"use strict";

module.exports = (db, redis) => {


  return (access, refresh, params, profile, done) => {

    const userId = params.user_id;
    const Params = JSON.stringify (params);
    const Profile = JSON.stringify (profile);


    redis.client.hmset ("user:vk:" + userId, "params", Params, "profile", Profile).then ( res => {

      if ("OK" == res) {
        const user = {
          "userVkId": userId,
          "params": params,
          "profile": profile,
        };

        done (null, user);
        return true;
      }

console.log ("error! User added in redis");
      done (null, false);
      return false;
    },

    error => {
      console.log (error);
      done (error, false);
      return error;
    });

  };
};
