const repeatString = (str, num) => {
  if (num > 0) {
    return str.repeat(num);
  } else {
    return str;
  }
};

console.log(repeatString("abc", 5));
console.log(repeatString("hello", 0));
