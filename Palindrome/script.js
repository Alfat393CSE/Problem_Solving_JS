const isPalindrome = (str) => {
  //   str = str.split("");
  //   str = str.map((item) => item.replace(/[^a-zA-Z0-9]/g, ""));
  //   str = str.join("").toLowerCase();
  //   let word = str.split("").reverse().join("");
  
  str = str.toLowerCase().replace(/[^\w]|_/g, "");
  let word = str.split("").reverse().join("");

  if (str === word) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("Racecar"));
console.log(isPalindrome("hello"));
