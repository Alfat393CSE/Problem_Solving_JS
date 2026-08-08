const content = document.querySelector(".content");
const plus = document.querySelector("#plus");
const minus = document.querySelector("#minus");
const reset = document.querySelector("#reset");

let store = 0;

plus.addEventListener("click", () => {
  store++;
  content.textContent = store;
});

minus.addEventListener("click", () => {
  store--;
  content.textContent = store;
});

reset.addEventListener("click", () => {
  store = 0;
  content.textContent = store;
});
