const simplePasswordValidator = (str) => {
  let hasUpperCase = false;
  let hasLoweCase = false;
  let hasDigit = false;
  for (let i of str) {
    if (i.charCodeAt() >= 65 && i.charCodeAt() <= 90) {
      hasUpperCase = true;
    } else if (i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
      hasLoweCase = true;
    } else if (!isNaN(parseInt(i))) {
      hasDigit = true;
    }
  }
  if (
    hasUpperCase === true &&
    hasLoweCase === true &&
    hasDigit === true &&
    str.length >= 8
  ) {
    return true;
  } else {
    return false;
  }
};

console.log(simplePasswordValidator("afkdsfadsf"));
console.log(simplePasswordValidator("afkdsfadsf1"));
console.log(simplePasswordValidator("afkdsfadsf1A"));
console.log(simplePasswordValidator("afkdsfadsf1Aa"));
