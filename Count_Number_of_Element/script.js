const numbers = [1, 2, 2, 3, 1, 4, 2, 10, 10];
const obj = {};

// for (let i of numbers) {
//   obj[i] = (obj[i] || 0) + 1;
// }

for (let i = 0; i < numbers.length; i++) {
  let count = 0;
  for (let j = 0; j < numbers.length; j++) {
    if (numbers[i] === numbers[j]) {
      count++;
    }
  }
  obj[numbers[i]] = count;
}

console.log(obj);
