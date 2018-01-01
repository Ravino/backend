"use strict";

const logger = require ("console-log-level");

module. exports = () => {
  return logger ({
    "prefix": (level) => {  
      return level + "  " + new Date (). toISOString ();
    },
    "level": "info",
  });
};
