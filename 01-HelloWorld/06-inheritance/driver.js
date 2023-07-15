"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myshape = new shape_1.shape(5, 10);
console.log(myshape.getinfo());
var mycircle = new circle_1.circle(10, 20, 50);
console.log(mycircle.getinfo());
var myrectangle = new rectangle_1.rectangle(20, 40, 60, 80);
console.log(myrectangle.getinfo());
