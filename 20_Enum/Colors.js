var Colors;
(function (Colors) {
    Colors[Colors["RED"] = 0] = "RED";
    Colors[Colors["GREEN"] = 1] = "GREEN";
    Colors[Colors["BLUE"] = 2] = "BLUE";
    Colors[Colors["YELLOW"] = 3] = "YELLOW";
    Colors[Colors["VIOLET"] = 4] = "VIOLET";
})(Colors || (Colors = {}));
for (var color in Colors) {
    console.log(Colors[color]);
}
