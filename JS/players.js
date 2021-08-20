// top players
document.getElementById("blog-title").style.color = "rgb(55,99,240)";
// top  blog
document.getElementById("blog-title").style.color = "rgb(100,99,240)";
// player
// const players = document.querySelectorAll("players");
// console.log(players);
// Add new players
document.getElementById("add-btn").addEventListener("click", function (event) {
  const li = document.createElement("li");
  li.innerText = "unknown-player";
  document.getElementById("list-container").appendChild(li);
});
document
  .getElementById("list-container")
  .addEventListener("click", function (event) {
    event.target.parentNode.removeChild(event.target);
  });
//   input field to buy t-shirts
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const inputField = document.getElementById("input-field");

// add event handle in minus button
minus.addEventListener("click", function (event) {
  event.preventDefault();
  const currentValue = Number(inputField.value) || 0;
  if (currentValue > 0) {
    inputField.value = currentValue - 1;
    plus.removeAttribute("disabled");
  }
});

// add event handle in plus button
plus.addEventListener("click", function (event) {
  event.preventDefault;
  const currentValue = Number(inputField.value) || 0;

  if (currentValue < 5) {
    inputField.value = currentValue + 1;
    if (inputField.value == 5) {
      plus.setAttribute("disabled", true);
    }
  }
});
// jodio disabled attribute or set er kaj ta  event parameter dhore..keup and  change diyei kora manansoi jeta delete-confirm file'a korchilam...but akhane avabei properly solved hoiye gece so ar complexity'r dorkar nai
