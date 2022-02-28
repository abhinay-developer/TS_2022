var Car = /** @class */ (function () {
    function Car(brandName, color, height, width, price, cc, capacity) {
        this.brandName = brandName;
        this.color = color;
        this.height = height;
        this.width = width;
        this.price = price;
        this.cc = cc;
        this.capacity = capacity;
    }
    return Car;
}());
var car = new Car("Renault", "SILVER", 10, 50, 400000, 500, 6);
var car2 = new Car("TOYO", "White", 56, 90, 800000, 900, 8);
console.log(car);
console.log(car2);
