const apiURL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=7501d1d8281e61c575f55a43c59f7e2d"

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // Weather Summary
    const condition = jsObject.list[0].weather[0].main;
    const temperature = jsObject.list[0].main.temp_max;
    const humidity = jsObject.list[0].main.humidity;
    const windspeed = jsObject.list[0].wind.speed;

    document.getElementById("condition").innerHTML = condition;
    document.getElementById("temp").innerHTML = Math.round(temperature);
    document.getElementById("humidity").innerHTML = humidity;
    document.getElementById("windspeed").innerHTML = Math.round(windspeed);


    // Code for windchill
    const temp = document.getElementById("temp").textContent;
    const mph = document.getElementById("windspeed").textContent;
    const windChillSpace = document.getElementById("wind-chill");

    function calcWindchill(temp, mph) {
        const windFactor = 35.74 + 0.6215*(temp) - 35.75*(mph)**0.16 + 0.4275*(temp)*(mph)**0.16;
        const windChill = Math.round(windFactor);
        windchill.innerHTML = windChill + " °F"; // windChillSpace.innerHTML = `${windChill} °F`; <-- How to do it with a Template Literal.
    }

    if (temp <= 50 && mph > 3) {
        calcWindchill(temp, mph);
    }

    else {
        windchill.innerHTML = "N/A"
    }

    // Five Day Code
    const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    let completeForecast = jsObject.list
    let fiveDay = completeForecast.filter(day => day.dt_txt.includes("18:00:00"));

    fiveDay.forEach((element, i) => {
        let currentDate = new Date(element.dt_txt);
        let currentDay = currentDate.getDay()
        let imgsrc = 'https://openweathermap.org/img/w/' + element.weather[0].icon + '.png';
        let desc = element.weather[0].description;
        let maxTemp = element.main.temp_max;
        
        document.getElementById(`day${i}`).innerHTML = shortDays[currentDay];
        document.getElementById(`img${i}`).setAttribute('src', imgsrc);
        document.getElementById(`img${i}`).setAttribute('alt', desc);
        document.getElementById(`forTemp${i}`).innerHTML = `${maxTemp} °F`;

        i++;
    });
  });
