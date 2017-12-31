"use strict";

const serveStatic = require ("serve-static");

module.exports = () => {
  return serveStatic ("/www/newProject/staticOnRegister");
};
