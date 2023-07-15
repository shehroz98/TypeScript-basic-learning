"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
const rectangle_1 = require("./rectangle");
let mycircle = new circle_1.circle(10, 20, 50);
let myrectangle = new rectangle_1.rectangle(20, 40, 60, 80);
let theshapes = [];
theshapes.push(myrectangle);
theshapes.push(mycircle);
for (let allShapes of theshapes) {
    console.log(allShapes.getinfo());
    console.log(allShapes.calculate());
    console.log();
}
