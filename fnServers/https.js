"use strict";

const fnRecurseObj = require ("./https/recurseObjects.js");
const fnRecurseRoutes = require ("./https/recurseRoutes.js");


module.exports = () => {

  return {
    "recurseObj": fnRecurseObj,
    "recurseRoutes": fnRecurseRoutes
  };
};
