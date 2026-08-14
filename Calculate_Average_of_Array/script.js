const calculateAverage = (arr) => {
  let length = arr.length;
  arr = arr.reduce((acc, cur) => {
    return acc + cur;
  }, 0);
  return arr / length;
};

console.log(calculateAverage([5, 10, 2, 8]));
