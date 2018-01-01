"use strict";

const secureServer = require ("https");
const server = require ("express") ();

const redis = require ("./connectionsPool/redis.js") ();
const pg = require ("./connectionsPool/pg.js") ();
const fnServer = require ("./fnServers/https.js") ();
const logger = require ("./hendlers/logger.js") ();
const errorer = require ("./hendlers/errorer.js") ();

const serverConfig = require ("./configs/https.js") (redis);

const Passport = require ("./configs/passport.js");
const Routes = require ("./routesEvents/https.js");


pg. connect (). then ( db => {

  const passport = Passport (db, redis, logger, errorer);
  const routes = Routes (passport, redis);



server. get ("/test", (req, res) => {
  res. sendFile ("/www/newProject/staticUnRegister/index.htm");
});
  fnServer. recurseObj (server, serverConfig);
  fnServer. recurseRoutes (server, routes. get, "get");

  server.listen (3000, (r) => {
    logger. info ("server-http start");
  });
},

err => {
  logger. info (err);
});

