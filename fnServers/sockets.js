"use strict";

const fnRecurseEvents = require ("./sockets/recurseEvents.js");
const fnAuthenticate = require ("./sockets/authenticate.js");


module.exports = () => {

  return {
    "recurseEvents": fnRecurseEvents,
    "authenticate": fnAuthenticate,
  };
};
