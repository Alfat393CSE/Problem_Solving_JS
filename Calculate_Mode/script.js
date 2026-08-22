const findMode = (arr) => {
  let obj = {};
  let maxItem = 0;
  let mode;

  for (let element of arr) {
    obj[element] = (obj[element] || 0) + 1;
    if (obj[element] > maxItem) {
      maxItem = obj[element];
      mode = element;
    }
  }
  return mode;
};

console.log(findMode([1, 2, 2, 3, 1, 4, 2, 4, 4, 4, 4]));
