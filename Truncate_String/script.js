const truncateString = (str, num) => {
  if (num === 0) {
    return str;
  } else if (num < str.length) {
    str = str
      .split("")
      .slice(0, num + 1)
      .join("");
    return (str = `${str}...`);
  }
};

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
