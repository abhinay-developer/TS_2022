//  ...VarName
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var colors = ["RED", "GREEN", "BLUE", "VIOLET"];
var bikes = ["CBZ", "HONDA", "FZ", "PULSAR"];
var colorsAndBikes = __spreadArray(__spreadArray([], colors, true), bikes, true);
//console.log(colorsAndBikes);
//traditional for
for (var i = 0; i < colorsAndBikes.length; i++) {
    // console.log(colorsAndBikes[i]);
}
colorsAndBikes.forEach(function (colorAndBike) {
    // console.log(colorAndBike);
});
for (var _i = 0, colorsAndBikes_1 = colorsAndBikes; _i < colorsAndBikes_1.length; _i++) {
    var colorAndBike = colorsAndBikes_1[_i];
    //console.log(colorAndBike);
}
for (var colorAndBike in colorsAndBikes) {
    console.log(colorsAndBikes[colorAndBike]);
}
