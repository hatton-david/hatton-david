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
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';
    console.log(jsObject);
    const currentTemp = document.querySelector('#temperature');
    const windSpeed = document.querySelector('#windspeed');
    const humidity = document.querySelector('#humidity');
    document.getElementById('icon').setAttribute('src', imagesrc); 

    currentTemp.textContent = jsObject.main.temp;
    windSpeed.textContent = jsObject.wind.speed;
    humidity.textContent = jsObject.main.humidity;


    function windChill() {
        var speedF = Math.pow(windSpeed, 0.16);
        var windChill = Math.round(35.74 + (0.6215 * currentTemp) - (35.75 * speedF) + (0.4275 * currentTemp * speedF));
      
        if (currentTemp <= 50 && windSpeed >= 3) {
          document.getElementById("windchill").innerHTML = windChill;
        }
        else {
            return 'N/A';
        }
      }
      
      windChill()

  });

 