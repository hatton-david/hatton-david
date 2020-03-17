const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}

const date = document.lastModified;
 document.getElementById("datetime").textContent = date;

 
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ce89b74543758b40be58cde73a35fa35";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
    document.getElementById('current').textContent = jsObject.weather[0].main; 
    document.getElementById('temperature').textContent = jsObject.main.temp; 
    document.getElementById('humidity').textContent = jsObject.main.humidity; 
    document.getElementById('windspeed').textContent = jsObject.wind.speed; 
   

  });

 