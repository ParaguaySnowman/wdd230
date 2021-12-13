const requestURL = 'https://paraguaysnowman.github.io/wdd230/final-project/json/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const businesses = jsonObject['mesa-businesses'];

    for (let i = 0; i < businesses.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let picture = document.createElement('img');

        picture.setAttribute('src', businesses[i].logo);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('alt', businesses[i].businessName + " logo");

        h2.textContent = businesses[i].businessName;
        p1.textContent = 'Phone: ' + businesses[i].phone;
        p2.textContent = 'Address: ' + businesses[i].address;
        p3.textContent = 'Website: ' + businesses[i].website;
        
        card.appendChild(picture);
        card.appendChild(h2);            
        card.appendChild(p1);            
        card.appendChild(p2); 
        card.appendChild(p3);       
        
        document.querySelector('div.cards').appendChild(card);
    } 
  });