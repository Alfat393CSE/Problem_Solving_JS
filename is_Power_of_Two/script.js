const isPowerOfTwo = (num) => {
  let result = false;
  for (let i = 1; i < num; i++) {
    if (2 ** i === num) {
      result = true;
    }
  }
  return result;
};

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(7));
console.log(isPowerOfTwo(64));
