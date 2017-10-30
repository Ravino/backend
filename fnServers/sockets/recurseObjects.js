"use strict";

const recurseObj = (app, obj) => {

  if (typeof obj !== "object") {
    const error = "error! Obj no object type";
    console.log (error);
    return error;
  }


  for (let i in obj) {

    if (typeof obj[i] == "object") {
      recurseObj (app, obj [i]);
    }

    else {
      app.use (obj [i]);
    }
  }
};

module.exports = recurseObj;
