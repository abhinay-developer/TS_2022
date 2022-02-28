function displayAges(theAges) {
    var ages = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        ages[_i - 1] = arguments[_i];
    }
    console.log(theAges);
    for (var _a = 0, ages_1 = ages; _a < ages_1.length; _a++) {
        var age = ages_1[_a];
        console.log(age);
    }
}
displayAges("Ages", 10, 20, 40, 50, 89, 100, 87);
