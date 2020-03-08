const hambutton = document.querySelector(".ham");
hambutton.addEventListener("click", toggleMenu, false);

function toggleMenu() {
document.querySelector(".navigation").classList.toggle("responsive");
}

const date = document.lastModified;
 document.getElementById("datetime").textContent = date;

 const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
    .then(function (response) {
    return response.json();
  })
    .then(function (jsonObject) {
        console.table(jsonObject);

    const towns = jsonObject['towns'];

    for (let i = 0; i < towns.length; i++ ) {

        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven")
        {

      let square = document.createElement('section');
      let h2 = document.createElement('h2');
      let h3 = document.createElement('h3');
      let year = document.createElement('p');
      let population = document.createElement('p');
      let rainfall = document.createElement('p')
      let image = document.createElement('img');
      
        h2.textContent = towns[i].name; 
        h3.textContent = towns[i].motto; 
        year.textContent = "Year Founded: " + towns[i].yearFounded; 
        population.textContent = "Population: " + towns[i].currentPopulation;
        rainfall.textContent = "Annual Rainfall: " + towns[i].averageRainfall;

      
      image.setAttribute('src', "images/" + towns[i].photo);
      image.setAttribute('alt', "picture of: " + h2.textContent);
      
      square.appendChild(h2);
      square.appendChild(h3);
      square.appendChild(p);
      square.appendChild(p);
      square.appendChild(img);

    document.querySelector('div.towns').appendChild(square);
    }
}
    

});
