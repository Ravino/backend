"use strict";

const fnRecurseEvents = require ("./sockets/recurseEvents.js");
const fnAuthenticate = require ("./sockets/authenticate.js");
const fnGetCert = require ("./sockets/getCert.js");
const genJWT = require ("./sockets/genJWT.js");


module.exports = () => {

  return {
    "recurseEvents": fnRecurseEvents,
    "getCert": fnGetCert,
    "authenticate": fnAuthenticate,
    "genJWT": genJWT,
  };
};
