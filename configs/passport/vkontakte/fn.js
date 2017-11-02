"use strict";

module.exports = (db, redis) => {

  redis.sub.psubscribe ("socket:user:vk:connection");

  return (access, refresh, params, profile, done) => {

    const userId = params.user_id;
    const Params = JSON.stringify (params);
    const Profile = JSON.stringify (profile);

    redis.client.hmset ("user:vk:" + userId, "params", Params, "profile", Profile).then (ret => {
      if (ret == "OK") {

        redis.sub.on ("pmessage", (pat, chan, msg) => {

console.log ("socket send connect");
          if (msg == "connection") {
              redis.pub.publish ("socket:user:vk:id", userId);
              return true;
          }
        });

        done (null, profile);
        return true;
      }

      const err = "error auth from vk and redis";
      done (err, false);
      return false;
    });
  };
};
