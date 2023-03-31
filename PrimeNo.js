let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

prime(array);

function prime(arr) {
  let arrayLenth = array.length;
  let PrimeNoArray = [];

  function checkPrime(arrayDigit) {
    if (arrayDigit <= 1) {
      console.log(`${arrayDigit} is not a composite number or not a prime no`);
    } else {
      for (let x = 2; x < arrayDigit; x++) {
        if (arrayDigit % x == 0) {
          return false;
        }
      }
      return true;
    }
  }
  for (let y = 0; y <= arrayLenth - 1; y++) {
    if (checkPrime(array[y])) {
      PrimeNoArray.push(array[y]);
    }
  }
  console.log(PrimeNoArray);
}
