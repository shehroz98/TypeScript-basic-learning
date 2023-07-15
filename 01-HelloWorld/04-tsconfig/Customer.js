"use strict";
var newcustomer = /** @class */ (function () {
    function newcustomer(first, last) {
        this._firstname = first;
        this._lastname = last;
    }
    Object.defineProperty(newcustomer.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(newcustomer.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    return newcustomer;
}());
var mycustomer3 = new newcustomer("hassan", "irfan");
console.log(mycustomer3);
