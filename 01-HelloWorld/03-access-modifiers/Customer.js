var customer = /** @class */ (function () {
    function customer(first, last) {
        this._firstname = first;
        this._lastname = last;
    }
    Object.defineProperty(customer.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(customer.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    return customer;
}());
var mycustomer = new customer("hassan", "irfan");
console.log(mycustomer);
