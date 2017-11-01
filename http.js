"use strict";

const https = require ("https");
const app = require ("express") ();
const fn = require ("./fnServers/https.js") ();

const pg = require ("./poolConnects/pg.js") ();
const redis = require ("./poolConnects/redis.js");

const rds = redis ();
const pub = redis ();

const Config = require ("./configs/https.js");
const Routes = require ("./routesEvents/https.js");
const Passport = require ("./configs/passport.js");


const server = https.createServer (fn.getCert (), app);

pg.connect (). then ( db => {

  server.listen (3000);
  const passport = Passport (db, rds, pub);
  const config = Config (rds);
  const routes = Routes (passport, rds);

  fn.recurseObj(app, config);
  fn.recurseRoutes (app, routes.get, "get");
},

err => {
  console.log (err);
  return err;
});
