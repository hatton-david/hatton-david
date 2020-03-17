var t = document.getElementById("temperature").innerHTML;
var ws = document.getElementById("windspeed").innerHTML;
var speedF = Math.pow(ws, 0.16);
var windChill = Math.round(35.74 + (0.6215 * t) - (35.75 * speedF) + (0.4275 * t * speedF));

if (t <= 50 && ws >= 3) {
  document.getElementById("windchill").innerHTML = `${windChill}&deg;F`;
}
else {
    document.getElementById('windchill').textContent = ("N/A");
}