const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';
fetch(requestURL)
    .then(function (response) {
    return response.json();
  })
    .then(function (jsonObject) {
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet => {
      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h5One = document.createElement('h5');
      let h5Two = document.createElement('h5');
      let image = document.createElement('img');
      
        let fullname = `${prophet.name} ${prophet.lastname}`; 
        let bday = `Date of birth: ${prophet.birthdate}` 
        let bplace = `Place of birth: ${prophet.birthplace}`;

      h2.textContent = fullname;
      image.setAttribute('src', prophet.imageurl);
      image.setAttribute('alt', fullname);
      h5One.textContent = bday;
      h5Two.textContent = bplace;

      card.appendChild(h2);
      card.appendChild(h5One);
      card.appendChild(h5Two);
      card.appendChild(image);

      document.querySelector('.cards').appendChild(card);

    });



});
   