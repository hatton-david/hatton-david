const hambutton = document.querySelector(".menu");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}


function jsonObject() {
  var txt = '{"name":"David", "age":34, "city":"Frankfort", "state":"Kentucky"}'
  var obj = JSON.parse(txt);
  
  document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", " + obj.city + ", " + obj.state + ".";
  }
  
  function jsonString() {
  var obj = {"name":"David", "age":34, "city":"Frankfort", "state":"Kentucky"};
  var myJSON = JSON.stringify(obj);
  
  document.getElementById("demoTwo").innerHTML = myJSON;
  }