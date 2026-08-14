const arraysAreEqual = (arrOne, arrTwo) => {
  // const isEqual = JSON.stringify(arrOne) === JSON.stringify(arrTwo);
  // return isEqual;
  if (arrOne.length !== arrTwo.length) {
    return false;
  }
  return arrOne.every((val, index) => {
    if (val === arrTwo[index]) {
      return true;
    } else {
      return false;
    }
  });
};

console.log(arraysAreEqual([1, 2, 3], [1, 2, 3]));
console.log(arraysAreEqual([1, 2, 3], [1, 2, 4]));
console.log(arraysAreEqual([], []));
