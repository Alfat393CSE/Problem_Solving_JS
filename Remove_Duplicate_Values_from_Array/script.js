const removeDuplicates = (arr) => {
  return [...new Set(arr)];
};

console.log(removeDuplicates([1, 2, 3, 2, 1, 4]));
console.log(removeDuplicates([5, 6, 7, 7, 8, 8, 9]));
console.log(removeDuplicates([1, 2, 3, 4]));
console.log(removeDuplicates([]));
