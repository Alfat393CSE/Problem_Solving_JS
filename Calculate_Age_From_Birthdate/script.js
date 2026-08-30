const calculateAge = (day) => {
  let today = new Date();
  day = new Date(day);

  let age = today.getFullYear() - day.getFullYear();
  let monthDiff = today.getMonth() - day.getMonth();

  if (monthDiff < 0 || (today.getDate() < day.getDate() && monthDiff === 0)) {
    return age - 1;
  } else {
    return age;
  }
};

console.log(calculateAge("2000-06-05"));
console.log(calculateAge("2010-08-29"));
