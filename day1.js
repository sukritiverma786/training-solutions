"use strict";
exports.__esModule = true;
for (var i = 0; i <= 3; i++) {
    var printstar = "";
    for (var j = 0; j <= 8; j++) {
        printstar = printstar + "*";
    }
    console.log(printstar);
}
for (var i = 0; i <= 4; i++) {
    var printStar = " ";
    for (var j = 0; j <= 4; j++) {
        if (i == j) {
            //print *
            printStar = printStar + "*";
        }
        else {
            // print " "
            printStar = printStar + "%";
        }
    }
    console.log(printStar);
}
for (var i = 0; i <= 4; i++) {
    var printstar = " ";
    for (var j = 0; j <= 4; j++) {
        if (i == 0 || i == 4 || j == 0 || j == 4) {
            printstar = printstar + "*";
        }
        else {
            printstar = printstar + " ";
        }
    }
    console.log(printstar);
}
for (var i = 5; i >= 1; i--) {
    var right = "";
    for (var j = 1; j <= i; j++) {
        right = right + "*";
    }
    console.log(right);
}
