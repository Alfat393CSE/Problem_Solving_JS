const numberRange = (start, end) => {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
};

console.log(numberRange(0, 5));
console.log(numberRange(3, 7));
console.log(numberRange(-2, 2));
