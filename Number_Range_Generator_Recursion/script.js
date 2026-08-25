const numberRange = (start, end, array = []) => {
  if (start <= end) {
    array.push(start);
    return numberRange(start + 1, end, array);
  }
  return array;
};

console.log(numberRange(0, 5));
console.log(numberRange(3, 7));
console.log(numberRange(-2, 2));
