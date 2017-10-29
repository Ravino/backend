"use strict";

const serveStatic = require ("serve-static");

module.exports = () => {
  return serveStatic ("/www/project/backend/frontend");
};
