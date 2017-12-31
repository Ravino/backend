"use strict";

const logger = require ("console-log-level");

const conf = {
  "prefix": (level) => {
    return level + " " + new Date (). toISOString ();
  },

  "level": "info",
};

module.exports = () => {
  return logger (conf);
};
