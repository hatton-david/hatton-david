const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}

const date = document.lastModified;
 document.getElementById("datetime").textContent = date;

 
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5678757&appid=5013c3a4f5ead239b175bb0335026653&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
    document.getElementById('current').textContent = jsObject.weather[0].main; 
    document.getElementById('temperature').textContent = jsObject.main.temp; 
    document.getElementById('humidity').textContent = jsObject.main.humidity; 
    document.getElementById('windspeed').textContent = jsObject.wind.speed; 
   

  });

 