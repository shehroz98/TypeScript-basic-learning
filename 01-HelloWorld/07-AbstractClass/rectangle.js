"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = void 0;
const shape_1 = require("./shape");
class rectangle extends shape_1.shape {
    constructor(x1, y1, _lenght, _width) {
        super(x1, y1);
        this._lenght = _lenght;
        this._width = _width;
    }
    get width() {
        return this._width;
    }
    set width(value) {
        this._width = value;
    }
    get lenght() {
        return this._lenght;
    }
    set lenght(value) {
        this._lenght = value;
    }
    getinfo() {
        return super.getinfo() + ` length=${this._lenght}, width=${this._width}`;
    }
    calculate() {
        return this._lenght * this._width;
    }
}
exports.rectangle = rectangle;
