const hambutton = document.querySelector(".menu");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function showBox() {
  var c = document.getElementById("showBox");
 var ctx = c.getContext("2d");
 ctx.beginPath();
 ctx.arc(95,50,40,0,2*Math.PI);
 ctx.stroke();
 }