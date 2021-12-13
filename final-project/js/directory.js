const requestURL = 'file:///C:/Users/parke/wdd230/final-project/json/directory.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    const prophets = jsonObject['prophets'];/*

    for (let i = 0; i < prophets.length; i++ ) {
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let p1 = document.createElement('p');
        let p2 = document.createElement('p');
        let picture = document.createElement('img');

        picture.setAttribute('src', prophets[i].imageurl);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('alt', prophets[i].name + ' ' + prophets[i].lastname);

        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
        p1.textContent = 'Date of Birth: ' + prophets[i].birthdate;
        p2.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        
        card.appendChild(h2);            
        card.appendChild(p1);            
        card.appendChild(p2);            
        card.appendChild(picture);

        document.querySelector('div.cards').appendChild(card);
    }*/    
  });