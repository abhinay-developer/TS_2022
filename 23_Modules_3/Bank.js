"use strict";
exports.__esModule = true;
var Bank = /** @class */ (function () {
    function Bank(bankName, branch, code, address) {
        this.bankName = bankName;
        this.branch = branch;
        this.code = code;
        this.address = address;
    }
    Bank.prototype.displayBankDetails = function () {
        console.log("\nBank Name:$" + this.bankName + " \nBranch :" + this.branch + " \nCode:" + this.code + " \nAddress:" + this.address);
    };
    return Bank;
}());
exports["default"] = Bank;
