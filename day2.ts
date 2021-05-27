for (let i = 1; i <= 5; i++) {
    let space = "";
    for (let k = 1; k <= (5 - i); k++) {
        space = space + " ";
    }
    for (let j = 1; j < 2 * i; j++) {
        space = space + "*";

    }

    console.log(space);
}


console.log("----------------------------------");


for (let i = 5; i >= 1; i--) {
    let space = "";
    for (let k = 1; k <= (5 - i); k++) {
        space = space + " ";
    }
    for (let j = 1; j < 2 * i; j++) {
        space = space + "*";

    }

    console.log(space);
}

console.log("----------------------------------");
for (let i = 1; i <= 5; i++) {
    let space = "";
    for (let k = 1; k <= (5 - i); k++) {
        space = space + " ";
    }
    for (let j = 1; j < 2 * i; j++) {
        if (j == 1 || j == (2 * i - 1) || i == 5) {
            space = space + "*";
        }
        else {

            space = space + " ";
        }
    }
    console.log(space);
}