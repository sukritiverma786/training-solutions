// left triangle pattarn
let a = "";
for (i = 0; i <= 4; i++) {
  for (j = 0; j <= i; j++) {
    a += "*";
  }
  a += "\n";
}
console.log(a);

// ********** right triangle pattarn

let n = 5;
let startPrint = "";

for (i = 1; i <= n; i++) {
  for (j = 1; j <= n - i; j++) {
    startPrint += " ";
  }

  for (k = 1; k <= i; k++) {
    startPrint += "*";
  }
  startPrint+=("\n")
}

console.log(startPrint);
