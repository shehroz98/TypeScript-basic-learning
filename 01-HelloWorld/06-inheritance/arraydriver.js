"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var shape_1 = require("./shape");
var circle_1 = require("./circle");
var rectangle_1 = require("./rectangle");
var myshape = new shape_1.shape(5, 10);
console.log(myshape);
var mycircle = new circle_1.circle(10, 20, 50);
console.log(mycircle);
var myrectangle = new rectangle_1.rectangle(20, 40, 60, 80);
console.log(myrectangle);
var theshapes = [];
theshapes.push(myshape);
theshapes.push(myrectangle);
theshapes.push(mycircle);
for (var _i = 0, theshapes_1 = theshapes; _i < theshapes_1.length; _i++) {
    var allShapes = theshapes_1[_i];
    console.log(allShapes);
}
