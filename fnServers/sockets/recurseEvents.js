"use strict";


const recurseEvents = (clients, obj) => {

  if (typeof obj !== "object") {
    const error = "error! Obj not type object";
    console.log (error);
    return error;
  }


  for (let i in obj) {
    clients ( obj [i].nameEvent, obj [i].handler);
  }
};
