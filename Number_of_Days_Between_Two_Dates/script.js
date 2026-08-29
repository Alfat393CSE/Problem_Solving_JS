const calculateDaysBetweenDates = (start, end) => {
  let Days = 24 * 60 * 60 * 1000;
  start = new Date(start).setHours(0, 0, 0, 0);
  end = new Date(end).setHours(0, 0, 0, 0);
  return Math.round(Math.abs(end - start) / Days);
};

console.log(calculateDaysBetweenDates("2024-01-01", "2024-01-31"));
console.log(calculateDaysBetweenDates("2024-01-01", "2025-01-01"));
