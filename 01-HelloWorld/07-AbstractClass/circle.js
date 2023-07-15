"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
const shape_1 = require("./shape");
class circle extends shape_1.shape {
    constructor(x, y, _radius) {
        super(x, y);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getinfo() {
        return super.getinfo() + ` radius=${this._radius}`;
    }
    calculate() {
        return Math.PI * Math.pow(this._radius, 2);
    }
}
exports.circle = circle;
