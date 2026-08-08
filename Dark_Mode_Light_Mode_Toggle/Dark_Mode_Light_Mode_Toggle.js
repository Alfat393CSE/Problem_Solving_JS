let button = document.querySelector("button");
let mode = "light";

button.addEventListener("click", () => {
  if (mode !== "light") {
    document.body.style.backgroundColor = "white";
    mode = "light";
    console.log(mode);
  } else {
    document.body.style.backgroundColor = "black";
    mode = "dark";
    console.log(mode);
  }
});
