"use strict";

const app = require ("express") ();
const fn = require ("./fnServers/https.js") ();

const Config = require ("./configs/https.js");
const Routes = require ("./routesEvents/https.js");
const Passport = require ("./configs/passport.js");


app.listen ( 3000);

const passport = Passport ();
const config = Config ();
const routes = Routes (passport);


fn.recurseObj(app, config);
fn.recurseRoutes (app, routes.get, "get");
