const countChar = (str, char) => {
  // let count = 0;
  let word = str.split("");
  // console.log(word);
  // for (let val of word) {
  //   if (val.toUpperCase() === char || val.toLowerCase() === char) {
  //     count++;
  //   }
  // }

  word = word.reduce((acc, cur) => {
    if (cur.toUpperCase() === char || cur.toLowerCase() === char) {
      acc++;
    }
    return acc;
  }, 0);
  return word;
};

console.log(countChar("missIsSippi", "s"));
