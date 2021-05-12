for (var i = 1; i <= 5; i++) {
    var space = "";
    for (var k = 1; k <= (5 - i); k++) {
        space = space + " ";
    }
    for (var j = 1; j < 2 * i; j++) {
        space = space + "*";
    }
    console.log(space);
}
console.log("----------------------------------");
for (var i = 5; i >= 1; i--) {
    var space = "";
    for (var k = 1; k <= (5 - i); k++) {
        space = space + " ";
    }
    for (var j = 1; j < 2 * i; j++) {
        space = space + "*";
    }
    console.log(space);
}
