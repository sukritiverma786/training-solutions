// left triangle pattarn
console.log("***************************************** left triangle pattarn");
let a = "";
for (i = 0; i <= 4; i++) {
  for (j = 0; j <= i; j++) {
    a += "*";
  }
  a += "\n";
}
console.log(a);

console.log(
  " opposite of left ***************************************** triangle pattarn"
);

let num = 6;
startP = "";

for (i = 1; i <= num; i++) {
  for (k = 1; k <= num - i; k++) {
    startP += "*";
  }
  startP += "\n";
}

console.log(startP);

// ********** right triangle pattarn
console.log(
  "*****************************************  right triangle pattarn"
);

let n = 5;
let startPrint = "";

for (i = 1; i <= n; i++) {
  for (j = 1; j <= n - i; j++) {
    startPrint += " ";
  }

  for (k = 1; k <= i; k++) {
    startPrint += "*";
  }
  startPrint += "\n";
}

console.log(startPrint);

//
// ******************************************************************************
console.log("*****************************************  Diamond pattarn");
let no = 5;
let startPrin = "";

for (i = 1; i <= no; i++) {
  for (j = 1; j <= no - i; j++) {
    startPrin += " ";
  }

  for (k = 0; k <= 2 * (i - 1); k++) {
    startPrin += "*";
  }
  startPrin += "\n";
}

console.log(startPrin);
