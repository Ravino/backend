"use strict";

const fnRecurseObj = require ("./https/recurseObjects.js");
const fnRecurseRoutes = require ("./https/recurseRoutes.js");
const fnGetCert = require ("./https/getCert.js");


module.exports = () => {

  return {
    "recurseObj": fnRecurseObj,
    "recurseRoutes": fnRecurseRoutes,
    "getCert": fnGetCert,
  };
};
