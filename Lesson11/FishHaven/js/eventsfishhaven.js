fetch('https://byui-cit230.github.io/weather/data/towndata.json')
    .then(function (response) {
    return response.json();
  })
    .then(function (jsonObject) {
    console.table(jsonObject);
    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++) {

        if (towns[i].name == "Fish Haven")
        {

      let card = document.createElement('section');

      for (let x = 0; x <= 4; x++) {
      let townEvents = document.createElement('p');
      
      
        
      townEvents.textContent = towns[i].events[x]; 
        
      
      
      card.appendChild(townEvents);
      }

      document.querySelector('.towns').appendChild(card);
      }
  
}   
});