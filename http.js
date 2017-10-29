"use strict";

const app = require ("express") ();
const fn = require ("./fnServers/https.js") ();

const pg = require ("./poolConnects/pg.js") ();
const rds = require ("./poolConnects/redis.js") ();

const Config = require ("./configs/https.js");
const Routes = require ("./routesEvents/https.js");
const Passport = require ("./configs/passport.js");


app.listen ( 3000);

const passport = Passport ();
const config = Config (rds);
const routes = Routes (passport, rds);


fn.recurseObj(app, config);
fn.recurseRoutes (app, routes.get, "get");
