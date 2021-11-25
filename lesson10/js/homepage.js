const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
  .then(function(response) {
    return response.json();
  })
  .then(function(jsonObject) {
    console.table(jsonObject); // temporary checking for valid response and data parsing

    const towns = jsonObject["towns"];

    for (let i = 0; i < towns.length; i++) {
      if (
        towns[i].name == "Preston" ||
        towns[i].name == "Soda Springs" ||
        towns[i].name == "Fish Haven"
      ) {
        /*****************Create Element*************************/
        let townSummary = document.createElement("article");
        let townData = document.createElement("div");
        townData.setAttribute("class", "data");
        let townName = document.createElement("h2");
        let motto = document.createElement("h4");
        let yearFounded = document.createElement("p");
        let population = document.createElement("p");
        let rainfall = document.createElement("p");
        let photo = document.createElement("img"); 

        /***************Pull information from JSON for Article****************/ 
        townName.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = "Year Founded:" + " " + towns[i].yearFunded;
        population.textContent = "Current Population:" + " " + towns[i].currentPopulation;
        rainfall.textContent = "Average Rainfall:" + " " + towns[i].averageRainfall;
        photo.setAttribute("src", "./images/" + towns[i].photo);
        photo.setAttribute("alt", towns[i].name);

        //************ADD CHILD TO CARD******* */
        townSummary.appendChild(townData);
        townData.appendChild(townName);
        townData.appendChild(motto);
        townData.appendChild(population);
        townData.appendChild(rainfall);
        townSummary.appendChild(photo);

        document.querySelector("section.townSummary").appendChild(townSummary);
      }
    }
  });