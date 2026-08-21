const findMedian = (arr) => {
  arr = arr.sort((a, b) => a - b);
  if (arr.length % 2 !== 0) {
    let odd = (arr.length + 1) / 2;
    return arr[odd - 1];
  }

  if (arr.length % 2 === 0) {
    let evenFirst = arr.length / 2;
    let evenSecond = arr.length / 2 + 1;
    return (arr[evenFirst - 1] + arr[evenSecond - 1]) / 2;
  }
};

console.log(findMedian([5, 3, 9, 1, 7]));
console.log(findMedian([2, 4, 6, 8]));
console.log(findMedian([1, 3, 5, 7, 9, 11]));
console.log(findMedian([5, 3, 9, 1, 7, 19, 11]));
