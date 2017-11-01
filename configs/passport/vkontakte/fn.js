"use strict";

module.exports = (db, redis, publisher) => {
  return (access, refresh, params, profile, done) => {

    const userId = params.user_id;
    const Params = JSON.stringify (params);
    const Profile = JSON.stringify (profile);

    redis.hmset ("user:vk:" + userId, "params", Params, "profile", Profile).then (ret => {
      if (ret == "OK") {
        publisher.publish ("socket:user:vk:id", userId);
        done (null, profile);
        return true;
      }

      const err = "error auth from vk and redis";
      done (err, false);
      return false;
    });
  };
};
