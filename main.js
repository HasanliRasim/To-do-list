const input = document.querySelector("#input");
const button = document.querySelector("#button");
const list = document.querySelector("#toDoList");

button.addEventListener("click", function (event) {
  event.preventDefault();
  const task = input.value;
  if (task) {
    const item = document.createElement("li");
    item.textContent = task;
    list.appendChild(item);
  }
});
