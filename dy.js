"use strict";
exports.__esModule = true;
var x = 123;
var r;
var s = 0;
while (x != 0) {
    var y = x;
    r = Math.round(x % 10);
    s = s + r;
    x = Math.round(x / 10);
    console.log("r=" + r, "s=" + s, "x=" + x, "y=" + y);
}
console.log(s);
