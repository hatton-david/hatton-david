const hambutton = document.querySelector(".menu");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function hideText(){
  document.getElementById("exampleText").classList.toggle("hide");
}
function colorText(){
document.getElementById("exampleText").classList.toggle("color");
}
function kickBall(){
  document.getElementById("ball").classList.toggle("right");
}
function loseBall(){
  document.getElementById("ball").classList.toggle("loseBall")
}