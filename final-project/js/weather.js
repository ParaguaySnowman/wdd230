const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.4152&lon=-111.8315&units=imperial&appid=7501d1d8281e61c575f55a43c59f7e2d"


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    const weatherData = jsObject;

    // Current Weather Summary

        //pull data from object
        const condition = weatherData.current.weather[0].main;
        const temperature = weatherData.current.temp;
        const humidity = weatherData.current.humidity;
        const imgsrc = 'https://openweathermap.org/img/w/' + weatherData.current.weather[0].icon + '.png';

        //fill html
        document.getElementById("condition").innerHTML = condition;
        document.getElementById("temperature").innerHTML = Math.round(temperature);
        document.getElementById("humidity").innerHTML = humidity;
        document.getElementById(`weather-icon`).setAttribute('src', imgsrc);

    // Three Day Weather Forecast
    
    
        //setup
        const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const shortMonths = ["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug.","Sep.","Oct.","Nov.","Dec."];
    

        //get daily high temperatures
        let dailyHighTemps = [];
        dailyHighTemps.push(Math.round(weatherData.daily[1].temp.max));
        dailyHighTemps.push(Math.round(weatherData.daily[2].temp.max));
        dailyHighTemps.push(Math.round(weatherData.daily[3].temp.max));

        //get month, date, and day
        for (let i = 1; i < 4; i++) {

            //get today's date
            let iFullDate = new Date();

            //increment by the counter
            iFullDate.setDate(iFullDate.getDate() + i);

            //get the month
            iMonth = iFullDate.getMonth();

            //get the date
            iDate = iFullDate.getDate();

            //get the day
            iDay = iFullDate.getDay();

            //fill HTML
            document.getElementById("date"+i+"day").innerHTML = shortDays[iDay];
            document.getElementById("date"+i+"month").innerHTML = shortMonths[iMonth-1];
            document.getElementById("date"+i+"date").innerHTML = iDate;

            //test
            document.getElementById("date"+i+"temp").innerHTML = dailyHighTemps[i-1]
          };

          //weather alerts

          //check if there is a weather alert
          if(weatherData.hasOwnProperty('alerts')) {

              //get data
              let alertCategory = weatherData.alerts[0].event;
              let alertDescription = weatherData.alerts[0].description;
              
              //publish alert
              alert(alertCategory + ":" + alertDescription);
          };
  });