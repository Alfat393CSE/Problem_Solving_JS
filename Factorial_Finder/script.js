const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    let fac = 1;
    for (let i = 1; i <= n; i++) {
      fac = fac * i;
    }
    return fac;
  }
};

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(3));
