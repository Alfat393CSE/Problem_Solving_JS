const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  if (input.value.trim() === "") {
    ul.textContent = "nothing to add";
  } else {
    const list = document.createElement("li");
    list.textContent = input.value;
    ul.appendChild(list);
    input.value = "";
  }
});
