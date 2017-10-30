"use strict";

const fnRecurseEvents = require ("./sockets/recurseEvents.js");


module.exports = () => {

  return {
    "recurseEvents": fnRecurseEvents
  };
};
