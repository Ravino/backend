"use strict";

module.exports = (db) => {
  return (access, refresh, params, profile, done) => {

for (let i in profile) {
console.log(i);
}

done (null, { "user": "name" });
};
};
