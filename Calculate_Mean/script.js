const calculateMean = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let count = arr.length;
  arr = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return arr / count;
};

console.log(calculateMean([1, 2, 3, 4, 5]));
console.log(calculateMean([10, 20, 30]));
console.log(calculateMean([-1, 0, 1]));
console.log(calculateMean([]));
