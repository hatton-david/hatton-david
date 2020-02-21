const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}

const date = document.lastModified;
 document.getElementById("datetime").textContent = date;