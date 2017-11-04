"use strict";

module.exports = (db, redis) => {


  return (access, refresh, params, profile, done) => {

    const userId = params.user_id;
    const Params = JSON.stringify (params);
    const Profile = JSON.stringify (profile);


    redis.client.hmset ("user:vk:" + userId, "params", Params, "profile", Profile).then ( res => {

      if (res == "OK") {


        redis.sub.on ("pmessage", (pattern, chanal, msg) => {

          if (chanal == "socket:user:vk:connect"  &&  msg == "connect") {
            redis.pub.publish ("socket:user:vk:connect", userId);
            return true;
          }

          console.log ("error! User not connected userVkId = " + userId);
          return false;
        });

      done (null, profile);
      return true;
      }


      done (null, false);
      console.log ("error! User not writed in redis! UserVkId = " + userId);
      return false;
    });


  };
};
