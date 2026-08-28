const isEmptyObject = (obj) => {
  if (obj && Object.keys(obj).length === 0 && obj.constructor === Object) {
    return `empty object`;
  } else {
    return `not empty object`;
  }
};

console.log(isEmptyObject({ name: "alfat" }));
console.log(isEmptyObject({}));
