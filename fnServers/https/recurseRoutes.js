"use strict";


const recurseRoutes = (app, obj, method) => {

  if (typeof obj !== "object") {
    const error = "error! Obj not type object";
    console.log (error);
    return error;
  }


  for (let i in obj) {

    if (obj [i].middleware ) {
console.log (i);
      app [method] ( obj [i].route, obj [i].middleware, obj [i].callback);
    }

    else {
console.log (i);
      app [method] (obj[i].route, obj[i].callback);
    }
  }
};

module.exports = recurseRoutes;
