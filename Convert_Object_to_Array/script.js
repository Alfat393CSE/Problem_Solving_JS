const convertArray = (obj) => {
  return Object.entries(obj).flat();
};

const convertObject = (arr) => {
//   return Object.assign({}, arr);
  return Object.fromEntries(arr);
};

console.log(
  convertArray({
    name: "Alfat",
    age: 26,
    city: "Dhaka",
  })
);

// console.log(convertObject(["Alfat", 26, "Dhaka"]));
console.log(
  convertObject([
    ["id", 101],
    ["status", "active"],
  ])
);

