"use strict";


const recurseRoutes = (app, obj, method) => {

  if (typeof obj !== "object") {
    const error = "error! Obj not type object";
    console.log (error);
    return error;
  }


  for (let i in obj) {

    if (obj [i].middleware) {
      app [method] ( obj[i].route, obj[i].middleware, obj[i].callback);
    }

    else {
      app [method] (obj[i].route, obj[i].callback);
    }
  }
};

module.exports = recurseRoutes;
