const sortAscending = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
//   arr.sort((a, b) => {
//     return a - b;
//   });
//   return arr;
};

console.log(sortAscending([5, 3, 10, 8]));
