"use strict";

const server = require ("http").createServer ();
const socketio = require ("socket.io") (server);

const pg = require ("./poolConnects/pg.js");
const ioredis = require ("./poolConnects/redis.js");

server.listen (3000);



socketio.use ( (req, next) => {
  for (let i in req) {
    console.log (i);
  }
});


