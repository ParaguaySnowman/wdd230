var humidity = document.getElementById("humidity").innerHTML;
var temp = document.getElementById("temp").innerHTML;
var windspeed = document.getElementById("windspeed").innerHTML;
var windchill = Math.round(
    35.74 + 
    (0.6215*temp) - 
    (35.75 * 
     (Math.pow(windspeed,0.16))) + 
     (0.4275 * 
      temp * 
      (Math.pow(windspeed,0.16))));

document.getElementById("windchill").innerHTML = windchill;

function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
.classList.toggle("responsive");
}

//show current year
document.querySelector("#current-year").textContent = new Date().getFullYear();

//show current date
var date = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById("current-date").textContent = date.toLocaleDateString('en-UK',options);