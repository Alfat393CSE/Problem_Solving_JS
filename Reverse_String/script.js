const reverseString = (str) => {
  //   return str.split("").reverse().join("");
  let reverse = [];
  str = str.split("");
  for (let i = str.length - 1; i >= 0; i--) {
    // reverse.push(str[i]);
    reverse = reverse + str[i];
  }
  //   return reverse.join("");
  return reverse;
};

console.log(reverseString("hello"));
