const sumOfDigits = (input) => {
  let sum = 0;
  if (input < 0) {
    return false;
  }

  //   const arr = [...String(input)].map(Number);
  //   return arr.reduce((acc, cur) => acc + cur);

  while (input > 0) {
    let digit = input % 10;
    sum = sum + digit;
    input = Math.floor(input / 10);
  }
  return sum;
};

console.log(sumOfDigits(123456));
console.log(sumOfDigits(4321));
console.log(sumOfDigits(123456));
