const hambutton = document.querySelector(".menu");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
function bigImg(x) {
  x.style.height = "400px";
  x.style.width = "400px";
}

function normalImg(x) {
  x.style.height = "200px";
  x.style.width = "200px";
}