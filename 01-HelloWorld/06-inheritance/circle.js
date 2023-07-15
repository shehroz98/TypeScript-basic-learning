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
exports.circle = void 0;
var shape_1 = require("./shape");
var circle = /** @class */ (function (_super) {
    __extends(circle, _super);
    function circle(x, y, _radius) {
        var _this = _super.call(this, x, y) || this;
        _this._radius = _radius;
        return _this;
    }
    Object.defineProperty(circle.prototype, "radius", {
        get: function () {
            return this._radius;
        },
        set: function (value) {
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    circle.prototype.getinfo = function () {
        return _super.prototype.getinfo.call(this) + " radius=".concat(this._radius);
    };
    return circle;
}(shape_1.shape));
exports.circle = circle;
