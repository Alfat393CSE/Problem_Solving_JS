function FindLargestNumber(str) {
  let word = str;

  if (str.trim() === "") {
    return false;
  } else {
    word = str.split(" ");
    word.sort((a, b) => {
      return b.length - a.length;
    });
    console.log(word);
    console.log(word[0]);
  }
}

console.log(
  FindLargestNumber("This is Alfat Tasnim Hasan.. I am practicing JavaScript"),
);
