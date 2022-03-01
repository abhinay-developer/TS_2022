var AdditionAndmultiplication = /** @class */ (function () {
    function AdditionAndmultiplication() {
    }
    AdditionAndmultiplication.prototype.add = function (num1, num2) {
        this.result = num1 + num2;
        console.log("Addition : " + this.result);
    };
    AdditionAndmultiplication.prototype.mul = function (num1, num2) {
        this.result = num1 * num2;
        console.log("Multiplication : " + this.result);
    };
    return AdditionAndmultiplication;
}());
var addAndMul = new AdditionAndmultiplication();
addAndMul.add(10, 20);
addAndMul.mul(9, 8);
