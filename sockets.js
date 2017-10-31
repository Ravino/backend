"use strict";

const https = require ("https");
const io = require ("socket.io")

const pg = require ("./poolConnects/pg.js") ();
const ioredis = require ("./poolConnects/redis.js") ();
const fn = require ("./fnServers/sockets.js") (); 

const server = https.createServer (fn.getCert ());
const socketio = io (server);

server.listen (3001);



socketio.use ( (req, next) => {
  fn.authenticate (req, next);
});
