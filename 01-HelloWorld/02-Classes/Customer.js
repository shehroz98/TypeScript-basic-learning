var customer = /** @class */ (function () {
    function customer(first, last) {
        this.firstname = first;
        this.lastname = last;
    }
    return customer;
}());
var mycustomer = new customer("hassan", "irfan");
console.log(mycustomer);
