const countVowels = (str) => {
  let count = 0;
  str = str.toLowerCase().split("");
  str.forEach((element) => {
    if (
      element === "a" ||
      element === "e" ||
      element === "i" ||
      element === "o" ||
      element === "u"
    ) {
      count++;
    }
  });
  return count;
};

console.log(countVowels("Helloo world"));
console.log(countVowels("ThE quIck brOwn fOx"));
console.log(countVowels("Brrrp"));
