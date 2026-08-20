const startsWith = (str, sub) => {
  str = str.toLowerCase().split(" ");
  sub = sub.toLowerCase();
  if (str[0] === sub) {
    return true;
  } else {
    return false;
  }
};

console.log(startsWith("Hello World", "hello"));
console.log(startsWith("Hello World", "world"));
console.log(startsWith("", "world"));
