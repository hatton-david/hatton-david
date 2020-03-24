const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}

const date = document.lastModified;
 document.getElementById("datetime").textContent = date;

 
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5678757&appid=d3f1c58302204f75b88736b9d75edafe&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   

    let ws = jsObject.wind.speed;
    let t = jsObject.main.temp;
    let speedF = Math.pow(ws, 0.16);
    document.getElementById('current').textContent = jsObject.weather[0].main; 
    document.getElementById('temperature').textContent = jsObject.main.temp; 
    document.getElementById('humidity').textContent = jsObject.main.humidity; 
    document.getElementById('windspeed').textContent = jsObject.wind.speed; 
   
    if (t <= 50 && ws >= 3) {
      var windChill = Math.round(35.74 + (0.6215 * t) - (35.75 * speedF) + (0.4275 * t * speedF)) + "&deg;F";
    }
    else {
      var windChill = "N/A";
    }
        document.getElementById('windchill').innerHTML = windChill;


  });

 