const toCamelCase = (str) => {
  str = str.toLowerCase();
  if (str.length === 0) return false;
  str = str.trim().split(" ");
  str = str.map((val, index) => {
    if (index !== 0) {
      val = val.charAt(0).toUpperCase() + val.slice(1);
    }
    return val;
  });
  str = str.join("");
  return str;
};

console.log(toCamelCase("     hello          world"));
console.log(toCamelCase("Alfat TASnim HASAN"));
