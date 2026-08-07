const text = document.querySelector("#input");
const length = document.querySelector("#value");

// text.addEventListener("input", () => {
//     length.textContent = `Characters: ${text.value.length}`;
// });

text.addEventListener("input", (e) => {
  length.textContent = `Characters: ${e.target.value.length}`;
});
