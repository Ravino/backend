"use strict";

const https = require ("https");
const io = require ("socket.io")

const pg = require ("./poolConnects/pg.js") ();
const redis = require ("./poolConnects/redis.js");
const fn = require ("./fnServers/sockets.js") (); 

const server = https.createServer (fn.getCert ());
const socketio = io (server);
const rds = redis ();


server.listen (3001);



rds.sub.psubscribe ("socket:user:vk:id", () => {});

socketio.use ( (req, next) => {
  fn.authenticate (req, next);
});





socketio.on ("connection", (client) => {

console.log ("connect");

  rds.pub.publish ("socket:user:vk:connection", "connection");

  rds.sub.on ("pmessage", (pat, chan, msg) => {
    console.log (pat);
    console.log (chan);
    console.log (msg);
  });
});
