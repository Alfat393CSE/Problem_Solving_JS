const input = document.querySelector("#input");
const button = document.querySelector("#button");
const tasks = document.querySelector("#tasks");

button.addEventListener("click", () => {
  if (input.value === "") {
    alert(`please enter a task.`);
  } else {
    let list = document.createElement("li");
    let btn = document.createElement("button");
    list.textContent = input.value;
    btn.textContent = "Delete";
    tasks.appendChild(list);
    list.appendChild(btn);
    input.value = "";
    btn.addEventListener("click", () => {
      list.remove();
      btn.remove();
    });
  }
});
