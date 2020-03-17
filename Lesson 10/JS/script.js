const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}

const date = document.lastModified;
 document.getElementById("datetime").textContent = date;

 
const apiURL = 'http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=ce89b74543758b40be58cde73a35fa35';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
   
    document.getElementById('current').textContent = jsObject.weather[0].main; 
    document.getElementById('temperature').textContent = jsObject.main.temp; 
    document.getElementById('humidity').textContent = jsObject.main.humidity; 
    document.getElementById('windspeed').textContent = jsObject.main.windSpeed; 
   
    const currentTemp = document.querySelector('#temperature');
    const windSpeed = document.querySelector('#windspeed');
    const humidity = document.querySelector('#humidity');
    const currentW = document.getElementById('#current');
    
    currentW.textContent = jsObject.main.temp;
    currentTemp.textContent = jsObject.main.temp;
    windSpeed.textContent = jsObject.wind.speed;
    humidity.textContent = jsObject.main.humidity;





    
  });

 