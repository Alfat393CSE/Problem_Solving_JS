const isUpperCase = (char) => {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90) {
    return true;
  } else {
    return false;
  }
};

const isLowerCase = (char) => {
  if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122) {
    return true;
  } else {
    return false;
  }
};

console.log(isUpperCase("s"));
console.log(isUpperCase("S"));
console.log(isLowerCase("s"));
console.log(isLowerCase("S"));
