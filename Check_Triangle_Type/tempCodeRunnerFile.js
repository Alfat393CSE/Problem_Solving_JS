const checkTriangleType = (a, b, c) => {
  if (typeof a !== "number" || typeof b !== "number" || typeof c !== "number") {
    return false;
  } else if (a === b && b === c) {
    return `equilateral`;
  } else if (
    (a === b || b === c || a === c) &&
    (a !== b || b !== c || a !== c)
  ) {
    return `isosceles`;
  } else {
    return `scalene`;
  }
};

console.log(checkTriangleType(3, 3, 3));
console.log(checkTriangleType(3, 4, 3));
console.log(checkTriangleType(5, 8, 6));