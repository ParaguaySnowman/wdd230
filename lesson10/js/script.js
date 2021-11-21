const apiURL = `http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=7501d1d8281e61c575f55a43c59f7e2d`;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('temp').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windspeed').textContent = jsObject.wind.speed;


    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
    const desc = jsObject.weather[0].description;  // note how we reference the weather array
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

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

const apiURLforecast = `http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7501d1d8281e61c575f55a43c59f7e2d`;
                        
fetch(apiURLforecast)
    .then((response) => response.json())
    .then((jsObject) => {
        let day = 1; // this variable will help me find the correct html elements by id
        const dayofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        // finds the elements form the list in which dt_txt includes "18:00:00"
        jsObject.list.forEach(element => {
            if (element.dt_txt.includes("18:00:00")) {
                // displaying day of the week
                let d = new Date(element.dt_txt);
                document.getElementById(`dayofweek${day}`).textContent = dayofWeek[d.getDay()];

                // displaying forecast temperature
                document.getElementById(`forecast-temp${day}`).textContent = element.main.temp;

                // displaying image icon
                let imagesrc = `https://openweathermap.org/img/w/${element.weather[0].icon}.png`;
                let description = element.weather[0].description;
                document.getElementById(`image-src${day}`).setAttribute('src', imagesrc);
                document.getElementById(`image-src${day}`).setAttribute('alt', description);

                // autoincrements my day variable
                day++;
            }
        });
    });



function toggleMenu() {
  document
    .getElementsByClassName("navigation")[0]
.classList.toggle("responsive");
}

//show current year
document.querySelector("#current-year").textContent = new Date().getFullYear();

//show date current date
var date = new Date();
var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

document.getElementById("current-date").textContent = date.toLocaleDateString('en-UK',options);