"use strict";
exports.__esModule = true;
for (var i = 5; i >= 1; i--) {
    var right = "";
    var j = void 0;
    for (var j_1 = 1; j_1 <= i; j_1++) {
        right = right + j_1;
    }
    console.log(right);
}
console.log("......................................");
console.log("......................................");
for (var i = 1; i <= 5; i++) {
    var right = "";
    var j = void 0;
    for (var j_2 = 1; j_2 <= i; j_2++) {
        right = right + j_2;
    }
    console.log(right);
}
console.log("......................................");
console.log("......................................");
// let arr = [1,2,3,6,3,6,1]
// console.log(arr[0],arr[2],arr[3]);
// console.log(arr [duplicates])
for (var i = 1; i <= 5; i++) {
    var right = "";
    var j = void 0;
    for (var j_3 = 1; j_3 <= i; j_3++) {
        if (i == 1 || i == 5 || j_3 == 1 || j_3 == i) {
            right = right + j_3;
        }
        else {
            right = right + " ";
        }
    }
    console.log(right);
}
