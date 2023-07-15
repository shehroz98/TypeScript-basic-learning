"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
var books = /** @class */ (function () {
    function books(_name, _author) {
        this._name = _name;
        this._author = _author;
    }
    Object.defineProperty(books.prototype, "author", {
        get: function () {
            return this._author;
        },
        set: function (value) {
            this._author = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(books.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    return books;
}());
exports.books = books;
