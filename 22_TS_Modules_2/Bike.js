"use strict";
exports.__esModule = true;
var Bike = /** @class */ (function () {
    function Bike(brand, cc) {
        this.brand = brand;
        this.cc = cc;
    }
    Bike.prototype.displayBikeInfo = function () {
        console.log("Brand :" + this.brand + " CC::" + this.cc);
    };
    return Bike;
}());
exports["default"] = Bike;
