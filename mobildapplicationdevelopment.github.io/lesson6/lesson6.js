const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}

function myFunction() {
  var para = document.createElement("P");
  para.innerText = "I created a paragraph!";
  document.getElementById("myDIV").appendChild(para);
}
function forgotSomething() {
  var node = document.createElement("LI");
  var textnode = document.createTextNode("3");
  node.appendChild(textnode);
  document.getElementById("numbers").appendChild(node);
}
function numberOne() {
  var newNumber = document.createElement("LI");
  var textnode = document.createTextNode("1");
  newNumber.appendChild(textnode);
  
  var list = document.getElementById("badCounter");
  list.insertBefore(newNumber, list.childNodes[0]);
}
function removeTop() {
  var children = document.getElementById("badChildren");
  children.removeChild(children.childNodes[0]);
}