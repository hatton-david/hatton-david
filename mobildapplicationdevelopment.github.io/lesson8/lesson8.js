const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function openBox(element){
	var elem = document.getElementById(element);
	elem.style.transition = "height 0.2s linear 0s";
	elem.style.height = "200px";
}
function shutBox(element){
	var elem = document.getElementById(element);
	elem.style.transition = "height 0.2s linear 0s";
	elem.style.height = "0px";
}
function changeColor(element,color){
	var elem = document.getElementById(element);
	elem.style.transition = "background 1.0s linear 0s";
	elem.style.background = color;
}
