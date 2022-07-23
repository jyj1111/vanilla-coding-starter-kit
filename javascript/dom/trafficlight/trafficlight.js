const buttonElement = document.querySelector("button");
const spElement = document.querySelector(".lightWrapper");
const color = ["red", "orange", "green"];
spElement.addEventListener("click", function (e) {
  e.target.style.backgroundColor = e.target.classList[1];
});
buttonElement.addEventListener("click", function (e) {
  for (let item of spElement.children) {
    item.style.backgroundColor = "white";
  }
});
