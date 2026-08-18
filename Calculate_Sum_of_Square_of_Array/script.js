const sumOfSquares = (arr) => {
  let square = [];
  for (let i of arr) {
    square.push(i ** 2);
  }
  return square.reduce((acc, cur) => acc + cur);
};

console.log(sumOfSquares([1, 2, 3]));
console.log(sumOfSquares([9, 12, 3]));
