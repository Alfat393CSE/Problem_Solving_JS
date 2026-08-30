const generateBarChart = (arr) => {
  // way:1
  // const newArr = arr.map((val, index) => {
  //   let star = "";
  //   let num = 0;
  //   while (num < val) {
  //     star += "*";
  //     num++;
  //   }
  //   return `${index + 1}: ${star}`;
  // });
  // return newArr.join("\n");

  // way: 2
  return arr
    .map((val, index) => {
      return `${index + 1}: ${"*".repeat(val)}`;
    })
    .join("\n");
};

console.log(generateBarChart([5, 3, 9, 2]));
