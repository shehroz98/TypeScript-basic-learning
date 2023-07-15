"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.rectangle = void 0;
var shape_1 = require("./shape");
var rectangle = /** @class */ (function (_super) {
    __extends(rectangle, _super);
    function rectangle(x1, y1, _lenght, _width) {
        var _this = _super.call(this, x1, y1) || this;
        _this._lenght = _lenght;
        _this._width = _width;
        return _this;
    }
    Object.defineProperty(rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(rectangle.prototype, "lenght", {
        get: function () {
            return this._lenght;
        },
        set: function (value) {
            this._lenght = value;
        },
        enumerable: false,
        configurable: true
    });
    rectangle.prototype.getinfo = function () {
        return _super.prototype.getinfo.call(this) + " length=".concat(this._lenght, ", width=").concat(this._width);
    };
    return rectangle;
}(shape_1.shape));
exports.rectangle = rectangle;
