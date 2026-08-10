const FindLargestNumber = (str) => {
  if (str.trim().length === "") {
    return false;
  }
  str = str.split(" ");
  // str.sort((a, b) => {
  //   return b.length - a.length;
  // });
  // return str[0];

  return str.reduce((acc, cur) => {
    if (acc.length < cur.length) {
      return cur;
    } else {
      return acc;
    }
  }, "");
};

console.log(
  FindLargestNumber("This is Alfat Tasnim Hasan.. I am practicing JavaScript"),
);
