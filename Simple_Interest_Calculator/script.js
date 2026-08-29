const calculateSimpleInterest = (amount, rate, year) => {
  return (amount * rate * year) / 100;
};

console.log(calculateSimpleInterest(1000, 5, 3));
