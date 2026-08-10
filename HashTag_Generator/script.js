const generateHash = (str) => {
  if (str.length > 280 || str.trim().length === 0) {
    return false;
  }

  str = str.split(" ");
  str = str.map((val) => {
    // return val.replace(val[0], val[0].toUpperCase());
    return val.charAt(0).toUpperCase() + val.slice(1);
  });
  str = `#${str.join("")}`;
  return str;
};

console.log(generateHash("My name is Alfat Tasnim Hasan"));
