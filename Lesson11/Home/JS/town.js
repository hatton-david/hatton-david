
fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then(function (response) {
    return response.json();
  })
    .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {

        if (towns[i].name == "Fish Haven" || towns[i].name == "Preston" || towns[i].name == "Soda Springs")
        {

      let card = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p')
      let image = document.createElement('img');
      let alt = document.createElement('img');
      
        h2.textContent = towns[i].name; 
        h3.textContent = towns[i].motto; 
        year.textContent = 'Year Founded: ' + towns[i].yearFounded; 
        population.textContent = 'Population: ' + towns[i].currentPopulation;
        rainfall.textContent = 'Annual Rainfall: ' + towns[i].averageRainfall;
        image.setAttribute('src', 'Home/Images/' + towns[i] + ".jpg");
        image.setAttribute('alt', "picture of: " + h2.textContent);
      
      card.appendChild(h2);
      card.appendChild(h3);
      card.appendChild(year);
      card.appendChild(population);
      card.appendChild(rainfall);
      card.appendChild(image);
      
      

      document.querySelector('div.towns').appendChild(card);
      }
  
}   
});
