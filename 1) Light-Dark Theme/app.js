const toggle = document.getElementById("toggleDark");
const body = document.querySelector("body");

toggle.addEventListener("click", function () {
  toggle.classList.toggle("fa-moon");
  console.log(toggle);
  if (toggle.classList.toggle("fa-sun")) {
    body.style.background = "white";
    body.style.color = "black";
  } else {
    body.style.background = "black";
    body.style.color = "white";
  }
});

